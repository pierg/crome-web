import base64
import json
import os
import shutil
import threading
import time
from os import walk
from pathlib import Path
from time import strftime

from flask import Flask, request
from flask_socketio import SocketIO, emit

from backend.tools.persistence import load_goals
from crome_cgg.cgg import Cgg
from operations.modelling import Modelling


backend_folder = Path(__file__).parent.absolute()
front_end_folder = Path(__file__).parents[1].absolute() / "frontend"
build_folder = front_end_folder / "build"
storage_folder = Path(__file__).parents[2].absolute() / "storage"
if backend_folder.exists():
    print(backend_folder)
if build_folder.exists():
    print(build_folder)
if storage_folder.exists():
    print(storage_folder)

# if build_folder.exists():
#     print("serving math as well")
#     app = Flask(__name__, static_folder=str(build_folder), static_url_path='/')
# else:
#     app = Flask(__name__)


app = Flask(__name__)

socketio = SocketIO(app, cors_allowed_origins="*")

users: dict[str, str] = {}

"""
HOW TO SEND A NOTIFICATION :
emit("send-notification", {"crometypes": "error", "content": "message appearing"}, room=users[data['session']])
crometypes : error = red,
        success = green,
        warning = yellow,
        info = blue
"""


@socketio.on("connect")
def connected():
    print("Connected")
    print(request.args)
    print(f'ID {request.args.get("id")}')
    lock = threading.Lock()
    lock.acquire()
    users[request.args.get("id")] = request.sid
    now = time.localtime(time.time())
    emit("send-message", strftime("%H:%M:%S", now) + " Connected", room=request.sid)
    lock.release()


@socketio.on("get-projects")
def get_projects(data):
    list_of_projects = []  # array that will be sent containing all projects #

    list_of_sessions = [f"sessions/default", f"sessions/{data['session']}"]

    for sessions in list_of_sessions:
        session_folder = Path(os.path.join(storage_folder, sessions))
        if os.path.isdir(session_folder):  # if there is a folder for this session #
            dir_path, dir_names, filenames = next(walk(session_folder))
            for subdir in dir_names:
                project_folder = Path(os.path.join(dir_path, subdir))
                project_path, project_directories, project_files = next(
                    walk(project_folder)
                )
                default_project = []
                for file in project_files:
                    if os.path.splitext(file)[1] == ".json":
                        with open(Path(os.path.join(project_path, file))) as json_file:
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
                            Path(os.path.join(project_path, file)), "rb"
                        ) as png_file:
                            read_png_file = base64.b64encode(png_file.read())
                            default_project.append(
                                {"title": "image", "content": str(read_png_file)}
                            )

                list_of_projects.append(default_project)

    emit("receive-projects", list_of_projects, room=request.sid)


@socketio.on("save-project")
def save_project(data):
    print("SAVE PROJECT : " + str(data["session"]))
    session_id = data["world"]["info"]["session_id"]
    session_dir = os.path.join(storage_folder, f"sessions/{session_id}")
    if not os.path.isdir(session_dir):
        os.mkdir(session_dir)
    is_simple = data["world"]["info"]["project_id"] == "simple"
    if is_simple:
        number_of_copies = 1
        while os.path.isdir(
            os.path.join(
                storage_folder, f"sessions/{session_id}/simple_{number_of_copies}"
            )
        ):
            number_of_copies += 1
        data["world"]["environment"]["project_id"] = f"simple_{number_of_copies}"
        data["world"]["info"]["project_id"] = f"simple_{number_of_copies}"
    project_dir = os.path.join(session_dir, f"{data['world']['info']['project_id']}")
    if not os.path.isdir(project_dir):
        os.mkdir(project_dir)
    goals_dir = os.path.join(project_dir, "goals")
    if not os.path.isdir(goals_dir):
        if is_simple:
            shutil.copytree(
                os.path.join(storage_folder, "sessions/default/simple/goals"), goals_dir
            )
        else:
            os.mkdir(goals_dir)
    list_of_files = ["environment", "info"]
    for filename in list_of_files:
        json_file = open(os.path.join(project_dir, filename + ".json"), "w")
        json_formatted = json.dumps(data["world"][filename], indent=4, sort_keys=True)
        json_file.write(json_formatted)
        json_file.close()
    name = data["world"]["info"]["name"]
    now = time.localtime(time.time())
    emit("project-saved", data["world"]["info"]["project_id"], room=users[session_id])
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + ' The project "' + name + '" has been saved.',
        room=users[session_id],
    )

    print("creating environment test")
    Modelling.create_environment(project_dir)
    print("saved")


@socketio.on("save-image")
def save_image(data):
    img_data = bytes(data["image"], "utf-8")

    current_project_image = Path(
        os.path.join(
            storage_folder,
            f"sessions/{data['session']}/{data['project']}/environment.png",
        )
    )

    with open(current_project_image, "wb") as fh:
        fh.write(base64.decodebytes(img_data))


@socketio.on("delete-project")
def delete_project(data):
    current_session_folder = Path(
        os.path.join(storage_folder, f"sessions/{data['session']}")
    )
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
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + " The project has been deleted.",
        room=users[data["session"]],
    )


@socketio.on("get-goals")
def get_goals(data):
    goals_folder = Path(
        os.path.join(
            storage_folder, f"sessions/{data['session']}/{data['project']}/goals"
        )
    )

    """Retrieving files"""
    if os.path.isdir(goals_folder):
        files_paths = []
        dirpath, dirnames, filenames = next(walk(goals_folder))
        for file in filenames:
            files_paths.append(Path(os.path.join(dirpath, file)))

        list_of_goals = []
        for path in files_paths:
            with open(path) as json_file:
                json_obj = json.load(json_file)
                json_str = json.dumps(json_obj)
                list_of_goals.append(json_str)

        emit("receive-goals", list_of_goals, room=request.sid)


@socketio.on("add-goal")
def add_goal(data):
    project_id = data["projectId"]
    is_simple = str(project_id) == "simple"
    if is_simple:
        project_id = copy_simple(data["session"])
    goals_dir = os.path.join(
        storage_folder, f"sessions/{data['session']}/{project_id}/goals"
    )
    if "id" not in data["goal"]:
        dir_path, dir_names, filenames = next(walk(goals_dir))
        greatest_id = -1 if len(filenames) == 0 else int(max(filenames)[0:4])
        greatest_id += 1
        data["goal"]["id"] = (
            data["session"] + "-" + project_id + "-" + str(greatest_id).zfill(4)
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
        emit("saving-complete", True, room=request.sid)

    now = time.localtime(time.time())
    name = data["goal"]["name"]
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + ' The goal "' + name + '" has been saved.',
        room=users[data["session"]],
    )
    Modelling.add_goal(
        os.path.join(storage_folder, f"sessions/{data['session']}/{project_id}"),
        data["goal"]["filename"],
        data["goal"]["id"],
    )


@socketio.on("delete-goal")
def delete_goal(data):
    project_id = data["project"]
    is_simple = str(project_id) == "simple"
    if is_simple:
        project_id = copy_simple(data["session"])
    current_goals_folder = Path(
        os.path.join(storage_folder, f"sessions/{data['session']}/{project_id}/goals")
    )
    dir_path, dir_names, filenames = next(walk(current_goals_folder))
    i = 0
    for goal_file in filenames:
        if i == data["index"]:
            goal_to_delete = Path(os.path.join(current_goals_folder, goal_file))
            os.remove(goal_to_delete)
        i += 1
    if is_simple:
        emit("deleting-simple", project_id, room=request.sid)

    now = time.localtime(time.time())
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + " The goal has been deleted.",
        room=users[data["session"]],
    )


@socketio.on("get-patterns")
def get_patterns():
    print("Get patterns")
    print(request.args)
    print(f'ID {request.args.get("id")}')

    robotic_patterns_file = Path(
        os.path.join(storage_folder, "crome/patterns/robotic.json")
    )
    with open(robotic_patterns_file) as json_file:
        robotic_patterns = json.load(json_file)

    emit(
        "receive-patterns", {"robotic": json.dumps(robotic_patterns)}, room=request.sid
    )


@socketio.on("process-goals")
def process_goals(data):
    now = time.localtime(time.time())
    emit(
        "send-message",
        strftime("%H:%M:%S", now) + " The CGG is being built",
        room=users[data["session"]],
    )
    session = "default" if data["project"] == "simple" else data["session"]
    project_folder = os.path.join(
        storage_folder, f"sessions/{session}/{data['project']}"
    )
    set_of_goals = load_goals(project_folder)
    if session == "default" and not os.path.exists(
        os.path.join(project_folder, "goals.dat")
    ):
        build_simple_project()

    from crome_cgg.goal.exceptions import GoalException

    try:
        cgg = Cgg(set_of_goals)
        # TODO: Reimplement json export
        cgg.export_to_json(os.path.join(project_folder, "goals"))
        emit(
            "send-notification",
            {"crometypes": "success", "content": "CGG has been built!"},
            room=users[data["session"]],
        )
        time.sleep(3)
        emit("receive-cgg", True, room=users[data["session"]])
    except GoalException as e:
        # TODO fix this : the exception appears in build_cgg and can't be sent since the program fails
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "CGG cannot be built, see console for more info",
            },
            room=users[data["session"]],
        )
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + " Cannot build CGG : " + str(e),
            room=users[data["session"]],
        )


@socketio.on("process-cgg")
def process_cgg(data):
    cgg_file_path = Path(os.path.join(storage_folder, "crome/cgg.json"))
    with open(cgg_file_path) as json_file:
        cgg_file = json.load(json_file)
    emit("receive-cgg", {"cgg": json.dumps(cgg_file)}, room=users[data["session"]])


@socketio.on("apply-conjunction")
def conjunction(data):
    print("APPLY OPERATION : conjunction")
    print(data)
    emit("operation-complete", True, room=users[data["session"]])


@socketio.on("apply-composition")
def composition(data):
    print("APPLY OPERATION : composition")
    print(data)
    emit("operation-complete", True, room=users[data["session"]])


@socketio.on("apply-disjunction")
def disjunction(data):
    print("APPLY OPERATION : disjunction")
    print(data)
    emit("operation-complete", True, room=users[data["session"]])


@socketio.on("apply-refinement")
def refinement(data):
    print("APPLY OPERATION : refinement")
    print(data)
    emit("operation-complete", True, room=users[data["session"]])


@socketio.on("apply-extension")
def extension(data):
    print("APPLY OPERATION : extension")
    print(data)
    emit("operation-complete", True, room=users[data["session"]])


@socketio.on("session-existing")
def check_if_session_exist(session_id):
    print("check if following session exists : " + str(session_id))
    sessions_folder = Path(os.path.join(storage_folder, "sessions"))
    dir_path, dir_names, filenames = next(walk(sessions_folder))
    found = False
    for dir_name in dir_names:
        if dir_name == session_id and dir_name != "default":
            found = True
    emit("receive-answer", found, room=request.sid)


@socketio.on("disconnect")
def disconnected():
    print("Disconnected")
    print(request.args)
    print(f'ID {request.args.get("id")}')


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/time")
def get_current_time():
    return {"time": time.time()}


def copy_simple(session_id: str) -> str:
    number_of_copies = 1
    while os.path.isdir(
        os.path.join(storage_folder, f"sessions/{session_id}/simple_{number_of_copies}")
    ):
        number_of_copies += 1
    project_id = f"simple_{number_of_copies}"
    shutil.copytree(
        os.path.join(storage_folder, "sessions/default/simple"),
        os.path.join(storage_folder, f"sessions/{session_id}/{project_id}"),
    )
    list_save = ["info", "environment"]
    for i in list_save:
        with open(
            os.path.join(storage_folder, f"sessions/{session_id}/{project_id}/{i}.json")
        ) as file:
            json_data = json.load(file)
        if i == "info":
            json_data["name"] = f"Simple Gridworld ({number_of_copies})"
        json_data["project_id"] = project_id
        json_data["session_id"] = session_id
        with open(
            os.path.join(
                storage_folder, f"sessions/{session_id}/{project_id}/{i}.json"
            ),
            "w",
        ) as file:
            json_formatted = json.dumps(json_data, indent=4, sort_keys=True)
            file.write(json_formatted)
    return project_id


def build_simple_project() -> None:
    project_dir = os.path.join(storage_folder, f"sessions/default/simple")
    Modelling.create_environment(project_dir)
    Modelling.add_goal(project_dir, "0000.json", "default-simple-0000")
    Modelling.add_goal(project_dir, "0001.json", "default-simple-0001")
    Modelling.add_goal(project_dir, "0002.json", "default-simple-0002")
    Modelling.add_goal(project_dir, "0003.json", "default-simple-0003")


if __name__ == "__main__":
    # app.run(host='localhost', debug=True, port=3000)
    socketio.run(app, host="0.0.0.0")
