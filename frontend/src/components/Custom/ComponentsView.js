import React from "react";
import componentInfo from "../../_texts/custom/componentInfo";
import ComponentEdit from "./ComponentEdit";
import Button from "../Elements/Button";
import Checkbox from "../Elements/Checkbox";
import {Modal} from "reactstrap";
import goaleditinfo from "../../_texts/custom/goaleditinfo";
import defaultcomponent from "../../_texts/custom/defaultcomponent";

export default class ComponentsView extends React.Component {

    state = {
        triggerAddComponent: false,
        tmpComponent: false,
        selectedComponents : []
    }

    setTriggerAddComponent = (bool) => {
        this.setState({
            triggerAddComponent : bool
        })
    }

    setTmpComponent = (tmpComponent) => {
        this.setState({
            tmpComponent : tmpComponent
        })
    }

    checkBoxClicked = (i) => {
        console.log(i)
    }

    clickAddComponent = () => {
        this.setTmpComponent(defaultcomponent)
        this.setTriggerAddComponent(true)
    }

    editComponent = (component) => {
        console.log("edit")
        this.setTmpComponent(component)
    }

    deleteComponent = (i) => {
        console.log(i)
    }

    saveComponent = (component) => {
        console.log(component)
    }

    render() {
        let components = []
        for(let i=0; i<20; i++) {

            if (i === 0) {
                components.push(<li key={i}
                                    className="border-b-1 border-t-1 text-blueGray-700 text-lg py-3 hover:bg-blueGray-100 cursor-pointer" >
                    <div className="flex justify-between">
                        <div>
                            <Checkbox
                                className="pr-2"
                                value={false}
                                onChange={() => this.checkBoxClicked(i)}
                            />{" composant_"+i}
                        </div>
                        <div >
                            <Button size="sm" color="gray" onClick={() => this.editComponent(i)}><i className={componentInfo.info.icon.edit}/></Button>
                            <Button size="sm" color="red" onClick={() => this.deleteComponent(i)}><i className={componentInfo.info.icon.delete}/></Button>
                        </div>
                    </div>
                </li>)
            } else {
                components.push(<li key={i}
                                    className="border-b-1 text-blueGray-700 text-lg py-3 hover:bg-blueGray-100 cursor-pointer">
                    <div className="flex justify-between">
                        <div>
                            <Checkbox
                                className="pr-2"
                                value={false}
                                onChange={() => this.checkBoxClicked(i)}
                            />{" composant_"+i}
                        </div>
                        <div >
                            <Button size="sm" color="gray" onClick={() => this.editComponent(i)}><i className={componentInfo.info.icon.edit}/></Button>
                            <Button size="sm" color="red" onClick={() => this.deleteComponent(i)}><i className={componentInfo.info.icon.delete}/></Button>
                        </div>
                    </div>
                </li>)
            }
        }

        return (
            <>
                <div className="px-3 pb-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                    <div className="flex flex-row py-3 text-center">
                        <div className="w-9/12">
                            <div className="fs-4 font-bold text-blueGray-500">
                                {componentInfo.info.texts.component.header.title}
                            </div>
                        </div>
                        <div className="w-3/12">
                            <Button
                                size={componentInfo.info.texts.component.header.button.size}
                                color={componentInfo.info.texts.component.header.button.color}
                                onClick={() => this.clickAddComponent()}
                            >
                                <i className={componentInfo.info.texts.component.header.button.icon}></i>
                            </Button>
                            <Modal
                                isOpen={this.state.triggerAddComponent}
                                autoFocus={false}
                                toggle={() => this.setTriggerAddComponent(false)}
                                className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}
                            >
                                <ComponentEdit
                                    component={this.state.tmpComponent}
                                    patterns={this.props.patterns}
                                    edit={(component) => this.editComponent(component)}
                                    save={(component) => this.saveComponent(component)}
                                    close={() => this.setTriggerAddComponent(false)}
                                    {...goaleditinfo}
                                />
                            </Modal>
                        </div>
                    </div>
                     <div className="overflow-auto max-h-400-px pt-3 px-5 mb-4">
                        <ul>
                            {components}
                        </ul>
                     </div>
                </div>
            </>
        );
    }
}