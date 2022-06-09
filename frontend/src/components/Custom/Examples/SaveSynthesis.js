import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketSaveSynthesis(props) {

    const socket = useSocket()

    const savedDone = useCallback((tree) => {
        props.savedDone();
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {

            console.log("emit socket save-synthesis")
            console.log(props)
            socket.emit('save-synthesis', {
                    name: props.name,
                    assumptions: props.assumptions,
                    guarantees: props.guarantees,
                    inputs: props.inputs,
                    outputs: props.outputs,
            })

            socket.on('synthesis-saved', savedDone)

            //socket.on('synthesis-saved', sendReturnTrigger)
            return () => socket.off('saving-complete')
        }

    }, [socket, props, savedDone])

    return (<></>);
}

export default SocketSaveSynthesis;
