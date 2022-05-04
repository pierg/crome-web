import React from 'react';
import {Button, ModalFooter} from "reactstrap";
import Input from "../Elements/Input";
import Checkbox from "../Elements/Checkbox";
import ContractContentEditor from "../Custom/ContractContentEditor";
import contracteditorinfo from "_texts/custom/contracteditorinfo.js";
import makeListOf from "hooks/stringToListConversion.js";

function GoalEdit(props) {

    const [goal] = React.useState(JSON.parse(JSON.stringify(props.goal)));

    function changeParameter(e, contractType = false, index = 0, propValue = false, subKey = -1) {

        const value = propValue || e.target.value

        const contractTypeIndex = contractType ? goal.contract[contractType][index] : false
        switch (e.target.name) {
            case "name": goal.name = value; break;
            case "description": goal.description = value; break;
            case "context": goal.context.includes(value) ? goal.context.splice(goal.context.indexOf(value), 1) : goal.context.push(value); break;
            case "ltl_value": contractTypeIndex.ltl_value = value; break;
            case "contentName": contractTypeIndex.pattern.name = value; contractTypeIndex.pattern.arguments = []; break;
            case "type": if(value === "Pattern") { if (contractTypeIndex.pattern === undefined) {contractTypeIndex.pattern={name: "", arguments: []}; delete contractTypeIndex.world_values }} else { delete contractTypeIndex.pattern; } break;
            case "subValue": contractTypeIndex.pattern.arguments[subKey] = {"value": makeListOf(value)}; break;
            default: break;
        }

        props.edit(goal)
    }

    function deleteContractContent(key, contractType) {
        goal.contract[contractType].splice(key, 1)
        props.edit(goal)
    }

    function addContractContent(contractType, key = -1) {
        goal.contract[contractType].push({ltl_value: ""})
        props.edit(goal)
    }

    function setLTLWorldValues(key, contractType, values) {
        goal.contract[contractType][key].world_values = values
        props.edit(goal)
    }

    function handleKeyEvent(event) {
        if (event.key === "Enter") {
            props.save(goal)
        }
    }

    return(
        <>
            <div className="modal-header justify-content-center">
                <button
                    aria-hidden={true}
                    className="close"
                    onClick={props.close}
                    type="button"
                >
                    <i className={props.info.modal.close}/>
                </button>
                <h4 className="title title-up">{props.info.title}</h4>
            </div>
            <div className="modal-body justify-content-center" onKeyPress={handleKeyEvent}>
                <Input type="text" placeholder="Title of the Goal" name="name" value={goal.name} onChange={changeParameter}/>
                <Input type="textarea" placeholder="Description of the Goal" name="description" value={goal.description} onChange={changeParameter}/>
                <h4 className="font-bold title-up mb-2">{props.info.context.title}</h4>
                {props.listOfWorldVariables[props.listOfWorldVariables.length - 1].map((prop, key) => (
                    <Checkbox key={key} label={prop} name="context" checked={goal.context.includes(prop)} onChange={(e) => changeParameter(e, false, 0, prop)}/>
                ))}
                <div className="mt-2 text-center">
                    {props.listOfWorldVariables.map((prop, key) => (
                        (key !== (props.listOfWorldVariables.length - 1) && (
                            <div key={key}>
                                <span className="font-semibold">{props.info.lists.title} {props.info.lists.elements[key]} : </span>
                                {prop.map((subProp, subKey) => (
                                    <span key={subKey}>{subProp}{subKey !== (prop.length - 1) ? ", " : ""}</span>
                                ))}
                            </div>
                        ))
                    ))}
                </div>
                {props.info.contract.map((prop, key) => (
                    <div key={key}><h4 className="title title-up">{prop.title}</h4>
                    <ContractContentEditor
                        items={goal.contract[prop.title]}
                        patterns={props.patterns}
                        color={prop.color}
                        changeParameter={changeParameter}
                        deleteContent={deleteContractContent}
                        addContent={addContractContent}
                        contractType={prop.title}
                        listOfWorldVariables={props.listOfWorldVariables}
                        setLTLWorldValues={setLTLWorldValues}
                        {...contracteditorinfo}/></div>
                ))}
            </div>
            <ModalFooter>
                <div className="flex flex-col w-full">
                {goal.contract.guarantees.length === 0 && (
                    <div className="flex justify-end mb-2"><span className={"text-red-500 "}>{props.info.modal.warningGuarantees}</span></div>
                )}
                    <div className="flex w-full justify-between">
                    <Button color={props.info.modal.cancelColor} onClick={props.close}>
                    {props.info.modal.cancelText}
                </Button>
                <Button color={props.info.modal.saveColor} disabled={goal.contract.guarantees.length === 0} onClick={() => props.save(goal)}>
                    {props.info.modal.saveText}
                </Button></div>
                </div>
            </ModalFooter>
        </>
    );
}

export default GoalEdit;