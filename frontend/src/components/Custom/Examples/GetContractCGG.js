import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function GetContractCGG(props) {

    const socket = useSocket()
    
    const cggCallback = useCallback((message_received) => {
        props.setGoalsTrigger(message_received)
        return () => socket.off('received-process-goals-contracts')
    }, [socket, props])
    
    useEffect(() => {
        if (socket == null) return

        if(props.trigger) {
            props.setTrigger(false)

            socket.emit('process-goals-contracts', props.project)

            socket.on('received-process-goals-contracts', cggCallback)
        }
    }, [socket, props, cggCallback])

    return (<></>);
}

export default GetContractCGG;
