import React, { useEffect } from "react";
import { useSocket } from "../../../contexts/SocketProvider";

function SocketBuildCGG(props) {
  const socket = useSocket();

  useEffect(() => {
    if (socket == null || !props.trigger) return;

    // TODO Send goals to the back-end when applying an operation
    //  selectedGoals should be containing the right goals
    let realGoals = [];
    let selectedGoals = JSON.parse(JSON.stringify(props.selectedGoals));
    for (let i = 0; i < props.goals.length; i++) {
      if (selectedGoals.includes(i)) {
        selectedGoals.slice(selectedGoals.indexOf(i), 1);
        realGoals.push(props.goals[i].id);
      }
    }
    for (let i = 0; i < selectedGoals.length; i++) {}

    switch (props.operator.toLowerCase()) {
      case "conjunction":
        socket.emit("apply-conjunction", { goals: props.selectedGoals });
        break;
      case "composition":
        socket.emit("apply-composition", { goals: props.selectedGoals });
        break;
      case "disjunction":
        socket.emit("apply-disjunction", { goals: props.selectedGoals });
        break;
      case "refinement":
        socket.emit("apply-refinement", {
          abstract: props.selectedGoals[0],
          refined: props.selectedGoals[1],
        });
        break;
      case "extension":
        socket.emit("apply-extension", {
          input: props.selectedGoals[0],
          library: props.library,
        });
        break;
      default:
        return;
    }

    socket.on("operation-complete", props.setTrigger(false));
    return () => socket.off("operation-complete");
  }, [socket, props]);

  return <></>;
}

export default SocketBuildCGG;
