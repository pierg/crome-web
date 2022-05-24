import React from 'react';
import ContractAccordionItem from "./ContractAccordionItem";
import {Button, ModalFooter} from "reactstrap";
import LibraryView from "./LibraryView";

function GoalModalView(props) {

    const [open, setOpen] = React.useState(false)

    const contract = []

    let callBackAction = (bool) => {
      setOpen(bool)
    };

    for (const property in props.goal.contract) {
        if (props.goal.contract.hasOwnProperty(property)) {
            contract[Object.keys(props.goal.contract).indexOf(property)] = []
            contract[Object.keys(props.goal.contract).indexOf(property)]["title"]=property
            contract[Object.keys(props.goal.contract).indexOf(property)]["content"]=props.goal.contract[property]
        }
    }

    return(
        <>
            <div className="w-full mt-8 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 opacity-1 transform duration-300 transition-all ease-in-out">
                <div className="flex-auto p-4 pr-0">
                    <div className="flex">
                        <div className="flex flex-wrap w-full">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <span className="font-bold text-xl uppercase text-blueGray-700">{props.goal.name}</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-wrap w-full">
                                <div className="relative w-full pr-4 mt-2 mb-2 max-w-full flex-grow flex-1">
                                <span className="text-md text-blueGray-700">
                                    {props.goal.description}
                                </span>
                                </div>
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <b>Context : </b> {props.goal.context["formula"]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <div
                                className={"overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full border-b border-blueGray-200"}>
                                <ContractAccordionItem
                                    contract={contract}
                                    patterns={props.patterns}
                                    color={"lightBlue"}
                                    setOpen={callBackAction}
                                    defaultOpened={open}/>
                            </div>
                        </div>
                    </div>
                    {props.library && (<div className="mt-5">
                        <LibraryView/>
                    </div>)}
                </div>
            </div>
            <ModalFooter>
                <div className="w-full flex justify-center">
                    <Button color={props.info.modal.cancelColor} onClick={props.close}>
                        {props.info.modal.cancelText}
                    </Button>
                </div>
            </ModalFooter>
        </>
    );
}

export default GoalModalView;