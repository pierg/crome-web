import React from 'react';
import Checkbox from "../Elements/Checkbox";
import Radio from "../Elements/Radio";
import Button from "../Elements/Button";

function BuildCGG(props) {

    const [infoMessage, setInfoMessage] = React.useState("")

    function changeOperator(operator) {
        if (operator === "Refinement" || props.selectedOperator === "Refinement") {
            operator === "Refinement" ? setInfoMessage(props.infos.refinementMessages[0]) : setInfoMessage("")
            props.updateSelectedGoals([])
        }
        if (operator === "Extension" || props.selectedOperator === "Extension") {
            props.updateSelectedGoals([])
            props.setLibrary(null)
        }
        props.setOperator(operator)
    }

    /*function changeLibrary(name) {
        props.setLibrary(name)
    }*/

    function changeGoals(goal) {

        let tmpSelectedGoals = JSON.parse(JSON.stringify(props.selectedGoals))

        if (props.selectedGoals.includes(goal)) { // Removing a goal
            if (props.selectedOperator === "Refinement") {
                setInfoMessage(props.infos.refinementMessages[tmpSelectedGoals.length - 1])
            }
            if (props.selectedOperator === "Extension") {
                setInfoMessage("")
            }
            tmpSelectedGoals.splice(tmpSelectedGoals.indexOf(goal), 1)
            props.updateSelectedGoals(tmpSelectedGoals)
        }
        else { // Adding a goal
            if (props.selectedOperator === "Refinement") {
                switch (tmpSelectedGoals.length) {
                    case 0: setInfoMessage(props.infos.refinementMessages[1]); break;
                    case 1: setInfoMessage(getGoalName(props.selectedGoals[0])+" --> "+getGoalName(goal)); break;
                    case 2: setInfoMessage(props.infos.refinementMessages[2]); return;
                    default: break
                }
            }
            if (props.selectedOperator === "Extension" && tmpSelectedGoals.length === 1) {
                setInfoMessage(props.infos.libraryWarning)
                return
            }
            tmpSelectedGoals.push(goal)
            props.updateSelectedGoals(tmpSelectedGoals)
        }
    }

    function getGoalName(node) {
        if (node.hasOwnProperty("name")) {
            return node.name
        }
        else {
            return typeof node === "object" && node.hasOwnProperty("id") ? props.findGoalById(node.id)["name"] : props.findGoalById(node)["name"]
        }
    }

    return(
        <>
            <div className="w-full flex justify-center my-4">
                {props.infos.operators.map((prop, key) => (
                    <Radio key={key} label={prop} onChange={() => changeOperator(prop)} checked={props.selectedOperator === prop} name="operator"/>
                ))}
            </div>
            <div className="flex w-full justify-center">
                {infoMessage}
            </div>
            <div className="flex">
                <div className="w-1/2 flex">
                    <div className="flex flex-col">
                        {props.goals !== null && props.goals.map((prop, key) => (
                            <Checkbox key={key} onChange={() => changeGoals(prop.id)} checked={props.selectedGoals.includes(prop.id) ? "checked" : ""} label={prop.name}/>
                        ))}
                    </div>
                    {/*props.selectedOperator === "Extension" && (<div className="flex flex-col">
                        {props.cgg !== null && props.cgg.libraries.map((prop, key) => ( // TODO change origin of libraries (by putting them not in cgg.json)
                            <Radio key={key} onChange={() => changeLibrary(prop.name)} checked={props.selectedLibrary === prop.name} label={prop.name}/>
                        ))}
                    </div>)*/}
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <Button onClick={props.applyOperator}>{props.infos.buttonText}</Button>
                </div>
            </div>
        </>
    );
}

export default BuildCGG;

