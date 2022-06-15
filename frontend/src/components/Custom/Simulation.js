import React from "react";
import SocketGetInputs from "./Examples/GetInputs";
import SocketInputClicked from "./Examples/InputClicked";
import Button from "../Elements/Button";

export default class Simulation extends React.Component {

    state = {
        triggerGetInputs : true,
        inputs : [],
        triggerInputClicked : false,
        inputClicked : null,
        inputNumberRandom : 25,
    }

    setTriggerGetInputs = (bool) => {
        this.setState({
            triggerGetInputs : bool
        })
    }

    setInputs = (inputs) => {
        this.setState({
            inputs : inputs
        })
    }

    setTriggerInputClicked = (bool,nameInput) => {
        this.setState({
            triggerInputClicked : bool,
            inputClicked: nameInput,
        })
    }

    setLine = (line) => {
        console.log(line)
    }

    handleChange = (event) => {
        let inputNumberRandomTmp = this.state.inputNumberRandom
        if(event.target.validity.valid) {
            inputNumberRandomTmp = event.target.value
        }
        this.setState({
            inputNumberRandom: inputNumberRandomTmp,
        });
    }

    render(){
        let inputDisplay = []
        for(let i=0; i<this.state.inputs.length; i++) {
            inputDisplay.push(
                <tr
                    key={i}
                >
                    <th scope="row">
                        {i}
                    </th>
                    <td
                        className="p-0"
                    >
                        <Button
                            size="sm"
                            color="gray"
                            outline={true}
                            fullWidth={true}
                            onClick={() => {this.setTriggerInputClicked(true,this.state.inputs[i])}}
                        >
                            {this.state.inputs[i]}
                        </Button>
                    </td>
                </tr>
            );
        }
        return (
            <>
                <SocketGetInputs
                    trigger={this.state.triggerGetInputs}
                    setTrigger={this.setTriggerGetInputs}
                    setInputs={this.setInputs}
                    name={this.props.name}
                    mode={this.props.mode}
                />
                <SocketInputClicked
                    trigger={this.state.triggerInputClicked}
                    setTrigger={this.setTriggerInputClicked}
                    setLine={this.setLine}
                    name={this.props.name}
                    mode={this.props.mode}
                    input={this.state.inputClicked}
                />
                <div className="col-2 offset-1">
                    <div className="row">
                        <table className="table">
                            <thead className="mb-2">
                                <tr className="text-center">
                                    <th scope="col">#</th>
                                    <th scope="col">Inputs</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {inputDisplay}
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <Button
                                size="sm"
                                color="gray"
                            >
                                RESET
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-7 offset-1">
                    <div className="row">
                        <div className="col-2 offset-3">
                            <input
                                type="text"
                                pattern="[0-9]*"
                                className="w-full"
                                onInput={this.handleChange}
                                value={this.state.inputNumberRandom}
                            />
                        </div>
                        <div className="col-4">
                            <div className="text-center">
                                <Button
                                    color="teal"
                                >
                                    Random
                                </Button>
                            </div>
                        </div>
                    </div>
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </div>
            </>
        )
    }
}