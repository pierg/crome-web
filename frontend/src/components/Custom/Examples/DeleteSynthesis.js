import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";
import 'react-toastify/dist/ReactToastify.css';

function SocketDeleteSynthesis(props) {

    const socket = useSocket()

    const deletedFinish = useCallback((bool) => {
        props.setTrigger(false);
        if(bool) {
            props.deletedDone();
        }
    }, [props]) // eslint-disable-next-line

    useEffect(() => {
        if (socket == null) return

        if (props.trigger) {
            socket.emit('delete-synthesis', props.name)

            socket.on('synthesis-deleted', deletedFinish)
        }

    }, [socket, props, deletedFinish])

    return (<></>);
}

export default SocketDeleteSynthesis;
