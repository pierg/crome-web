import React, { useCallback, useEffect } from "react";
import { useSocket } from "../../../contexts/SocketProvider";

function SocketResetClicked(props) {
  const socket = useSocket();

  const setLines = useCallback(
    (lines) => {
      socket.off("reset-done");
      props.emptyLines();
      props.setTriggerGetInput(true);
    },
    [props, socket]
  ); // eslint-disable-next-line

  useEffect(() => {
    if (socket == null) return;

    if (props.trigger) {
      props.setTrigger(false);

      if (props.mode === "crome") {
        socket.emit("reset-crome", props.name);
      }

      socket.on("reset-done", setLines);
    }
  }, [socket, props, setLines]);

  return <></>;
}

export default SocketResetClicked;
