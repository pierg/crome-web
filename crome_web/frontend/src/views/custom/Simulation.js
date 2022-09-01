import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import Button from "../../components/Elements/Button";
import Canvas from "../../components/Crome/Canvas";
import SocketGetInputs from "../../components/Custom/Socket/GetInputs";
import SocketInputClicked from "../../components/Custom/Socket/InputClicked";
import SocketResetClicked from "../../components/Custom/Socket/ResetClicked";
import SocketRandomClicked from "../../components/Custom/Socket/RandomClicked";

const mode = "crome";

export default class Simulation extends React.Component {
  state = {
    triggerGetInputs: true,
    inputs: [],
    triggerInputClicked: false,
    triggerResetClicked: false,
    inputClicked: null,
    inputNumberRandom: 25,
    triggerRandomClicked: false,
    lines: [],
  };

  setTriggerGetInputs = (bool) => {
    this.setState({
      triggerGetInputs: bool,
    });
  };

  setInputs = (inputs) => {
    this.setState({
      inputs: inputs,
    });
  };

  setTriggerInputClicked = (bool, nameInput) => {
    this.setState({
      triggerInputClicked: bool,
      inputClicked: nameInput,
    });
  };

  setLine = (line) => {
    let lines = this.state.lines;
    lines.push(line);
    this.setState({
      lines: lines,
    });
  };

  setTriggerResetClicked = (bool) => {
    this.setState({
      triggerResetClicked: bool,
    });
  };

  emptyLines = () => {
    this.setState({
      lines: [],
    });
  };

  handleChange = (event) => {
    let inputNumberRandomTmp = this.state.inputNumberRandom;
    if (event.target.validity.valid) {
      inputNumberRandomTmp = event.target.value;
    }
    this.setState({
      inputNumberRandom: inputNumberRandomTmp,
    });
  };

  setTriggerRandomClicked = (bool) => {
    this.setState({
      triggerRandomClicked: bool,
    });
  };

  render() {
    /*let inputDisplay = [];
    if (this.state.inputs.length !== 0) {
      for (let i = 0; i < this.state.inputs.length; i++) {
        inputDisplay.push(
          <tr key={i}>
            <th scope="row">{i}</th>
            <td className="p-0">
              <Button
                size="sm"
                color="gray"
                outline={true}
                fullWidth={true}
                onClick={() => {
                  this.setTriggerInputClicked(true, this.state.inputs[i]);
                }}
              >
                {this.state.inputs[i]}
              </Button>
            </td>
          </tr>
        );
      }
    }*/

    let linesDisplay = [];
    if (this.state.lines.length !== 0) {
      for (let i = 0; i < this.state.lines.length; i++) {
        linesDisplay.push(
          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{this.state.lines[i][0]}</td>
            <td>{this.state.lines[i][1]}</td>
            <td>{this.state.lines[i][2]}</td>
            <td>{this.state.lines[i][3]}</td>
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
          name={this.props.project}
          mode={mode}
        />
        <SocketInputClicked
          trigger={this.state.triggerInputClicked}
          setTrigger={this.setTriggerInputClicked}
          setTriggerGetInput={this.setTriggerGetInputs}
          setLine={this.setLine}
          name={this.props.project}
          mode={mode}
          input={this.state.inputClicked}
        />
        <SocketResetClicked
          trigger={this.state.triggerResetClicked}
          setTrigger={this.setTriggerResetClicked}
          setTriggerGetInput={this.setTriggerGetInputs}
          emptyLines={this.emptyLines}
          name={this.props.project}
          mode={mode}
        />
        <SocketRandomClicked
          trigger={this.state.triggerRandomClicked}
          setTrigger={this.setTriggerRandomClicked}
          setTriggerGetInput={this.setTriggerGetInputs}
          setLine={this.setLine}
          name={this.props.project}
          mode={mode}
          number={this.state.inputNumberRandom}
        />
        <div className="row mt-2">
          <div className="col-4 mt-2">
            <div className="row">
              <div className="text-center">
                <span className="text-right inline-block w-16 mr-1">
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
                    onClick={() => {
                      this.setTriggerRandomClicked(true);
                    }}
                  >
                    Random
                  </Button>
                </span>
                <span className="text-left inline-block w-auto ml-1">
                  <Button
                      color="red"
                      onClick={() => {
                          this.setTriggerResetClicked(true);
                      }}
                  >
                    Reset
                  </Button>
                </span>
              </div>
            </div>
            {this.props.world !== null &&
                <>
                    <div className="row">
                        <div className="text-center uppercase fs-5">
                            {this.props.world.info.name}
                        </div>
                    </div>
                    <div className="row">
                        <Canvas
                            world={this.props.world.environment}
                            lines={this.state.lines}
                        />
                    </div>
                </>
            }
          </div>
          <div className="col-7">
            <div className="row">
              {linesDisplay.length !== 0 && (
                <table className="table table-hover text-center">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: "5%" }}>
                        #
                      </th>
                      <th scope="col" style={{ width: "30%" }}>
                        Inputs
                      </th>
                      <th scope="col" style={{ width: "5%" }}>
                        S
                      </th>
                      <th scope="col" style={{ width: "5%" }}>
                        S'
                      </th>
                      <th scope="col" style={{ width: "55%" }}>
                        outputs
                      </th>
                    </tr>
                  </thead>
                  <tbody>{linesDisplay}</tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
