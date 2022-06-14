import React from "react";
import SocketGetInputs from "./Examples/GetInputs";

export default class Simulation extends React.Component {

    state = {
        triggerGetInputs : true,
        inputs : null,
    }

    constructor(props) {
        super(props);

        this.setTriggerGetInputs = this.setTriggerGetInputs.bind(this)
        this.setInputs = this.setInputs.bind(this)
    }

    setTriggerGetInputs(bool) {
        this.setState({
            triggerGetInputs : bool
        })
    }

    setInputs(inputs) {
        this.setState({
            inputs : inputs
        })
    }

    render(){
        return (
            <>
                <SocketGetInputs
                    trigger={this.state.triggerGetInputs}
                    setTrigger={this.setTriggerGetInputs}
                    setInputs={this.setInputs}
                    name={this.props.name}
                    mode={this.props.mode}
                />
                <div className="col-2 offset-1">
                    <div>
                        inputs :
                        {this.state.inputs}
                    </div>
                </div>
            </>
        )
    }
}