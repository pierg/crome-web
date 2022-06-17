import React from "react";
import SocketGetInputs from "./Examples/GetInputs";
import SocketInputClicked from "./Examples/InputClicked";
import SocketResetClicked from "./Examples/ResetClicked";
import SocketRandomClicked from "./Examples/RandomClicked";
import Button from "../Elements/Button";

export default class Simulation extends React.Component {

    state = {
        triggerGetInputs : true,
        inputs : [],
        triggerInputClicked : false,
        triggerResetClicked: false,
        inputClicked : null,
        inputNumberRandom : 25,
        triggerRandomClicked: false,
        lines : [],
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
        let lines = this.state.lines
        lines.push(line)
        this.setState({
            lines : lines,
        })
    }

    setTriggerResetClicked = (bool) => {
        this.setState({
            triggerResetClicked : bool,
        })
    }

    emptyLines = () => {
        this.setState({
            lines : [],
        })
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

    setTriggerRandomClicked = (bool) => {
        this.setState({
            triggerRandomClicked : bool,
        })
    }

    render(){
        let inputDisplay = []
        if(this.state.inputs.length !== 0) {
            for (let i = 0; i < this.state.inputs.length; i++) {
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
                                onClick={() => {
                                    this.setTriggerInputClicked(true, this.state.inputs[i])
                                }}
                            >
                                {this.state.inputs[i]}
                            </Button>
                        </td>
                    </tr>
                );
            }
        }

        let linesDisplay = []
        if(this.state.lines.length !== 0) {
            for(let i=0; i<this.state.lines.length; i++) {
                linesDisplay.push(
                    <tr
                        key={i}
                    >
                        <th scope="row">
                            {i}
                        </th>
                        <td>
                            {this.state.lines[i][0]}
                        </td>
                        <td>
                            {this.state.lines[i][1]}
                        </td>
                        <td>
                            {this.state.lines[i][2]}
                        </td>
                        <td>
                            {this.state.lines[i][3]}
                        </td>
                    </tr>
                );
            }
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
                    setTriggerGetInput={this.setTriggerGetInputs}
                    setLine={this.setLine}
                    name={this.props.name}
                    mode={this.props.mode}
                    input={this.state.inputClicked}
                />
                <SocketResetClicked
                    trigger={this.state.triggerResetClicked}
                    setTrigger={this.setTriggerResetClicked}
                    setTriggerGetInput={this.setTriggerGetInputs}
                    emptyLines={this.emptyLines}
                    name={this.props.name}
                    mode={this.props.mode}
                />
                <SocketRandomClicked
                    trigger={this.state.triggerRandomClicked}
                    setTrigger={this.setTriggerRandomClicked}
                    setTriggerGetInput={this.setTriggerGetInputs}
                    setLine={this.setLine}
                    name={this.props.name}
                    mode={this.props.mode}
                    number={this.state.inputNumberRandom}
                />
                <div className="row mt-2">
                    <div className="col-4 mt-2">
                        <div className="row">
                            <div className="text-center">
                                <span
                                    className="text-right inline-block w-16 mr-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full"
                                        pattern="[0-9]*"
                                        onInput={this.handleChange}
                                        value={this.state.inputNumberRandom}
                                    />
                                </span>
                                <span className="text-left inline-block w-auto ml-1">
                                    <Button
                                        color="teal"
                                        onClick={() => {this.setTriggerRandomClicked(true)}}
                                    >
                                        Random
                                    </Button>
                                </span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-10 offset-1">
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
                        </div>
                        <div className="row">
                            <div className="text-center">
                                <Button
                                    size="sm"
                                    color="gray"
                                    onClick={() => {this.setTriggerResetClicked(true)}}
                                >
                                    RESET
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            {
                                linesDisplay.length !== 0 &&
                                <table className="table table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{"width":"5%"}}>#</th>
                                            <th scope="col" style={{"width":"30%"}}>Inputs</th>
                                            <th scope="col" style={{"width":"5%"}}>S</th>
                                            <th scope="col" style={{"width":"5%"}}>S'</th>
                                            <th scope="col" style={{"width":"55%"}}>outputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {linesDisplay}
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}