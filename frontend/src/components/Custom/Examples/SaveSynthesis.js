import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";
import 'react-toastify/dist/ReactToastify.css';

function SocketSaveSynthesis(props) {

    const socket = useSocket()

    const savedFinish = useCallback((message_received) => {
        props.setTrigger(false);
        props.displayMessages(message_received);
        if(message_received["crometypes"] === "success") {
            props.savedDone();
        }
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {
            socket.emit('save-synthesis', {
                    name: props.name,
                    assumptions: props.assumptions,
                    guarantees: props.guarantees,
                    inputs: props.inputs,
                    outputs: props.outputs,
            })

            socket.on('synthesis-saved', savedFinish)

            return () => socket.off('synthesis-saved')
        }

    }, [socket, props, savedFinish])

    return (<></>);
}

export default SocketSaveSynthesis;
