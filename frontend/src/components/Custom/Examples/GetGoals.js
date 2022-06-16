import React, {useEffect, useCallback, useState} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketIoGoals(props) {

    const socket = useSocket()

    const [message, setMessage] = useState(0);

    const [id, setId] = useState(0);

    const setIdFunction = useCallback((project_id) => {
        setId(project_id);
    }, [setId])

    const setMessageFunction = useCallback((list_of_goals) => {
        setMessage(list_of_goals);
    }, [setMessage])
    
    
    useEffect(() => {

        if (socket == null || props.deleteIndex === null) return

        socket.emit('delete-goal', {index: props.deleteIndex, project: props.projectId})

        props.deleteTrigger()

        if (props.projectId === "simple") {
            socket.on('deleting-simple', setIdFunction)
        }

    }, [socket, props.deleteIndex, props.deleteTrigger, props.projectId])  // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if (socket == null) return

        if(props.contracts) {
            socket.emit('get-contracts-goals', props.projectId)
            socket.on('receive-contracts-goals', setMessageFunction)
            return () => socket.off('receive-contracts-goals')
        }
        else{
            socket.emit('get-goals', {project: props.projectId})

            socket.on('receive-goals', setMessageFunction)

            return () => socket.off('receive-goals')
        }
    }, [socket, setMessageFunction, props.projectId, props.triggerGoals, props.contracts])

    useEffect(() => {
        props.updateGoals(message)
    }, [message])  // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        props.switchWorld(id)
    }, [id])  // eslint-disable-line react-hooks/exhaustive-deps

    return (<></>);
}

export default SocketIoGoals;
