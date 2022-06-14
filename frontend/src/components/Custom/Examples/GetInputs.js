import React, {useCallback, useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketGetInputs(props) {
    const socket = useSocket()

    const setInputs = useCallback((inputs) => {
        console.log("inputs SET")
        console.log(inputs)
        props.setInputs(inputs);
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {
            props.setTrigger(false)

            socket.emit("get-inputs",{name: props.name, mode: props.mode})
            socket.on('received-inputs', setInputs)

            return () => socket.off('received-inputs-other')
        }

    }, [socket, props, setInputs])

    return (<></>);
}

export default SocketGetInputs;