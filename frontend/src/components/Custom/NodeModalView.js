import React from 'react';
import {Button, ModalFooter} from "reactstrap";

function NodeModalView(props) {

    /*const [open, setOpen] = React.useState(false)

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
    }*/

    return(
        <>
            <div className="w-full mt-8 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 opacity-1 transform duration-300 transition-all ease-in-out">
                <div className="flex-auto p-4 pr-0">
                    <div className="flex">
                        <div className="flex flex-wrap w-full">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <span className="font-bold text-xl uppercase text-blueGray-700">Generated goal</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-wrap w-full">
                                <div className="relative w-full pr-4 mt-2 mb-2 max-w-full flex-grow flex-1">
                                <span className="text-md text-blueGray-700" dangerouslySetInnerHTML={{__html: "This goal is "+props.node}}>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default NodeModalView;