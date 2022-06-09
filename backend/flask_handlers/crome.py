import json
import os
import time
from os import walk
from pathlib import Path
from time import strftime

from docker.errors import DockerException
from flask import request
from flask_socketio import emit

from backend.operations.modelling import Modelling
from backend.shared.paths import goals_path, project_path, storage_path
from backend.tools.persistence import load_goals, load_cgg, dump_cgg
from backend.utility.goal import GoalUtility
from backend.utility.project import ProjectUtility
from backend.app import send_message_to_user, copy_simple, build_simple_project
from crome_cgg.context import ContextException
import crome_cgg.cgg as crome_cgg

try:
    from __main__ import socketio
except ImportError:
    from backend.app import socketio


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

    ProjectUtility.save_project(data, session_id)

    name: str = data["world"]["info"]["name"]
    now = time.localtime(time.time())
    emit("project-saved", data["world"]["info"]["project_id"], room=request.sid)
    send_message_to_user(content=strftime("%H:%M:%S", now) + ' The project "' + name + '" has been saved.',
                         room_id=request.sid, crometype="success")


@socketio.on("save-image")
def save_image(data) -> None:
    """
    We save the screenshot taken of the world project. The frontend send us the binary code of the image.
    We just have to write it inside the good folder.
    """

    session_id = str(request.args.get("id"))
    ProjectUtility.save_image(data, session_id)


@socketio.on("delete-project")
def delete_project(data) -> None:
    """
    Delete the folder corresponding to the project.
    The front give us only an index value corresponding of the date of creation of the project.
    """
    session_id = str(request.args.get("id"))
    ProjectUtility.delete_project(data, session_id)

    emit("deletion-complete", True, room=request.sid)
    now = time.localtime(time.time())
    send_message_to_user(content=time.strftime("%H:%M:%S", now) + " The project has been deleted.",
                         room_id=request.sid, crometype="success")


@socketio.on("get-goals")
def get_goals(data) -> None:
    """
    Send the json content of all goals created inside the project.
    """
    list_of_goals = GoalUtility.get_goals(data, request.args.get("id"))

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

    goals_dir = goals_path(session_id, project_id)

    if "id" not in data["goal"]:
        dir_path, dir_names, filenames = next(walk(goals_dir))
        greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
        greatest_id += 1
        data["goal"]["id"] = (
                session_id + "-" + project_id + "-" + str(greatest_id).zfill(4)
        )
        filename = str(greatest_id).zfill(4) + ".json"
        data["goal"]["filename"] = filename
    json_file = open(os.path.join(goals_dir, data["goal"]["filename"]), "w")
    json_formatted = json.dumps(data["goal"], indent=4, sort_keys=True)
    json_file.write(json_formatted)
    json_file.close()
    if is_simple:
        emit("saving-simple", project_id, room=request.sid)
    else:
        emit("goal-saved", True, room=request.sid)

    now = time.localtime(time.time())
    name: str = data["goal"]["name"]

    error_occurrence = True

    try:
        Modelling.add_goal(
            project_path(session_id, project_id),
            data["goal"]["filename"],
            data["goal"]["id"],
        )
        send_message_to_user(content=strftime("%H:%M:%S", now) + ' The goal "' + name + '" has been saved.',
                             room_id=request.sid, crometype="success")
        error_occurrence = False
    except KeyError as keyError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + '" has not been saved. Error with the entry of the '
                                                               f'LTL/Pattern \n KeyError : {keyError}',
            room=request.sid,
        )
    except SyntaxError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. You did not put an expression '
                                                               f'for the LTL',
            room=request.sid
        )
    except ContextException as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. '
                                                               f'{e}',
            room=request.sid
        )
    except Exception as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. Error unknown : {e}',
            room=request.sid
        )

    if error_occurrence:
        emit(
            "send-notification",
            {"crometypes": "error",
             "content": strftime("%H:%M:%S", now) + ' The goal "' + name + '" has not been saved. See the console for '
                                                                           'more information'},
            room=request.sid,
        )


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

    GoalUtility.delete_goal(data, session_id, project_id)

    if is_simple:
        emit("deleting-simple", project_id, room=request.sid)

    # Now we remove the goal from the .dat file
    now = time.localtime(time.time())
    send_message_to_user(content=strftime("%H:%M:%S", now) + " The goal has been deleted.",
                         room_id=request.sid, crometype="success")


@socketio.on("check-goals")
def check_goals(data) -> None:
    """
    Before the user goes to the Analysis page, we check if there are goals in goal.dat.
    If not, we notify the user of this missing goal.
    """
    session_id = str(request.args.get("id"))
    project_id = str(data["project"])
    if project_id == "simple":
        return

    emit_warning = False
    set_of_goals = None
    try:
        set_of_goals = load_goals(str(project_path(session_id, project_id)))
    except Exception:
        emit_warning = True

    if set_of_goals is None or set_of_goals == set() or emit_warning:
        send_message_to_user(content="No goals found for the project, please try to recreate them.",
                             room_id=request.sid,
                             crometype="warning")


@socketio.on("get-patterns")
def get_patterns() -> None:
    """
    Send to the frontend the name and the usage of all the pattern used. It gives also a short description of each one.
    """
    robotic_patterns_file = Path(
        os.path.join(storage_path, "crome/patterns/robotic.json")
    )
    with open(robotic_patterns_file) as json_file:
        robotic_patterns = json.load(json_file)

    emit(
        "receive-patterns", {"robotic": json.dumps(robotic_patterns)}, room=request.sid
    )


@socketio.on("process-goals")
def process_goals(data) -> None:
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

    session = "default" if data["project"] == "simple" else session_id
    project_folder = project_path(session, data["project"])

    if session == "default" and not os.path.exists(
            os.path.join(project_folder, "goals.dat")
    ):
        build_simple_project()

    # Now we try to create the Cgg by capturing the possible errors and give them to the user
    set_of_goals = None
    try:
        set_of_goals = load_goals(str(project_folder))

    except DockerException:
        emit(
            "send-message",
            "Error while retrieving the goals, Docker is not start. Please contact an Administrator",
            room=request.sid
        )
    except Exception as e:
        emit(
            "send-message",
            f"Error while retrieving the goals. Error : {e}",
            room=request.sid
        )
    if set_of_goals is None:
        emit(
            "send-message",
            "No goals has been saved, please create them correctly. See the console for more information",
            room=request.sid
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