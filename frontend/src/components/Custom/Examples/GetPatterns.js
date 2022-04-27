import "../../../contexts/SocketProvider"
import "react"
import React
import useCallback
import useState }
import { useEffect
import { useSocket }

function SocketIoPatterns(props) {
  const socket = useSocket();

  const [message, setMessage] = useState(0);

  const setMessageFunction = useCallback(
    (msg) => {
      //console.log(msg)
      setMessage(msg.robotic);
    },
    [setMessage]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.emit("get-patterns");
    socket.on("receive-patterns", setMessageFunction);

    return () => socket.off("receive-patterns");
  }, [socket, setMessageFunction]);

  useEffect(() => {
    if (props.patterns !== undefined) props.patterns(message);
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
}

export default SocketIoPatterns;
