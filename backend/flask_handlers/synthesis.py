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
