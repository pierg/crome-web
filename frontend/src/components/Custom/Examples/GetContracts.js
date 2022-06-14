import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketIoContracts(props) {

    const socket = useSocket()

    const setMessageFunction = useCallback((list_of_projects) => {
        props.worlds(list_of_projects)
    }, [props])

    /**
     * TODO : correct get-contracts-project to get-contracts-projectS or receive-contracts-projectS to receive-contracts-project
     */
    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {
            props.setTrigger(false)
            socket.emit("get-contracts-project")
            socket.on('receive-contracts-projects', setMessageFunction)

            return () => socket.off('receive-contracts-project')
        }
    }, [socket, setMessageFunction, props])

    return (<></>);
}

export default SocketIoContracts;
