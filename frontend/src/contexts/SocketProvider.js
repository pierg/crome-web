import io

import "react"
import "socket.io-client"
import React
import useEffect
import useState }
import { useContext

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
  useEffect(() => {
    console.log("Connecting merged");
    const newSocket = io({ query: { id } });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  const [socket, setSocket] = useState();

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
