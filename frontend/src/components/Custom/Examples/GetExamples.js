import React, {useCallback, useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketGetExamples(props) {
    const socket = useSocket()

    const setTree = useCallback((tree) => {
        props.setTree(tree);
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {
            socket.emit("get-synthesis")
            socket.on('receive-synthesis', setTree)

            props.setTrigger(false)

            return () => socket.off('graph-generated')
        }

    }, [socket, props, setTree])

    return (<></>);
}

export default SocketGetExamples;