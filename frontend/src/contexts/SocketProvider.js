import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
    useEffect(() => {
        console.log("Connecting merged")
        const newSocket = io({ query: { id } }
        )
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id])


    const [socket, setSocket] = useState()

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
