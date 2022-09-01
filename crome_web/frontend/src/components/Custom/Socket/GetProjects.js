import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../../../contexts/SocketProvider";

function SocketIoProjects(props) {
  const socket = useSocket();

  const [message, setMessage] = useState(0);

  const [trigger, setTrigger] = useState(false);

  const setMessageFunction = useCallback(
    (list_of_projects) => {
      setMessage(list_of_projects);
    },
    [setMessage]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.emit("get-projects");
    socket.on("receive-projects", setMessageFunction);

    return () => socket.off("receive-projects");
  }, [socket, setMessageFunction, props.projectAdded, trigger]);

  useEffect(() => {
    props.worlds(message);
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.uploadConfirmation) {
      socket.emit("get-projects");
      props.uploadChange(false);
      setTrigger(!trigger);
      socket.on("receive-projects", setMessageFunction);
      return () => socket.off("receive-projects");
    }
  }, [
    socket,
    props,
    setMessageFunction,
    props.projectAdded,
    trigger,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.deletionConfirmation) {
      console.log(props.listOfWorlds);
      console.log(props.listOfWorlds[props.deletionIndex].project_id);
      socket.emit("delete-project", props.listOfWorlds[props.deletionIndex].project_id);
      props.deletionChanger(false);

      socket.on("deletion-complete", setTrigger(!trigger));
      return () => socket.off("deletion-complete");
    }
  }, [props.deletionConfirmation, props.deletionIndex, props.deletionChanger, socket]); // eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
}

export default SocketIoProjects;
