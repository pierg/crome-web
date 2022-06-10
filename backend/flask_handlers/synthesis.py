from flask import request
from flask_socketio import emit
from backend.app import send_message_to_user
from backend.operations.synthesis import Synthesis

try:
    from __main__ import socketio
except ImportError:
    from backend.app import socketio


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
        emit("synthesis-saved", {"crometypes": "error", "content": e.__str__()}, room=request.sid)
    emit("synthesis-saved", {"crometypes": "success", "content": "The mealy has been saved"}, room=request.sid)


@socketio.on("delete-synthesis")
def delete_synthesis(name) -> None:
    """
        Delete a synthesis using only his name to find it.
    """
    session_id = str(request.args.get("id"))

    Synthesis.delete_synthesis(name, session_id)
    send_message_to_user(f"The synthesis '{name}' has been deleted.", "success", request.sid)
    emit("synthesis-deleted", True, request.sid)


@socketio.on("controller-strix")
def create_controller_strix(name) -> None:
    """
        Create the controller and the mealy according to the strix method
    """
    json_content = Synthesis.create_controller(name, request.args.get("id"), "strix")

    emit("controller-created-strix",
         {
             "graph": json_content,
             "crometypes": "success",
             "content": "The mealy has been created using strix method"
         }, room=request.sid)


@socketio.on("controller-crome")
def create_controller_crome(name) -> None:
    """
        Create the controller and the mealy according to the parallel method
    """
    json_content = Synthesis.create_controller(name, request.args.get("id"), "crome")

    emit("controller-created-crome",
         {
             "graph": json_content,
             "crometypes": "success",
             "content": "The mealy has been created using parallel method"
         }, room=request.sid)


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
