import React, {useEffect} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketSaveSynthesis(props) {

    const socket = useSocket()

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

            props.setTrigger(false)

            //socket.on('synthesis-saved', sendReturnTrigger)
            return () => socket.off('saving-complete')
        }

    }, [socket, props])

    return (<></>);
}

export default SocketSaveSynthesis;
