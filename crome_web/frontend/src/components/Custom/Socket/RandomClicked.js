import React, { useCallback, useEffect } from "react";
import { useSocket } from "../../../contexts/SocketProvider";

function SocketRandomClicked(props) {
  const socket = useSocket();

  const setLines = useCallback(
    (lines) => {
      if (props.mode === "crome") {
        socket.off("receive-random-simulation-crome");
      } else if (props.mode === "strix") {
        socket.off("receive-random-simulation-controller");
      }
      for (let i = 0; i < lines.length; i++) {
        props.setLine(lines[i]);
      }
      props.setTriggerGetInput(true);
    },
    [props, socket]
  ); // eslint-disable-next-line

  useEffect(() => {
    if (socket == null) return;

    if (props.trigger) {
      props.setTrigger(false);

      if (props.mode === "crome") {
        socket.emit("random-simulation-crome", {
          project_id: props.name,
          mode: props.mode,
          iterations: props.number,
        });
        socket.on("receive-random-simulation-crome", setLines);
      } else if (props.mode === "strix") {
        socket.emit("random-simulation-controller", {
          name: props.name,
          mode: props.mode,
          iterations: props.number,
        });
        socket.on("receive-random-simulation-controller", setLines);
      }
    }
  }, [socket, props, setLines]);

  return <></>;
}

export default SocketRandomClicked;
