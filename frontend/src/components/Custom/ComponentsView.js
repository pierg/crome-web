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
        tmpComponent: false
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
        this.setTmpComponent(component)
    }

    saveComponent = (component) => {
        console.log(component)
    }

    render() {
        let components = []
        for(let i=0; i<3; i++) {
            components.push(
                <div
                    key={i}
                    className="flex flex-row"
                >
                    <Checkbox
                        label="My Value"
                        value={false}
                        onChange={() => this.checkBoxClicked(i)}
                    />
                </div>
            )
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
                                    patterns={this.props.pattern}
                                    edit={(component) => this.editComponent(component)}
                                    save={() => this.saveComponent}
                                    close={() => this.setTriggerAddComponent(false)}
                                    {...goaleditinfo}
                                />
                            </Modal>
                        </div>
                    </div>
                    {components}
                </div>
            </>
        );
    }
}