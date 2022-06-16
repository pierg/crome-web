import React, {useCallback, useEffect, useState} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function SocketSaveGoals(props) {

    const socket = useSocket()
    
    const [id, setId] = useState(0);
    
    const setIdFunction = useCallback((project_id) => {
        setId(project_id);
    }, [setId])

    const triggerGoalSaved = useCallback(() => {
        props.toggleGetTrigger()

        if (props.contracts)
            return () => socket.off('contract-goals-saved')
    }, [props, socket])


    useEffect(() => {
        if (socket == null) return
        
        if (props.goals !== null && props.triggerSave) {

            props.toggleSaveTrigger(false)
            if (!props.contracts) {
                socket.emit('add-goal', {goal: props.goals[props.index], project_id: props.projectId})

                if (props.projectId === "simple") {
                    socket.on('saving-simple', setIdFunction)
                    return () => socket.off('saving-simple')
                } else {
                    socket.on('goal-saved', triggerGoalSaved)
                    return () => socket.off('saving-complete')
                }
            } else {
                socket.emit('modify-contracts-goals', {goal: props.goals[props.index], project: props.projectId})
                socket.on('contract-goals-saved', triggerGoalSaved)
            }
        }
        
    }, [socket, props, setIdFunction]) // eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
        props.switchWorld(id)
    }, [id])  // eslint-disable-line react-hooks/exhaustive-deps

    return (<></>);
}

export default SocketSaveGoals;