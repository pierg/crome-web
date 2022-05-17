import React, {useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketCheckGoals(props) {

    const socket = useSocket()


    useEffect(() => {
        if (socket == null) return

        if (props.triggerGoalsChecked) {
            socket.emit('check-goals', {project : props.projectId})

            props.swapTriggerGoalsChecked(false)
        }

    }, [socket, props]) // eslint-disable-line react-hooks/exhaustive-deps

    return (<></>);
}

export default SocketCheckGoals;