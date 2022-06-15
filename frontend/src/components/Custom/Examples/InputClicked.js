import React, {useCallback, useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketInputClicked(props) {
    const socket = useSocket()

    const setLine = useCallback((line) => {
        socket.off('mealy-simulated')
        props.setLine(line);
    }, [props,socket]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {
            props.setTrigger(false)
            console.log(props)
            socket.emit("simulate-controller",{name: props.name, mode: props.mode, input: props.input})
            socket.on('mealy-simulated', setLine)
        }

    }, [socket, props, setLine])

    return (<></>);
}

export default SocketInputClicked;