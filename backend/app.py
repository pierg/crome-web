import argparse
import json
import os
import shutil
import threading
import time
from os import walk
from pathlib import Path
from time import strftime
from typing import Any

from backend.operations.synthesis import Synthesis
from backend.utility.goal import GoalUtility
from crome_cgg.context import ContextException
from docker.errors import DockerException

from crome_cgg.goal.exceptions import GoalAlgebraOperationFail
from operations.analysis import Analysis
from backend.utility.project import ProjectUtility
import crome_cgg.cgg as crome_cgg
from flask import Flask, Response, request
from flask_socketio import SocketIO, emit
from operations.modelling import Modelling

from backend.shared.paths import (
    build_path,
    goals_path,
    project_path,
    storage_path, controller_path,
)
from backend.tools.persistence import load_goals, dump_cgg, load_cgg

parser = argparse.ArgumentParser(description="Launching Flask Backend")
parser.add_argument(
    "--serve", default=False, type=bool, help="indicate if serving the pages"
)
args = parser.parse_args()

if args.serve:
    print("Serving the web pages from the build folder")
    app = Flask(__name__, static_folder=str(build_path), static_url_path="/")
else:
    print("Launching Backend")
    app = Flask(__name__)

socketio = SocketIO(app, cors_allowed_origins="*")

users: dict[str, Any] = {}
# String dictionary associating the id of the request to talk to the user with the session id given by the frontend.

cookies: dict[str, str] = {}


# String dictionary association the id of the session with that of the cookie that can open it.

# HOW TO SEND A NOTIFICATION :
# emit("send-notification", {"crometypes": "error", "content": "message appearing"}, room=users[data['session']])
# crometypes : error = red,
#         success = green,
#         warning = yellow,
#         info = blue


@socketio.on("connect")
def connected() -> None:
    """
    Establish the connection between the front and the back
    while checking that the session is not already in use.
    """
    print("Connected")
    print(f'ID {request.args.get("id")}')
    lock = threading.Lock()
    lock.acquire()
    session_id = str(request.args.get("id"))
    cookie = str(request.args.get("cookie"))
    tab_id = str(request.args.get("tabId"))
    if session_id in users:  # Check if this session is already open
        if cookie != cookies[session_id]:
            emit(
                "is-connected",
                False,
                room=request.sid
            )
            return
    else:
        users[session_id] = {}
    users[session_id][tab_id] = request.sid
    cookies[session_id] = cookie
    now = time.localtime(time.time())
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + f" Connected to session {request.args.get('id')}",
        room=request.sid
    )
    emit(
        "is-connected",
        True,
        room=request.sid
    )
    lock.release()


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
    send_message_to_user(content=strftime("%H:%M:%S", now) + " The project has been deleted.",
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


@socketio.on("apply-conjunction")
def conjunction(data) -> None:
    """
    Apply the conjunction operation on the given goals.
    """
    print("APPLY OPERATION : conjunction")
    session_id = str(request.args.get("id"))
    project_id = data["goals"][0].split("-")[-2]
    try:
        Analysis.conjunction(str(project_path(session_id, project_id)), data["goals"])
    except ContextException:
        emit("operation-complete", False, room=request.sid)

    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-composition")
def composition(data) -> None:
    """
        Apply the composition operation on the given goals.
    """
    print("APPLY OPERATION : composition")
    session_id = str(request.args.get("id"))

    project_id = data["project"]
    try:
        Analysis.composition(str(project_path(session_id, project_id)), data["goals"])
    except ContextException:
        emit("operation-complete", False, room=request.sid)

    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-disjunction")
def disjunction(data) -> None:
    """
        Apply the disjunction operation on the given goals.
    """
    print("APPLY OPERATION : disjunction")

    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-refinement")
def refinement(data) -> None:
    """
        Apply the refinement operation on the given goals.
    """
    print("APPLY OPERATION : refinement")

    session_id = request.args.get("id")
    project_id = data["project"]
    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.refinement(project_folder, data["abstract"], data["refine"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {"crometypes": "error", "content": "Problem while applying refinement operation."
                                               " See the console for more information"},
            room=request.sid
        )
        emit(
            "send-message",
            e.__str__(),
            room=request.sid
        )
        emit("operation-complete", False, room=request.sid)
        return

    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-extension")
def extension(data) -> None:
    """
        Apply the extension operation on the given goals.
    """
    print("APPLY OPERATION : extension")

    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-quotient")
def quotient(data) -> None:
    """
        Apply the quotient operation on the two goals given
    """
    print("APPLY OPERATION : quotient")
    project_id = data["project"]
    session_id = request.args.get("id")
    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.quotient(project_folder, data["dividend"], data["divisor"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {"crometypes": "error", "content": "Problem while applying quotient operation."
                                               " See the console for more information"},
            room=request.sid
        )
        emit(
            "send-message",
            e.__str__(),
            room=request.sid
        )
        emit("operation-complete", False, room=request.sid)
        return

    emit("operation-complete", True, room=request.sid)


@socketio.on("get-synthesis")
def get_synthesis() -> None:
    """
        get the synthesis created by the user and the examples.
    """
    list_examples = Synthesis.get_synthesis(str(request.args.get("id")))

    emit("receive-synthesis", list_examples, room=request.sid)


@socketio.on("save-synthesis")
def save_synthesis(data) -> None:
    """
        Save the current synthesis inside a .txt file inside the session folder
    """
    session_id = str(request.args.get("id"))
    try:
        Synthesis.create_txt_file(data, session_id)
    except Exception as e:
        send_message_to_user(e.__str__(), "error", request.sid)
    send_message_to_user("The mealy has been saved", "success", request.sid)
    emit("synthesis-saved", True, room=request.sid)


@socketio.on("controller-strix")
def create_controller_strix(name) -> None:
    """
        Create the controller and the mealy according to the strix method
    """
    json_content = Synthesis.create_controller(name, request.args.get("id"), "strix")

    send_message_to_user("The mealy has been created using strix method", "success", request.sid)
    emit("controller-created-strix", json_content, room=request.sid)


@socketio.on("controller-crome")
def create_controller_crome(name) -> None:
    """
        Create the controller and the mealy according to the parallel method
    """
    json_content = Synthesis.create_controller(name, request.args.get("id"), "crome")
    send_message_to_user("The mealy has been created using parallel method", "success", request.sid)
    emit("controller-created-crome", json_content, room=request.sid)


@socketio.on("simulate-strix")
def simulate_controller_strix(name) -> None:
    """
        Simulate the mealy according to the method strix
    """
    content = Synthesis.simulate_controller(name, request.args.get("id"), "strix")
    send_message_to_user("The mealy has been simulated", "success", request.sid)
    emit("mealy-simulated-strix", content)


@socketio.on("simulate-crome")
def simulate_controller_crome(name) -> None:
    """
        Simulate the mealy according to the parallel method
    """
    content = Synthesis.simulate_controller(name, request.args.get("id"), "crome")
    send_message_to_user("The mealy has been simulated", "success", request.sid)
    emit("mealy-simulated-crome", content)


@socketio.on("session-existing")
def check_if_session_exist(data) -> None:
    """
    Check if a session is free and if the user can enter it.
    """
    session_id = str(data["session"])
    tab_id = str(request.args.get("tabId"))
    cookie = str(request.args.get("cookie"))
    print("check if following session exists : " + session_id)
    dir_path, dir_names, filenames = next(walk(storage_path))
    found = False
    sessions_folder = f"s_" + session_id
    for dir_name in dir_names:
        if dir_name == sessions_folder and dir_name != "default":
            found = True
    if session_id == "default":
        found = False

    if found:
        if session_id in users and cookie != cookies[session_id]:
            found = False
    print(f"users : {users}")
    emit("receive-answer", found, room=users[str(request.args.get("id"))][tab_id])


@socketio.on("disconnect")
def disconnected() -> None:
    """
    It disconnects the user of the session he was attached to.
    """
    print("Disconnected")
    print(request.args)
    print(f'ID {request.args.get("id")}')

    session_id = str(request.args.get("id"))
    tab_id = str(request.args.get("tabId"))

    if session_id in users and tab_id in users[session_id]:
        now = time.localtime(time.time())
        emit(
            "send-message",
            f"{strftime('%H:%M:%S', now)} Session {request.args.get('id')} disconnected",
            room=request.sid
        )
        del users[session_id][tab_id]


@app.route("/")
def index() -> Response:
    return app.send_static_file("index.html")


@app.route("/time")
def get_current_time() -> dict[str, float]:
    return {"time": time.time()}


def copy_simple(session_id: str) -> str:
    """
    Copy the default session into the desired session.
    """
    number_of_copies = 1
    while os.path.isdir(
            project_path(session_id, f"simple_{number_of_copies}")
    ):
        number_of_copies += 1
    project_id = f"simple_{number_of_copies}"
    shutil.copytree(
        project_path("default", "simple"),
        project_path(session_id, project_id),
    )

    list_save = ["info", "environment"]
    for i in list_save:
        with open(
                os.path.join(project_path(session_id, project_id), f"{i}.json"),
        ) as file:
            json_data = json.load(file)
        if i == "info":
            json_data["name"] = f"Simple Gridworld ({number_of_copies})"
        json_data["project_id"] = project_id
        json_data["session_id"] = session_id
        with open(
                os.path.join(project_path(session_id, project_id), f"{i}.json"),
                "w",
        ) as file:
            json_formatted = json.dumps(json_data, indent=4, sort_keys=True)
            file.write(json_formatted)
    return project_id


def build_simple_project() -> None:
    """
    Build the default project with all the .dat file.
    """
    project_dir = project_path("default", "simple")
    Modelling.create_environment(project_dir)
    Modelling.add_goal(project_dir, "0000.json", "default-simple-0000")
    Modelling.add_goal(project_dir, "0001.json", "default-simple-0001")
    Modelling.add_goal(project_dir, "0002.json", "default-simple-0002")
    Modelling.add_goal(project_dir, "0003.json", "default-simple-0003")


def send_message_to_user(content: str, room_id: str, crometype: str) -> None:
    """
    Simplified version to send a notification and a message to a user.
    """
    emit(
        "send-notification",
        {"crometypes": crometype, "content": content},
        room=room_id
    )
    emit(
        "send-message",
        content,
        room=room_id
    )


if __name__ == "__main__":
    # app.run(host='localhost', debug=True, port=3000)*
    socketio.run(app, host="0.0.0.0")
