import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function GetCGG(props) {

    const socket = useSocket()

    const cggTriggerBack = useCallback(() => {
        props.setTrigger(false)
    }, [props])
    
    const cggCallback = useCallback(() => {
        console.log("CALL BACK CGG")
        props.setGoalsTrigger()
    }, [props])
    
    useEffect(() => {
        if (socket == null || !props.trigger) return

        socket.emit('process-goals', {session: props.session, project: props.project})

        socket.on('cgg-production', cggTriggerBack)

        socket.on('cgg-saved', cggCallback)

        return () => socket.off('receive-cgg')
    }, [socket, props.trigger, props.session, props.project, cggCallback])

    return (<></>);
}

export default GetCGG;
