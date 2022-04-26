import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function GetCGG(props) {

    const socket = useSocket()
    
    const cggCallback = useCallback((received_answer) => {
        props.setGoalsTrigger()
    }, [props])
    
    useEffect(() => {
        if (socket == null || !props.trigger) return

        socket.emit('process-goals', {session: props.session, project: props.project})

        socket.on('receive-cgg', cggCallback)

        return () => socket.off('receive-cgg')
    }, [socket, props.trigger, props.session, props.project, cggCallback])

    return (<></>);
}

export default GetCGG;
