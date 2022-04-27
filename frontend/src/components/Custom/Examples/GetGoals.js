import "../../../contexts/SocketProvider"
import "react"
import React
import useCallback
import useState }
import { useEffect
import { useSocket }

function SocketIoGaols(props) {
  const socket = useSocket();

  const [message, setMessage] = useState(0);

  const [id, setId] = useState(0);

  const setIdFunction = useCallback(
    (project_id) => {
      setId(project_id);
    },
    [setId]
  );

  const setMessageFunction = useCallback(
    (list_of_goals) => {
      setMessage(list_of_goals);
    },
    [setMessage]
  );

  useEffect(() => {
    if (socket == null || props.deleteIndex === null) return;

    socket.emit("delete-goal", {
      index: props.deleteIndex,
      session: props.session,
      project: props.projectId,
    });

    props.deleteTrigger();

    if (props.projectId === "simple") {
      socket.on("deleting-simple", setIdFunction);
    }
  }, [socket, props.deleteIndex, props.deleteTrigger, props.session, props.projectId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (socket == null) return;
    let session = props.projectId === "simple" ? "default" : props.session;
    socket.emit("get-goals", { session: session, project: props.projectId });

    socket.on("receive-goals", setMessageFunction);

    return () => socket.off("receive-goals");
  }, [socket, setMessageFunction, props.projectId, props.session, props.triggerGoals]);

  useEffect(() => {
    props.updateGoals(message);
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    props.switchWorld(id);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
}

export default SocketIoGaols;
