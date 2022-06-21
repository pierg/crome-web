import React from "react";
import {Button, ModalFooter} from "reactstrap";
import Input from "../Elements/Input";
import ContractContentEditor from "../Custom/ContractContentEditor";
import contracteditorinfo from "_texts/custom/contracteditorinfo.js";
import makeListOf from "hooks/stringToListConversion.js";

function ComponentEdit(props) {

    const [component] = React.useState(JSON.parse(JSON.stringify(props.component)));

    function changeParameter(e, contractType = false, index = 0, propValue = false, subKey = -1) {

        const value = propValue || e.target.value

        const contractTypeIndex = contractType ? component.contract[contractType][index] : false
        switch (e.target.name) {
            case "name":
                component.name = value;
                break;
            case "description":
                component.description = value;
                break;
            case "inputs":
                component.inputs = value
                break;
            case "outputs":
                component.outputs = value
                break;
            case "ltl_value":
                contractTypeIndex.ltl_value = value;
                break;
            case "contentName":
                contractTypeIndex.pattern.name = value;
                contractTypeIndex.pattern.arguments = [];
                break;
            case "type":
                if (value === "Pattern") {
                    if (contractTypeIndex.pattern === undefined) {
                        contractTypeIndex.pattern = {name: "", arguments: []};
                        delete contractTypeIndex.world_values
                    }
                } else {
                    delete contractTypeIndex.pattern;
                }
                break;
            case "subValue":
                contractTypeIndex.pattern.arguments[subKey] = {"value": makeListOf(value)};
                break;
            default:
                break;
        }

        props.edit(component)
    }

    function deleteContractContent(key, contractType) {
        component.contract[contractType].splice(key, 1)
        props.edit(component)
    }

    function addContractContent(contractType, key = -1) {
        component.contract[contractType].push({ltl_value: ""})
        props.edit(component)
    }

    function setLTLWorldValues(key, contractType, values) {
        component.contract[contractType][key].world_values = values
        props.edit(component)
    }

    return (
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
            <div className="modal-body justify-content-center">
                <Input
                    type="text"
                    placeholder="Title of the Component"
                    name="name"
                    value={component.name}
                    onChange={changeParameter}
                />
                <Input
                    type="textarea"
                    placeholder="Description of the Component"
                    name="description"
                    value={component.description}
                    onChange={changeParameter}
                />
                <div>
                    <label htmlFor="inputs" className="title title-up">Inputs</label>
                    <Input
                        type="text"
                        placeholder="inputs"
                        name="inputs"
                        value={component.inputs}
                        onChange={changeParameter}
                    />
                    <label htmlFor="outputs" className="title title-up">Outputs</label>
                    <Input
                        type="text"
                        placeholder="outputs"
                        name="outputs"
                        value={component.outputs}
                        onChange={changeParameter}
                    />
                </div>
                {props.info.contract.map((prop, key) => (
                    <div key={key}>
                        <h4 className="title title-up">{prop.title}</h4>
                        <ContractContentEditor
                            items={component.contract[prop.title]}
                            patterns={props.patterns}
                            color={prop.color}
                            changeParameter={changeParameter}
                            deleteContent={deleteContractContent}
                            addContent={addContractContent}
                            contractType={prop.title}
                            listOfWorldVariables={[]}
                            setLTLWorldValues={setLTLWorldValues}
                            keyType={key}
                            {...contracteditorinfo}
                        />
                    </div>
                ))}
            </div>
            <ModalFooter>
                <div className="flex flex-col w-full">
                    {component.contract.guarantees.length === 0 && (
                        <div className="flex justify-end mb-2"><span
                            className={"text-red-500 "}>{props.info.modal.warningGuarantees}</span></div>
                    )}
                    <div className="flex w-full justify-between">
                        <Button color={props.info.modal.cancelColor} onClick={props.close}>
                            {props.info.modal.cancelText}
                        </Button>
                        <Button color={props.info.modal.saveColor} disabled={component.contract.guarantees.length === 0}
                                onClick={() => props.save(component)}>
                            {props.info.modal.saveText}
                        </Button></div>
                </div>
            </ModalFooter>
        </>
    );
}

export default ComponentEdit;