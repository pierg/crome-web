import React, {useEffect, useCallback} from 'react'
import {useSocket} from "../../../contexts/SocketProvider";

function GetContractCGG(props) {

    const socket = useSocket()
    
    const cggCallback = useCallback((message_received) => {
        props.setGoalsTrigger(message_received)
        return () => socket.off('received-process-goals-contracts')
    }, [socket, props])

    const operationFinish = useCallback((complete) => {
        if (complete) {
            socket.emit('process-goals-contracts', props.project)
            socket.on('received-process-goals-contracts', cggCallback)
        }
    }, [socket, props, cggCallback])

    useEffect(() => {
        if (socket == null) return
        if(props.trigger) {
            props.setTrigger(false)
            console.log(props)

            switch (props.project) {
                case "composition" : socket.emit('apply-composition', {project: props.project, goals : props.goals})
                    break;
                case "refinement" : socket.emit('apply-refinement', {project: props.project, abstract : props.goals[0], refine : props.goals[1]})
                    break;
                case "quotient" : socket.emit('apply-quotient', {project: props.project, dividend : props.goals[0], divisor : props.goals[1]})
                    break;
                case "merging" : socket.emit('apply-merging', {project: props.project, goals : props.goals})
                    break;
                case "separation" : socket.emit('apply-separation', {project: props.project,dividend : props.goals[0], divisor : props.goals[1]})
                    break;
                default : socket.emit('apply-conjunction', {project: props.project, goals : props.goals});
            }

            socket.on('operation-complete',operationFinish)
        }
    }, [socket, props, operationFinish])

    return (<></>);
}

export default GetContractCGG;
