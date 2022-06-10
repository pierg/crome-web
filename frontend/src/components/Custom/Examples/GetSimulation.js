import React, {useCallback, useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketGetSimulation(props) {
    const socket = useSocket()

    const setSimulation = useCallback((simulation) => {
        props.setSimulation(simulation);
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger && props.name !== "") {
            if (props.strix) {
                socket.emit("simulate-strix", props.name)
                socket.on('mealy-simulated-strix', setSimulation)
            } else {
                socket.emit("simulate-crome", props.name)
                socket.on('mealy-simulated-crome', setSimulation)
            }

            props.setTrigger(false)

            return () => socket.off('graph-generated')
        }

    }, [socket, props, setSimulation])

    return (<></>);
}

export default SocketGetSimulation;