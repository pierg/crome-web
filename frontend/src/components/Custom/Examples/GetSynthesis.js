import React, {useCallback, useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketGetSynthesis(props) {
    const socket = useSocket()

    const setGraph = useCallback((graph) => {
        props.setGraph(graph);
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger && props.name !== "") {
            if (props.strix) {
                socket.emit("controller-strix", props.name)
                socket.on('controller-created-strix', setGraph)
            } else {
                socket.emit("controller-crome", props.name)
                socket.on('controller-created-crome', setGraph)
            }

            props.setTrigger(false)

            return () => socket.off('graph-generated')
        }

    }, [socket, props, setGraph])

    return (<></>);
}

export default SocketGetSynthesis;