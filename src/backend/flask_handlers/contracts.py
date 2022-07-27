import os
import shutil
import time
from time import strftime

from crome_cgg.context import ContextException
from crome_cgg.goal.exceptions import GoalAlgebraOperationFail
from flask import request
from flask_socketio import emit

from src.backend.app import send_message_to_user
from src.backend.operations.analysis import Analysis
from src.backend.shared.paths import project_path
from src.backend.tools.persistence import load_cgg
from src.backend.utility.goal import GoalUtility
from src.backend.utility.project import ProjectUtility

try:
    from __main__ import socketio
except ImportError:
    from src.backend.app import socketio


@socketio.on("apply-conjunction")
def conjunction(data) -> None:
    """
    Apply the conjunction operation on the given goals.
    """
    print("APPLY OPERATION : conjunction")
    session_id = str(request.args.get("id"))
    project_id = data["project"]

    create_session_contracts(session_id, project_id)
    set_of_goals_id = set()
    for goals in data["goals"]:
        set_of_goals_id.add(goals["id"])
    try:
        Analysis.conjunction(str(project_path(session_id, project_id)), set_of_goals_id)
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "Problem while applying conjunction operation." " See the console for more information",
            },
            room=request.sid,
        )
        emit("send-message", e.__str__(), room=request.sid)
        emit("operation-complete", False, room=request.sid)

    send_message_to_user(content="Conjunction is done.", room_id=request.sid, crometype="success")
    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-composition")
def composition(data) -> None:
    """
    Apply the composition operation on the given goals.
    """
    print("APPLY OPERATION : composition")
    session_id = str(request.args.get("id"))

    project_id = data["project"]

    create_session_contracts(session_id, project_id)

    set_of_goals_id = set()
    for goals in data["goals"]:
        set_of_goals_id.add(goals["id"])
    try:
        Analysis.composition(str(project_path(session_id, project_id)), set_of_goals_id)
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "Problem while applying composition operation." " See the console for more information",
            },
            room=request.sid,
        )
        emit("send-message", e.__str__(), room=request.sid)
        emit("operation-complete", False, room=request.sid)

    send_message_to_user(content="Composition is done.", room_id=request.sid, crometype="success")
    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-refinement")
def refinement(data) -> None:
    """
    Apply the refinement operation on the given goals.
    """
    print("APPLY OPERATION : refinement")

    session_id = request.args.get("id")
    project_id = data["project"]

    create_session_contracts(session_id, project_id)

    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.refinement(project_folder, data["abstract"]["id"], data["refine"]["id"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "Problem while applying refinement operation." " See the console for more information",
            },
            room=request.sid,
        )
        emit("send-message", e.__str__(), room=request.sid)
        emit("operation-complete", False, room=request.sid)
        return

    send_message_to_user(content="Refinement is done.", room_id=request.sid, crometype="success")
    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-quotient")
def quotient(data) -> None:
    """
    Apply the quotient operation on the two goals given
    """
    print("APPLY OPERATION : merging")
    project_id = data["project"]
    session_id = request.args.get("id")

    create_session_contracts(session_id, project_id)

    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.quotient(project_folder, data["dividend"]["id"], data["divisor"]["id"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "Problem while applying quotient operation." " See the console for more information",
            },
            room=request.sid,
        )
        emit("send-message", e.__str__(), room=request.sid)
        emit("operation-complete", False, room=request.sid)
        return

    send_message_to_user(content="Quotient is done.", room_id=request.sid, crometype="success")
    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-merging")
def merging(data) -> None:
    """
    Apply the merging operation on the two goals given
    """
    print("APPLY OPERATION : merging")
    project_id = data["project"]
    session_id = request.args.get("id")

    create_session_contracts(session_id, project_id)

    project_folder = str(project_path(session_id, project_id))

    set_of_goals_id = set()
    for goals in data["goals"]:
        set_of_goals_id.add(goals["id"])
    try:
        Analysis.merging(project_folder, set_of_goals_id)
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "Problem while applying merging operation." " See the console for more information",
            },
            room=request.sid,
        )
        emit("send-message", e.__str__(), room=request.sid)
        emit("operation-complete", False, room=request.sid)
        return

    send_message_to_user(content="Merging is done.", room_id=request.sid, crometype="success")
    emit("operation-complete", True, room=request.sid)


@socketio.on("apply-separation")
def separation(data) -> None:
    """
    Apply the separation operation on the two goals given
    """
    print("APPLY OPERATION : separation")
    project_id = data["project"]
    session_id = request.args.get("id")

    create_session_contracts(session_id, project_id)

    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.separation(project_folder, data["dividend"]["id"], data["divisor"]["id"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {
                "crometypes": "error",
                "content": "Problem while applying separation operation." " See the console for more information",
            },
            room=request.sid,
        )
        emit("send-message", e.__str__(), room=request.sid)
        emit("operation-complete", False, room=request.sid)
        return

    send_message_to_user(content="Separation is done.", room_id=request.sid, crometype="success")
    emit("operation-complete", True, room=request.sid)


# We redo the function for getting a goals and modify it for this page :
@socketio.on("get-contracts-goals")
def get_contracts_goals(project_id):
    session_id = request.args.get("id")

    if not os.path.isdir(project_path(session_id, project_id)):
        session_id = "contracts"

    list_of_goals = GoalUtility.get_goals(project_id, session_id)
    emit("receive-contracts-goals", list_of_goals, room=request.sid)


@socketio.on("modify-contracts-goals")
def modify_contracts_goals(data):
    project_id = data["project"]
    session_id = request.args.get("id")

    project_folder = project_path(session_id, project_id)
    if not os.path.isdir(project_folder):
        shutil.copytree(project_path("contracts", project_id), project_folder)

    now = time.localtime(time.time())
    name: str = data["goal"]["name"]

    error_occurrence = True

    try:
        GoalUtility.add_goal(data, session_id, project_id)
        emit("contract-goals-saved", True, room=request.sid)
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
        emit("contract-goals-saved", False, room=request.sid)


@socketio.on("process-goals-contracts")
def process_goals_contracts(project_id):
    session_id = request.args.get("id")
    project_folder = project_path(session_id, project_id)
    if not os.path.isdir(project_folder):
        project_folder = project_path("contracts", project_id)

    cgg = load_cgg(str(project_folder))
    json_content = cgg.export_to_json()
    emit("received-process-goals-contracts", json_content, room=request.sid)


@socketio.on("get-contracts-project")
def get_contracts_project():

    list_of_projects = ProjectUtility.get_projects("contracts")

    emit("receive-contracts-projects", list_of_projects, room=request.sid)


def create_session_contracts(session_id, project_id):
    project_folder = project_path(session_id, project_id)
    # Check is the project_id correspond to some project of contracts
    if project_id not in ["composition", "conjunction", "merging", "quotient", "refinement", "separation"]:
        return
    if os.path.isdir(project_folder):
        return
    else:
        shutil.copytree(project_path("contracts", project_id), project_folder)
