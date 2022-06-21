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
from backend.operations.component import Component
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


@socketio.on("get-components")
def get_components() -> None:
    """
        get the synthesis created by the user and the examples.
    """
    session_id = str(request.args.get("id"))
    list_examples = Component.get_components(session_id)

    emit("receive-components", list_examples, room=request.sid)


@socketio.on("save-component")
def save_component(data) -> None:
    """
        get the synthesis created by the user and the examples.
    """
    session_id = str(request.args.get("id"))
    now = time.localtime(time.time())
    name: str = data["component"]["name"]

    emit("component-saved", True, room=request.sid)

    try:
        Component.save_component(data, session_id)
        send_message_to_user(content='The component "' + name + '" has been saved.',
                             room_id=request.sid, crometype="success")
    except KeyError as keyError:
        emit(
            "send-message",
            strftime("%H:%M:%S", now) + ' The goal "' + name + '" has not been saved. Error with the entry of the '
                                                               f'LTL/Pattern \n KeyError : {keyError}',
            room=request.sid,
        )
