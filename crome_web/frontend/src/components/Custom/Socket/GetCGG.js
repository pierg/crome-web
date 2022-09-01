import React, { useEffect, useCallback } from "react";
import { useSocket } from "../../../contexts/SocketProvider";

function GetCGG(props) {
  const socket = useSocket();

  const cggTriggerBack = useCallback(() => {
    props.setTrigger(false);
  }, [props]);

  const cggCallback = useCallback(
    (message_received) => {
      props.setGoalsTrigger(message_received);
    },
    [props]
  );

  useEffect(() => {
    if (socket == null || !props.trigger) return;

    socket.emit("process-goals", props.project);

    socket.on("cgg-production", cggTriggerBack);

    socket.on("cgg-saved", cggCallback);

    return () => socket.off("receive-cgg");
  }, [socket, props.trigger, props.project, cggTriggerBack, cggCallback]);

  return <></>;
}

export default GetCGG;
