import argparse
import base64
import json
import os
import shutil
import threading
import time
from os import walk
from pathlib import Path
from time import strftime
from typing import Any

from docker.errors import DockerException

from operations.analysis import Analysis
import crome_cgg.cgg as crome_cgg
from flask import Flask, Response, request
from flask_socketio import SocketIO, emit

from crome_cgg.goal import Goal
from operations.modelling import Modelling

from backend.shared.paths import (
    build_path,
    goals_path,
    project_path,
    session_path,
    storage_path,
)
from backend.tools.persistence import load_goals, dump_goals


parser = argparse.ArgumentParser(description="Launching Flask Backend")
parser.add_argument(
    "serve", default=False, type=bool, help="indicate if serving the pages"
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
def get_projects(data) -> list[list[dict[str, str]]]:
    list_of_projects: list[
        list[dict[str, str]]
    ] = []  # array that will be sent containing all projects #
    session_id = str(data["session"])
    tab_id = str(request.args.get("tabId"))
    list_of_sessions: list[str] = [f"default", session_id]

    for session in list_of_sessions:
        session_folder = session_path(session)

        if os.path.isdir(session_folder):  # if there is a folder for this session #
            dir_path, dir_names, filenames = next(walk(session_folder))
            for subdir in dir_names:
                project_folder: Path = Path(os.path.join(dir_path, subdir))
                folder_path, project_directories, project_files = next(
                    walk(project_folder)
                )
                default_project: list[dict[str, str]] = []
                for file in project_files:
                    if os.path.splitext(file)[1] == ".json":
                        with open(Path(os.path.join(folder_path, file))) as json_file:
                            json_obj = json.load(json_file)
                            json_str = json.dumps(json_obj)
                            default_project.append(
                                {
                                    "title": os.path.splitext(file)[0],
                                    "content": json_str,
                                }
                            )
                    if os.path.splitext(file)[1] == ".png":
                        with open(
                                Path(os.path.join(folder_path, file)), "rb"
                        ) as png_file:
                            read_png_file = base64.b64encode(png_file.read())
                            default_project.append(
                                {"title": "image", "content": str(read_png_file)}
                            )

                list_of_projects.append(default_project)

    emit("receive-projects", list_of_projects, room=users[session_id][tab_id])
    return list_of_projects


@socketio.on("save-project")
def save_project(data) -> None:
    print("SAVE PROJECT : " + str(data["session"]))
    session_id: str = data["world"]["info"]["session_id"]
    tab_id = str(request.args.get("tabId"))
    session_dir = session_path(session_id)
    if not os.path.isdir(session_dir):
        os.makedirs(session_dir)
    is_simple = data["world"]["info"]["project_id"] == "simple"
    if is_simple:
        number_of_copies = 1
        while os.path.isdir(
                os.path.join(
                    storage_path, f"sessions/{session_id}/simple_{number_of_copies}"
                )
        ):
            number_of_copies += 1
        data["world"]["environment"]["project_id"] = f"simple_{number_of_copies}"
        data["world"]["info"]["project_id"] = f"simple_{number_of_copies}"
    project_dir = project_path(session_id, data["world"]["info"]["project_id"])
    if not os.path.isdir(project_dir):
        os.mkdir(project_dir)
    goals_dir = goals_path(session_id, data["world"]["info"]["project_id"])
    if not os.path.isdir(goals_dir):
        if is_simple:
            shutil.copytree(
                goals_path("default", "simple"), goals_dir
            )
        else:
            os.mkdir(goals_dir)
    list_of_files = ["environment", "info"]
    for filename in list_of_files:
        json_file = open(os.path.join(project_dir, filename + ".json"), "w")
        json_formatted = json.dumps(data["world"][filename], indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()
    name: str = data["world"]["info"]["name"]
    now = time.localtime(time.time())
    emit("project-saved", data["world"]["info"]["project_id"], room=users[session_id][tab_id])
    send_message_to_user(content=strftime("%H:%M:%S", now) + ' The project "' + name + '" has been saved.',
                         room_id=users[session_id][tab_id], crometype="success")

    print("creating environment test")
    Modelling.create_environment(project_dir)
    print("saved")


@socketio.on("save-image")
def save_image(data) -> None:
    img_data = bytes(data["image"], "utf-8")

    current_project_image = Path(
        os.path.join(
            storage_path,
            f"s_{data['session']}/p_{data['project']}/environment.png",
        )
    )

    with open(current_project_image, "wb") as fh:
        fh.write(base64.decodebytes(img_data))


@socketio.on("delete-project")
def delete_project(data) -> None:
    session_id = str(data["session"])
    tab_id = str(request.args.get("tabId"))
    current_session_folder = session_path(session_id)
    dir_path, dir_names, filenames = next(walk(current_session_folder))
    i = 1

    for name in dir_names:
        if i == data["index"]:
            if len(dir_names) == 1:
                shutil.rmtree(current_session_folder)
            else:
                dir_to_delete = Path(os.path.join(current_session_folder, name))
                shutil.rmtree(dir_to_delete)
        i += 1

    emit("deletion-complete", True, room=request.sid)
    now = time.localtime(time.time())
    send_message_to_user(content=strftime("%H:%M:%S", now) + " The project has been deleted.",
                         room_id=users[session_id][tab_id], crometype="success")


@socketio.on("get-goals")
def get_goals(data) -> None:

    session_id = str(data["session"])
    tab_id = str(request.args.get("tabId"))
    goals_folder = goals_path(session_id, data["project"])

    """Retrieving files"""
    if os.path.isdir(goals_folder):
        files_paths = []
        dir_path, dir_names, filenames = next(walk(goals_folder))
        for file in filenames:
            files_paths.append(Path(os.path.join(dir_path, file)))

        list_of_goals = []
        for path in files_paths:
            with open(path) as json_file:
                json_obj = json.load(json_file)
                json_str = json.dumps(json_obj)
                list_of_goals.append(json_str)

        emit("receive-goals", list_of_goals, room=users[session_id][tab_id])


@socketio.on("add-goal")
def add_goal(data) -> None:
    project_id = data["projectId"]
    session_id = str(data["session"])
    tab_id = str(request.args.get("tabId"))
    is_simple = str(project_id) == "simple"
    if is_simple:
        project_id = copy_simple(session_id)

    goals_dir = goals_path(session_id, project_id)
    print(data["goal"])
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
        emit("saving-simple", project_id, room=users[session_id][tab_id])
    else:
        emit("goal-saved", True, room=users[session_id][tab_id])

    now = time.localtime(time.time())
    name: str = data["goal"]["name"]

    error_occurrence = True

    try:
        Modelling.add_goal(
            project_path(data["session"], project_id),
            data["goal"]["filename"],
            data["goal"]["id"],
        )
        send_message_to_user(content=strftime("%H:%M:%S", now) + ' The goal "' + name + '" has been saved.',
                             room_id=users[session_id][tab_id], crometype="success")
        error_occurrence = False
    except KeyError as keyError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + '" has not been saved. Error with the entry of the '
                                                               f'LTL/Pattern \n KeyError : {keyError}',
            room=users[session_id][tab_id],
        )
    except SyntaxError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. You did not put an expression '
                                                               f'for the LTL',
            room=users[session_id][tab_id]
        )
    except Exception as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + f'" has not been saved. Error unknown : {e}',
            room=users[session_id][tab_id]
        )

    if error_occurrence:
        emit(
            "send-notification",
            {"crometypes": "error",
             "content": strftime("%H:%M:%S", now) + ' The goal "' + name + '" has not been saved.'},
            room=users[session_id][tab_id],
        )


@socketio.on("delete-goal")
def delete_goal(data) -> None:
    project_id = data["project"]
    session_id = data["session"]
    tab_id = request.args.get('tabId')
    is_simple = str(project_id) == "simple"
    if is_simple:
        project_id = copy_simple(data["session"])

    current_goals_folder = goals_path(session_id, project_id)
    dir_path, dir_names, filenames = next(walk(current_goals_folder))
    i = 0
    for goal_file in filenames:
        if i == data["index"]:
            goal_to_delete = Path(os.path.join(current_goals_folder, goal_file))
            with open(goal_to_delete) as json_file:
                json_content = json.load(json_file)
                id_to_remove = json_content["id"]
            os.remove(goal_to_delete)
        i += 1
    if is_simple:
        emit("deleting-simple", project_id, room=users[session_id][tab_id])

    # Now we remove the goal from the .dat file
    project_folder: Path = project_path(session_id, project_id)
    set_of_goals: set[Goal] = load_goals(str(project_folder))

    if set_of_goals is not None:
        tmp: set[Goal] = set()

        for goal in set_of_goals:
            if goal.id != id_to_remove:
                tmp.add(goal)

        dump_goals(tmp, str(project_folder))

    now = time.localtime(time.time())
    send_message_to_user(content=strftime("%H:%M:%S", now) + " The goal has been deleted.",
                         room_id=users[session_id][tab_id], crometype="success")


@socketio.on("check-goals")
def check_goals(data) -> None:
    session_id: str = data["session"]
    project_id: str = data["project"]
    tab_id: str = request.args.get("tabId")
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
                             room_id=users[session_id][tab_id],
                             crometype="warning")


@socketio.on("get-patterns")
def get_patterns() -> None:
    session_id = request.args.get("id")
    tab_id = request.args.get("tabId")
    robotic_patterns_file = Path(
        os.path.join(storage_path, "crome/patterns/robotic.json")
    )
    with open(robotic_patterns_file) as json_file:
        robotic_patterns = json.load(json_file)

    emit(
        "receive-patterns", {"robotic": json.dumps(robotic_patterns)}, room=users[session_id][tab_id]
    )


@socketio.on("process-goals")
def process_goals(data) -> None:
    now = time.localtime(time.time())
    session_id = data["session"]
    tab_id = request.args.get("tabId")

    emit(
        "send-notification",
        {"crometypes": "info", "content": strftime("%H:%M:%S", now) + " The CGG is being built"},
        room=users[session_id][tab_id],
    )
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + " The CGG is being built",
        room=users[session_id][tab_id],
    )
    emit("cgg-production", True, room=users[session_id][tab_id])

    session = "default" if data["project"] == "simple" else session_id
    project_folder = project_path(session, data["project"])

    if session == "default" and not os.path.exists(
            os.path.join(project_folder, "goals.dat")
    ):
        build_simple_project()

    set_of_goals: set[Goal] | None = None

    # Now we try to create the Cgg by capturing the possible errors and give them to the user
    try:
        set_of_goals = load_goals(str(project_folder))
        if set_of_goals is None:
            emit(
                "send-message",
                "No goals has been saved, please create them correctly",
                room=users[session_id][tab_id]
            )
    except DockerException:
        emit(
            "send-message",
            "Error while retrieving the goals, Docker is not start. Please contact an Administrator",
            room=users[session_id][tab_id]
        )
    except Exception as e:
        emit(
            "send-message",
            f"Error while retrieving the goals. Error : {e}",
            room=users[session_id][tab_id]
        )
    from crome_cgg.goal.exceptions import GoalException

    error_occurrence = True

    try:
        if set_of_goals is None:
            raise UnboundLocalError("Can't get the goal of this project")

        cgg = crome_cgg.Cgg(init_goals=set_of_goals)
        json_content = cgg.export_to_json(project_folder)
        emit(
            "send-notification",
            {"crometypes": "success", "content": "CGG has been built!"},
            room=users[session_id][tab_id],
        )
        time.sleep(3)
        emit("cgg-saved", json_content, room=request.sid)

        error_occurrence = False
    except GoalException as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + " Cannot build CGG : " + str(e),
            room=users[session_id][tab_id],
        )

    except UnboundLocalError:
        pass
    except Exception as e:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + " Exception : " + str(e),
            room=users[session_id][tab_id],
        )

    if error_occurrence:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "CGG cannot be built, see console for more info",
            },
            room=users[session_id][tab_id],
        )


@socketio.on("process-cgg")
def process_cgg(data) -> None:
    session_id = request.args.get("id")
    tab_id = request.args.get("tabId")
    cgg_file_path = Path(os.path.join(storage_path, "crome/cgg.json"))
    with open(cgg_file_path) as json_file:
        cgg_file = json.load(json_file)
    emit("receive-cgg", {"cgg": json.dumps(cgg_file)}, room=users[session_id][tab_id])


@socketio.on("apply-conjunction")
def conjunction(data) -> None:
    print("APPLY OPERATION : conjunction")
    session_id = data["session"]
    tab_id = request.args.get("tabId")

    project_id = data["goals"][0].split("-")[-2]

    Analysis.conjunction(str(project_path(session_id, project_id)), data["goals"])

    emit("operation-complete", True, room=users[session_id][tab_id])


@socketio.on("apply-composition")
def composition(data) -> None:
    print("APPLY OPERATION : composition")
    session_id = data["session"]
    tab_id = request.args.get("tabId")

    project_id = data["goals"][0].split("-")[-2]

    Analysis.composition(str(project_path(data["session"], project_id)), data["goals"])

    emit("operation-complete", True, room=users[session_id][tab_id])


@socketio.on("apply-disjunction")
def disjunction(data) -> None:
    print("APPLY OPERATION : disjunction")
    session_id = data["session"]
    tab_id = request.args.get("tabId")

    emit("operation-complete", True, room=users[session_id][tab_id])


@socketio.on("apply-refinement")
def refinement(data) -> None:
    print("APPLY OPERATION : refinement")
    session_id = data["session"]
    tab_id = request.args.get("tabId")
    emit("operation-complete", True, room=users[session_id][tab_id])


@socketio.on("apply-extension")
def extension(data) -> None:
    print("APPLY OPERATION : extension")
    session_id = data["session"]
    tab_id = request.args.get("tabId")
    emit("operation-complete", True, room=users[session_id][tab_id])


@socketio.on("session-existing")
def check_if_session_exist(data) -> None:
    session_id = str(data["session"])
    tab_id = request.args.get("tabId")
    cookie = str(data["cookie"])
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

    emit("receive-answer", found, room=users[session_id][tab_id])


@socketio.on("disconnect")
def disconnected() -> None:
    print("Disconnected")
    print(request.args)
    print(f'ID {request.args.get("id")}')

    session_id = str(request.args.get("id"))
    tab_id = str(request.args.get("tabId"))

    if session_id in users and users[session_id] != {}:
        now = time.localtime(time.time())
        emit(
            "send-message",
            f"{strftime('%H:%M:%S', now)} Session {request.args.get('id')} disconnected",
            room=users[session_id][tab_id]
        )
        del users[session_id][tab_id]


@app.route("/")
def index() -> Response:
    return app.send_static_file("index.html")


@app.route("/time")
def get_current_time() -> dict[str, float]:
    return {"time": time.time()}


def copy_simple(session_id: str) -> str:
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
    project_dir = project_path("default", "simple")
    Modelling.create_environment(project_dir)
    Modelling.add_goal(project_dir, "0000.json", "default-simple-0000")
    Modelling.add_goal(project_dir, "0001.json", "default-simple-0001")
    Modelling.add_goal(project_dir, "0002.json", "default-simple-0002")
    Modelling.add_goal(project_dir, "0003.json", "default-simple-0003")


def send_message_to_user(content: str, room_id: str, crometype: str) -> None:
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
