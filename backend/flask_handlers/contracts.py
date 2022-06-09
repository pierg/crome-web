from flask import request
from flask_socketio import emit

from backend.operations.analysis import Analysis
from backend.shared.paths import project_path
from crome_cgg.context import ContextException
from crome_cgg.goal.exceptions import GoalAlgebraOperationFail

try:
    from __main__ import socketio
except ImportError:
    from backend.app import socketio


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


@socketio.on("apply-quotient")
def quotient(data) -> None:
    """
        Apply the quotient operation on the two goals given
    """
    print("APPLY OPERATION : merging")
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


@socketio.on("apply-merging")
def merging(data) -> None:
    """
        Apply the merging operation on the two goals given
    """
    print("APPLY OPERATION : merging")
    project_id = data["project"]
    session_id = request.args.get("id")
    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.merging(project_folder, data["goals"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {"crometypes": "error", "content": "Problem while applying merging operation."
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


@socketio.on("apply-separation")
def separation(data) -> None:
    """
        Apply the separation operation on the two goals given
    """
    print("APPLY OPERATION : separation")
    project_id = data["project"]
    session_id = request.args.get("id")
    project_folder = str(project_path(session_id, project_id))

    try:
        Analysis.separation(project_folder, data["dividend"], data["divisor"])
    except GoalAlgebraOperationFail as e:
        emit(
            "send-notification",
            {"crometypes": "error", "content": "Problem while applying separation operation."
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
