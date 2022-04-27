import "../../../contexts/SocketProvider"
import "../../Elements/Button"
import "react"
import Button
import React
import useCallback
import useState }
import { useEffect
import { useSocket }

function SocketIoMessage(props) {
  const socket = useSocket();

  const [message, setMessage] = useState(0);

  const setMessageFunction = useCallback(
    (msg) => {
      setMessage(msg.data);
    },
    [setMessage]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.on("receive-message", setMessageFunction);

    return () => socket.off("receive-message");
  }, [socket, setMessageFunction]);

  function sendMessage() {
    socket.emit("get-message");
  }

  return (
    <>
      <Button onClick={sendMessage}>Send Request</Button>
      <h1>Response:</h1>
      <p>{message}</p>
    </>
  );
}

export default SocketIoMessage;
