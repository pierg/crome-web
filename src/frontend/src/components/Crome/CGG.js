import React from "react";
import Graph from "react-graph-vis";
import { Modal } from "reactstrap";
import GoalModalView from "../Custom/GoalModalView";
import goaleditinfo from "../../_texts/goaleditinfo";
import NodeModalView from "../Custom/NodeModalView";

export default class CGG extends React.Component {
  state = {
    ready: false,
    network: null,
    modalNode: false,
    modalGoal: false,
    currentGoalIndex: 0,
    nodeLabel: "",
    nodeChildren: "",
    nodeParent: "",
  };

  setModalGoal = (bool) => {
    this.setState({
      modalGoal: bool,
    });
  };

  setModalNode = (bool) => {
    this.setState({
      modalNode: bool,
    });
  };

  setCurrentGoalIndex = (id) => {
    this.setState({
      currentGoalIndex: id,
    });
  };

  setNodeLabel = (str) => {
    this.setState({
      nodeLabel: str,
    });
  };

  setNodeChildren = (str) => {
    this.setState({
      nodeChildren: str,
    });
  };

  setNodeParent = (str) => {
    this.setState({
      nodeParent: str,
    });
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.active !== nextProps.active || this.state !== nextState;
  }

  setReady = (bool) => {
    this.setState({
      ready: bool,
    });
  };

  findGoalIndexById = (id) => {
    if (this.props.goals !== null) {
      for (let i = 0; i < this.props.goals.length; i++) {
        if (this.props.goals[i].id === id) {
          return { index: i, goal: this.props.goals[i] };
        }
      }
    }
  };

  findNodesIndexById = (id) => {
    if (this.props.nodesArray !== null) {
      for (let i = 0; i < this.props.nodesArray.length; i++) {
        if (this.props.nodesArray[i].id === id) {
          return this.props.nodesArray[i].label;
        }
      }
    }
  };

  /**
   * Find the children of a node and the type of operations they are linked with
   * @param id
   * @returns {string}
   */
  getNodeChildren = (id) => {
    let str = "";
    let goals1 = id.split("/\\");
    let goals2 = id.split("**");
    let goals3 = id.split("||");
    if (goals1.length === 2) {
      str += "a conjunction link between ";
      str += "<strong>" + this.findNodesIndexById(goals1[0]) + "</strong> and ";
      str += "<strong>" + this.findNodesIndexById(goals1[1]) + "</strong>";
    } else if (goals2.length === 2) {
      str += "a refinement link between ";
      str += "<strong>" + this.findNodesIndexById(goals2[0]) + "</strong> and ";
      str += "<strong>" + this.findNodesIndexById(goals2[1]) + "</strong>";
    } else if (goals3.length === 2) {
      str += "a composition link between ";
      str += "<strong>" + this.findNodesIndexById(goals3[0]) + "</strong> and ";
      str += "<strong>" + this.findNodesIndexById(goals3[1]) + "</strong>";
    }
    return str;
  };

  /**
   * Find the parents of a node and the type of operations they are linked with
   * @param id
   * @returns {string}
   */
  getNodeParent = (id) => {
    let str = "";
    const operations = {
      "/\\": "conjunction",
      "**": "refinement",
      "||": "composition",
    };
    let goals;
    if (this.props.edgesArray !== null) {
      for (let i = 0; i < this.props.edgesArray.length; i++) {
        if (this.props.edgesArray[i].from === id) {
          for (const key in operations) {
            goals = this.props.edgesArray[i].to.split(key);
            if (goals.length === 2 && (goals[0] === id || goals[1] === id)) {
              str +=
                operations[key] +
                " of <strong>" +
                this.findNodesIndexById(this.props.edgesArray[i].to) +
                "</strong>\n";
            }
          }
        }
      }
    }
    return str;
  };

  render() {
    let that = this;

    const options = {
      layout: {
        improvedLayout: true,
        hierarchical: {
          enabled: true,
          sortMethod: "directed",
          direction: "DU",
          shakeTowards: "roots",
        },
      },
      edges: {
        color: "#000000",
        arrows: {
          to: {
            scaleFactor: 1,
          },
        },
      },
      nodes: {
        shape: "box",
      },
      groups: {
        input: {
          color: {
            border: "#00bb00",
            background: "#ffffff",
            highlight: {
              border: "#88bb88",
              background: "#ccccee",
            },
          },
        },
        new: {
          color: {
            border: "#00bb00",
            background: "#00bb00",
            highlight: {
              border: "#88bb88",
              background: "#bbffbb",
            },
          },
        },
        library: {
          color: {
            border: "#ffbb00",
            background: "#ffffff",
            highlight: {
              border: "#ffbb88",
              background: "#eeeecc",
            },
          },
        },
      },
      height: this.props.size,
      autoResize: true,
    };

    const events = {
      doubleClick: function (event) {
        if (event.nodes.length !== 0) clickOnGoal(event.nodes);
      },
    };

    /**
     * Open the right modal when double-clicking on a goal or a node on the CGG
     * @param id
     */
    function clickOnGoal(id) {
      const result = that.findGoalIndexById(id[0]);
      if (result !== undefined && !result.goal.hasOwnProperty("group")) {
        that.setModalGoal(true);
        that.setCurrentGoalIndex(result.index);
      } else {
        const node = that.findNodesIndexById(id[0]);
        that.setNodeLabel(node);
        that.setNodeChildren(that.getNodeChildren(id[0]));
        that.setNodeParent(that.getNodeParent(id[0]));
        that.setModalNode(true);
      }
    }

    return (
      <div className="bg-lightBlue-500 bg-opacity-25 shadow-md">
        {this.state.ready && (
          <>
            <Graph
              graph={this.props.graph}
              options={options}
              events={events}
              getNetwork={(network) => {
                this.setState({
                  network: network,
                });
                //  if you want access to vis.js network api you can set the state in a parent component using this property
              }}
            />
            <Modal
              isOpen={this.state.modalGoal}
              toggle={() => this.setModalGoal(false)}
              className={
                "custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"
              }
            >
              {this.props.goals !== null &&
                this.props.goals[this.state.currentGoalIndex] !== undefined && (
                  <>
                    <GoalModalView
                      goal={this.props.goals[this.state.currentGoalIndex]}
                      library={true}
                      close={() => this.setModalGoal(false)}
                      patterns={this.props.patterns}
                      {...goaleditinfo}
                    />
                  </>
                )}
            </Modal>
            <Modal
              isOpen={this.state.modalNode}
              toggle={() => this.setModalNode(false)}
              className={
                "custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"
              }
            >
              {this.props.goals !== null && (
                <>
                  <NodeModalView
                    nodeChildren={this.state.nodeChildren}
                    nodeLabel={this.state.nodeLabel}
                    nodeParent={this.state.nodeParent}
                    close={() => this.setModalNode(false)}
                    {...goaleditinfo}
                  />
                </>
              )}
            </Modal>
          </>
        )}
        {this.props.active && <DelayActivation callBack={this.setReady} />}
      </div>
    );
  }
}

class DelayActivation extends React.Component {
  componentDidMount() {
    let callBack = this.props.callBack;
    setTimeout(function () {
      callBack(true);
    }, 1000);
  }
  render() {
    return null;
  }
}
