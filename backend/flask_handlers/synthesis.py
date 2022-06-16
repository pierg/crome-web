from flask import request
from flask_socketio import emit
from backend.app import send_message_to_user
from backend.operations.synthesis import Synthesis
import time
from time import strftime

try:
    from __main__ import socketio
except ImportError:
    from backend.app import socketio


@socketio.on("test-notification")
def test_notification():
    now = time.localtime(time.time())
    emit(
        "send-notification",
        {"crometypes": "success", "content": f"{strftime('%H:%M:%S', now)} test notification"},
        room=request.sid
    )
    emit(
        "send-message",
        f"{strftime('%H:%M:%S', now)} test notification",
        room=request.sid
    )

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
    for key in data:
        if not data[key]:
            emit("synthesis-saved", False, room=request.sid)
            return
    Synthesis.create_txt_file(data, session_id)

    send_message_to_user("The mealy has been saved", request.sid, "success")
    emit("synthesis-saved", True, room=request.sid)


@socketio.on("delete-synthesis")
def delete_synthesis(name) -> None:
    """
        Delete a synthesis using only his name to find it.
    """
    session_id = str(request.args.get("id"))

    Synthesis.delete_synthesis(name, session_id)

    send_message_to_user(f"The synthesis '{name}' has been deleted.", request.sid, "success")
    emit("synthesis-deleted", True, room=request.sid)


@socketio.on("controller-strix")
def create_controller_strix(name) -> None:
    """
        Create the controller and the mealy according to the strix method
    """
    json_content = Synthesis.create_controller(name, request.args.get("id"), "strix")

    send_message_to_user("The mealy has been created using strix method", request.sid, "success")
    emit("controller-created-strix", json_content, room=request.sid)


@socketio.on("controller-crome")
def create_controller_crome(name) -> None:
    """
        Create the controller and the mealy according to the parallel method
    """
    json_content = Synthesis.create_controller(name, request.args.get("id"), "crome")

    send_message_to_user("The mealy has been created using parallel method", request.sid, "success")
    emit("controller-created-crome", json_content, room=request.sid)


@socketio.on("get-inputs")
def get_inputs(data) -> None:
    """
        Get all the imputs possible for the current state of a controller.
        It differentiates the two ways of simulating the synthesis.
    """
    session_id = request.args.get("id")
    inputs = Synthesis.get_input_possible(data["name"], session_id, data["mode"])

    emit("received-inputs", inputs, room=request.sid)


@socketio.on("simulate-controller")
def simulate_controller(data) -> None:
    """
        Simulate the mealy according to the method strix
    """
    content = Synthesis.simulate_controller(data["name"], request.args.get("id"), data["mode"], data["input"])
    send_message_to_user("The mealy has been simulated", "success", request.sid)
    emit("mealy-simulated", content, room=request.sid)


@socketio.on("reset-controller")
def reset_controller(data) -> None:
    """
        It reset a controller to his initial state.
        It differentiates the two ways of simulating the synthesis.
    """
    session_id = request.args.get("id")
    Synthesis.reset_controller(data["name"], session_id, data["mode"])
    emit("reset-done", True, room=request.sid)


@socketio.on("random-simulation-controller")
def random_simulation_controller(data) -> None:
    """
        It simulates a controller by randomly choosing the inputs for each state.
        It differentiates the two ways of simulating the synthesis.
    """
    session_id = request.args.get("id")
    content = Synthesis.random_simulation(data["name"], data["iterations"], data["mode"], session_id)
    emit("receive-random-simulation-controller", content, room=request.sid)
