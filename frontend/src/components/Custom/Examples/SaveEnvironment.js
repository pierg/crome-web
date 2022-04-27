import "../../../contexts/SocketProvider"
import "react"
import React
import useEffect }
import { useCallback
import { useSocket }

function SocketSaveEnvironment(props) {
  const socket = useSocket();

  function generateProjectId(name) {
    let rand = Math.floor(Math.random() * 900000) + 100000;
    return name.replaceAll(" ", "").toLowerCase() + "_" + rand;
  }

  const sendBackProjectId = useCallback(
    (project_id) => {
      props.returnProjectId(project_id);
    },
    [props]
  );

  useEffect(() => {
    if (socket == null) return;

    if (props.world !== null && props.trigger) {
      props.world.environment.session_id = props.session;
      props.world.info.session_id = props.session;

      if (props.world.environment.project_id === null) {
        const projectId = generateProjectId(props.world.info.name);
        props.world.environment.project_id = projectId;
        props.world.info.project_id = projectId;
      } else {
        props.world.info.project_id = props.world.environment.project_id;
      }

      socket.emit("save-project", { world: props.world, session: props.session });

      props.setTrigger(false);

      socket.on("project-saved", sendBackProjectId);
      return () => socket.off("saving-complete");
    }
  }, [socket, props.world, props, sendBackProjectId]);

  return <></>;
}

export default SocketSaveEnvironment;
