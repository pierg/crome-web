import "../../../contexts/SocketProvider"
import "react"
import React
import useEffect
import useState }
import { useCallback
import { useSocket }

function SocketSaveGoals(props) {
  const socket = useSocket();

  const [id, setId] = useState(0);

  const setIdFunction = useCallback(
    (project_id) => {
      setId(project_id);
    },
    [setId]
  );

  useEffect(() => {
    if (socket == null) return;

    if (props.goals !== null && props.triggerSave) {
      props.toggleSaveTrigger(false);
      socket.emit("add-goal", {
        goal: props.goals[props.index],
        session: props.session,
        projectId: props.projectId,
      });

      if (props.projectId === "simple") {
        socket.on("saving-simple", setIdFunction);
      } else {
        socket.on("saving-complete", props.toggleGetTrigger());
        return () => socket.off("saving-complete");
      }
    }
  }, [socket, props, setIdFunction]);

  useEffect(() => {
    props.switchWorld(id);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
}

export default SocketSaveGoals;
