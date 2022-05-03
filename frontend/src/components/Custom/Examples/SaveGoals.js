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
    }, [props])

    useEffect(() => {
        if (socket == null) return
        
        if (props.goals !== null && props.triggerSave) {

            props.toggleSaveTrigger(false)
            socket.emit('add-goal', {goal : props.goals[props.index], session : props.session, projectId : props.projectId})

            //socket.on('goal-saved', props.toggleGetTrigger())

            if (props.projectId === "simple") {
                socket.on('saving-simple', setIdFunction)
                return () => socket.off('saving-simple')
            }
            else {
                socket.on('goal-saved', triggerGoalSaved)
                return () => socket.off('saving-complete')
            }
        }
        
    }, [socket, props, setIdFunction])
    
    useEffect(() => {
        props.switchWorld(id)
    }, [id])  // eslint-disable-line react-hooks/exhaustive-deps

    return (<></>);
}

export default SocketSaveGoals;