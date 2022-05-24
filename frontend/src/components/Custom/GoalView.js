import React, {useEffect} from 'react';
import ContractAccordionItem from "./ContractAccordionItem";
import {Modal} from "reactstrap";
import ContractModalDetails from "./ContractModalDetails";
import 'react-tippy/dist/tippy.css'
import {Tooltip} from 'react-tippy';


function GoalView(props) {

    const contract = []
    const [open, setOpen] = React.useState(false)
    const [modalClassic, setModalClassic] = React.useState(false)

    for (const property in props.contract) {
        if (props.contract.hasOwnProperty(property)) {
            contract[Object.keys(props.contract).indexOf(property)] = []
            contract[Object.keys(props.contract).indexOf(property)]["title"]=property
            contract[Object.keys(props.contract).indexOf(property)]["content"]=props.contract[property]
        }
    }

    useEffect(() => {
        setOpen(false)
    }, [props.contract]);

    let callBackAction = (bool) => {
      setOpen(bool);
    };

    return(
        <>
            <div className={"w-full lg:w-6/12 xl:w-5/12 mt-8 ml-4 mr-4 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg opacity-1 transform duration-300 transition-all ease-in-out"}>
                <div className="flex-auto p-4 pr-0">
                    <div className="flex">
                        <div className="flex flex-wrap w-full">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <span className="font-bold text-xl uppercase text-blueGray-700">{props.title}</span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-wrap w-full">
                                <div className="relative w-full pr-4 mt-2 mb-2 max-w-full flex-grow flex-1">
                                <span className="text-md text-blueGray-700">
                                    {props.description}
                                </span>
                                </div>
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <div>
                                        <b>Context :</b> {props.contextChecked["formula"]}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col min-content">
                            <div className="relative pl-4 flex justify-end flex-initial">
                                                                    <Tooltip
                                        title="Edit"
                                        position="right"
                                        arrow="true"
                                        >
                                <div
                                    onClick={() => props.modify(true, props.number)}
                                    className={
                                        "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full cursor-pointer " +
                                        props.statIconColor
                                    }
                                >
                                    <i className={props.statIconName}/>
                                </div>
                                                                    </Tooltip>
                            </div>
                            <div className="relative pl-4 flex mt-2 justify-end flex-initial">

                                                                                                   <Tooltip
                                        title="Delete"
                                        position="right"
                                        arrow="true"
                                        >
                                <div
                                    onClick={() => props.delete(props.number)}
                                    className={
                                        "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full cursor-pointer " +
                                        props.statIconColor
                                    }
                                >
                                    <i className={props.statSecondIconName}/>
                                </div>
                                                                                                   </Tooltip>
                            </div>
                                                                                               <Tooltip
                                        title="Download"
                                        position="right"
                                        arrow="true"
                                        >
                            <div className="relative pl-4 flex mt-2 justify-end flex-initial">
                                <div
                                    onClick={() => props.download(props.number)}
                                    id={"downloadButton-"+props.number}
                                    className={
                                        "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full cursor-pointer bg-emerald-400"
                                    }
                                >
                                    <i className={props.statDownloadIconName} id={"downloadIcon"}/>
                                </div>
                            </div>
                                                                                               </Tooltip>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <div
                                className={"overflow-hidden relative flex flex-col min-w-0 " + (open ? "pb-4 " : "") + "break-words bg-white w-full border-b border-blueGray-200"}>
                                <ContractAccordionItem
                                    contract={contract}
                                    patterns={props.patterns}
                                    color={"lightBlue"}
                                    setOpen={callBackAction}
                                    defaultOpened={open}
                                    modal={setModalClassic}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalClassic}
                toggle={() => setModalClassic(false)}
                className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                <ContractModalDetails close={() => setModalClassic(false)}/>
            </Modal>
        </>
    );
}

export default GoalView;