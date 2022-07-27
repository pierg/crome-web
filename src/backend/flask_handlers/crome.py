import json
import os
import time
from pathlib import Path
from time import strftime

import crome_cgg.cgg as crome_cgg
from crome_cgg.context import ContextException
from docker.errors import DockerException
from flask import request
from flask_socketio import emit

from src.backend.app import build_simple_project, copy_simple, send_message_to_user
from src.backend.operations.simulation import Simulation
from src.backend.shared.paths import project_path, storage_path
from src.backend.tools.persistence import dump_cgg, load_cgg, load_goals
from src.backend.utility.goal import GoalUtility
from src.backend.utility.project import ProjectUtility

try:
    from __main__ import socketio
except ImportError:
    from src.backend.app import socketio


@socketio.on("get-projects")
def get_projects() -> None:
    """
    Get the list of all the project created by this session. We gave to the frontend the json content plus the image.
    """
    session_id = str(request.args.get("id"))
    list_of_projects = ProjectUtility.get_projects(session_id)

    emit("receive-projects", list_of_projects, room=request.sid)


@socketio.on("save-project")
def save_project(data) -> None:
    """
    Save the new World created by the user. If it is a modification of the default project, we make a copy of the
    default project in the session folder that we then modify.
    """
    session_id = str(request.args.get("id"))
    name: str = data["world"]["info"]["name"]
    send_message_to_user(content='The project "' + name + '" is being saved.', room_id=request.sid, crometype="success")

    ProjectUtility.save_project(data, session_id)

    emit("project-saved", data["world"]["info"]["project_id"], room=request.sid)
    send_message_to_user(content='The project "' + name + '" has been saved.', room_id=request.sid, crometype="success")


@socketio.on("save-image")
def save_image(data) -> None:
    """
    We save the screenshot taken of the world project. The frontend send us the binary code of the image.
    We just have to write it inside the good folder.
    """

    session_id = str(request.args.get("id"))
    ProjectUtility.save_image(data, session_id)


@socketio.on("delete-project")
def delete_project(project_id) -> None:
    """
    Delete the folder corresponding to the project.
    """
    session_id = str(request.args.get("id"))
    is_deleted = ProjectUtility.delete_project(project_id, session_id)

    emit("deletion-complete", is_deleted, room=request.sid)
    if is_deleted:
        send_message_to_user(content="The project has been deleted.", room_id=request.sid, crometype="success")
    else:
        send_message_to_user(content="The project has not been deleted.", room_id=request.sid, crometype="error")


@socketio.on("get-goals")
def get_goals(project_id) -> None:
    """
    Send the json content of all goals created inside the project.
    """
    list_of_goals = GoalUtility.get_goals(project_id, request.args.get("id"))

    emit("receive-goals", list_of_goals, room=request.sid)


@socketio.on("add-goal")
def add_goal(data) -> None:
    """
    The front end send us all the information of the goal (a new goal without ID or a modified goal) in the form of a
    json file. We just put this information in the right file, and then we add the goal in goal.dat file thanks to
    Modelling. It catches also all the error related to the goal creation and send them to the user.
    """
    project_id = str(data["project_id"])
    session_id = str(request.args.get("id"))
    is_simple = str(project_id) == "simple"
    if is_simple:
        project_id = copy_simple(session_id)

    if is_simple:
        emit("saving-simple", project_id, room=request.sid)

    now = time.localtime(time.time())
    name: str = data["goal"]["name"]

    error_occurrence = True

    try:
        GoalUtility.add_goal(data, session_id, project_id)
        send_message_to_user(
            content='The goal "' + name + '" has been saved.', room_id=request.sid, crometype="success"
        )
        error_occurrence = False
    except KeyError as keyError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + '" has not been saved. Error with the entry of the '
            f"LTL/Pattern \n KeyError : {keyError}",
            room=request.sid,
        )
    except SyntaxError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. You did not put an expression '
            f"for the LTL",
            room=request.sid,
        )
    except ContextException as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. ' f"{e}",
            room=request.sid,
        )
    except Exception as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. Error unknown : {e}',
            room=request.sid,
        )

    if error_occurrence:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": strftime("%H:%M:%S", now)
                + ' The goal "'
                + name
                + '" has not been saved. See the console for '
                "more information",
            },
            room=request.sid,
        )
        emit("goal-saved", False, room=request.sid)
        return

    emit("goal-saved", True, room=request.sid)


@socketio.on("delete-goal")
def delete_goal(data) -> None:
    """
    We delete the json file related to the goal id given by the frontend.
    Moreover, we supress it from the goal.dat file.
    """
    project_id = str(data["project"])
    session_id = str(request.args.get("id"))
    is_simple = str(project_id) == "simple"
    if is_simple:
        project_id = copy_simple(session_id)

    GoalUtility.delete_goal(data["goal_id"], session_id, project_id)

    if is_simple:
        emit("deleting-simple", project_id, room=request.sid)

    # Now we remove the goal from the .dat file
    send_message_to_user(content="The goal has been deleted.", room_id=request.sid, crometype="success")


@socketio.on("check-goals")
def check_goals(project_id) -> None:
    """
    Before the user goes to the Analysis page, we check if there are goals in goal.dat.
    If not, we notify the user of this missing goal.
    """
    session_id = str(request.args.get("id"))
    if project_id == "simple":
        return

    emit_warning = False
    set_of_goals = None
    try:
        set_of_goals = load_goals(str(project_path(session_id, project_id)))
    except Exception:
        emit_warning = True

    if set_of_goals is None or set_of_goals == set() or emit_warning:
        send_message_to_user(
            content="No goals found for the project, please try to recreate them.",
            room_id=request.sid,
            crometype="warning",
        )


@socketio.on("get-patterns")
def get_patterns() -> None:
    """
    Send to the frontend the name and the usage of all the pattern used. It gives also a short description of each one.
    """
    from crome_logic.patterns.robotic_movement import CoreMovement
    from crome_logic.patterns.robotic_triggers import Trigger

    robotic_patterns_file = Path(os.path.join(storage_path, "crome/patterns/robotic.json"))

    if not os.path.exists(storage_path / "crome" / "patterns"):
        os.makedirs(storage_path / "crome" / "patterns")

    json_content = []
    for c in CoreMovement.__subclasses__():
        content = {"name": c.name, "description": c.description, "ltl_example": "", "arguments": c.arguments}

        json_content.append(content)
    for c in Trigger.__subclasses__():
        content = {"name": c.name, "description": c.description, "ltl_example": "", "arguments": c.arguments}
        json_content.append(content)

    json_file = open(robotic_patterns_file, "w")
    json_formatted = json.dumps(json_content, indent=4, sort_keys=False)
    json_file.write(json_formatted)
    json_file.close()
    emit("receive-patterns", {"robotic": json.dumps(json_content)}, room=request.sid)


@socketio.on("process-goals")
def process_goals(project_id) -> None:
    """
    Create the CGG corresponding to the project. It checks all the error and send them to the user.
    """
    now = time.localtime(time.time())
    session_id = str(request.args.get("id"))

    emit(
        "send-notification",
        {"crometypes": "info", "content": strftime("%H:%M:%S", now) + " The CGG is being built"},
        room=request.sid,
    )
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + " The CGG is being built",
        room=request.sid,
    )
    emit("cgg-production", True, room=request.sid)

    session = "default" if project_id == "simple" else session_id
    project_folder = project_path(session, project_id)

    if session == "default" and not os.path.exists(os.path.join(project_folder, "goals.dat")):
        build_simple_project()

    # Now we try to create the Cgg by capturing the possible errors and give them to the user
    set_of_goals = None
    try:
        set_of_goals = load_goals(str(project_folder))

    except DockerException:
        emit(
            "send-message",
            "Error while retrieving the goals, Docker is not start. Please contact an Administrator",
            room=request.sid,
        )
    except Exception as e:
        emit("send-message", f"Error while retrieving the goals. Error : {e}", room=request.sid)
    if set_of_goals is None:
        emit(
            "send-message",
            "No goals has been saved, please create them correctly. See the console for more information",
            room=request.sid,
        )
        return

    # Before creating a new cgg, we check if one is already created with the same goals.
    good = True
    cgg = load_cgg(str(project_folder))
    if cgg is not None:
        if len(cgg.init_goals) == set_of_goals:
            for goal in set_of_goals:
                if goal not in cgg.init_goals:
                    good = False

    if good and cgg is not None:
        emit(
            "send-notification",
            {"crometypes": "success", "content": "CGG has been built!"},
            room=request.sid,
        )
        emit("cgg-saved", cgg.export_to_json(), room=request.sid)
        return

    from crome_cgg.goal.exceptions import GoalException

    error_occurrence = True

    try:
        cgg = crome_cgg.Cgg(init_goals=set_of_goals)
        dump_cgg(cgg, str(project_folder))
        json_content = cgg.export_to_json(project_folder)
        emit(
            "send-notification",
            {"crometypes": "success", "content": "CGG has been built!"},
            room=request.sid,
        )
        time.sleep(3)
        print(json_content)
        emit("cgg-saved", json_content, room=request.sid)

        error_occurrence = False
    except GoalException as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + " Cannot build CGG : " + str(e),
            room=request.sid,
        )

    except Exception as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + " Exception : " + str(e),
            room=request.sid,
        )

    if error_occurrence:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "CGG cannot be built, see console for more information",
            },
            room=request.sid,
        )


@socketio.on("get-inputs-crome")
def get_inputs_crome(project_id) -> None:
    session_id = request.args.get("id")
    inputs = Simulation.get_input_possible(project_id=project_id, session_id=session_id)
    emit("received-inputs", inputs, room=request.sid)


@socketio.on("simulate-crome")
def simulate_crome(data) -> None:
    content = Simulation.react_to_inputs(
        project_id=data["project_id"], session_id=request.args.get("id"), choice=data["input"]
    )
    send_message_to_user("The project has been simulated", "success", request.sid)
    print(content)
    emit("crome-simulated", content, room=request.sid)


@socketio.on("reset-crome")
def reset_crome(project_id) -> None:
    session_id = request.args.get("id")
    Simulation.reset_simulation(project_id=project_id, session_id=session_id)
    send_message_to_user("The simulation has been reset", request.sid, "success")
    emit("reset-done", True, room=request.sid)


@socketio.on("random-simulation-crome")
def random_simulation_crome(data) -> None:
    """
    It simulates a controller by randomly choosing the inputs for each state.
    It differentiates the two ways of simulating the synthesis.
    """
    session_id = request.args.get("id")
    content = Simulation.random_simulation(
        project_id=data["project_id"], nb_iteration=data["iterations"], session_id=session_id
    )
    emit("receive-random-simulation-crome", content, room=request.sid)
    send_message_to_user(
        f"A random simulation of {data['iterations']} iterations has been made", request.sid, "success"
    )
