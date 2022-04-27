import "../../_texts/custom/cgginfo"
import "../../_texts/custom/goaleditinfo"
import "../../assets/styles/tailwind.css"
import "../../components/Crome/CGG"
import "../../components/Custom/BuildCGG"
import "../../components/Custom/Examples/GetCGG"
import "../../components/Custom/Examples/SocketBuildCGG"
import "../../components/Custom/GoalModalView"
import "../../components/Custom/IndexCGG"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react"
import "reactstrap"
import BuildCGG
import CGG
import cgginfo
import GetCGG
import goaleditinfo
import GoalModalView
import IndexCGG
import React
import SocketBuildCGG
import { Modal }

export default class Analysis extends React.Component {
  state = {
    modalGoal: false,
    currentGoalIndex: 0,
    cgg: false,
    operator: null,
    selectedGoals: [],
    selectedLibrary: null,
    library: null,
    triggerOperation: false,
    triggerCGG: false,
  };

  setModalGoal = (bool) => {
    this.setState({
      modalGoal: bool,
    });
  };

  setCurrentGoalIndex = (id) => {
    this.setState({
      currentGoalIndex: id,
    });
  };

  callCGG = (mode) => {
    if (mode === "auto") {
      this.setState({
        triggerCGG: true,
      });
    }
  };

  setCGG = (cgg) => {
    if (cgg !== null) {
      let parsedCGG = JSON.parse(cgg);
      let nodes = [];
      let edges = [];
      this.recParseCGG(parsedCGG, nodes, edges);
      let tmpCGG = { nodes: nodes, edges: edges };
      this.setState({
        cgg: tmpCGG,
      });
    }
  };

  setOperator = (operator) => {
    this.setState({
      operator: operator,
    });
  };

  setSelectedGoals = (selectedGoals) => {
    this.setState({
      selectedGoals: selectedGoals,
    });
  };

  setLibrary = (library) => {
    this.setState({
      selectedLibrary: library,
    });
  };

  applyOperator = () => {
    this.setTriggerOperation(true);
  };

  setTriggerOperation = (bool) => {
    if (!bool) {
      this.setTriggerCGG(true);
    }
    this.setState({
      triggerOperation: bool,
    });
  };

  setTriggerCGG = (bool) => {
    this.setState({
      triggerCGG: bool,
    });
  };

  setGoalsTrigger = () => {
    this.setState(
      {
        triggerCGG: false,
        cgg: true,
      },
      () => this.props.toggleGoalsTrigger()
    );
  };

  isExistingGoal = (id) => {
    return id.split("-").length >= 2;
  };

  idIncludes = (nodes, id) => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) return true;
    }
    return false;
  };

  recParseCGG = (cgg, nodes, edges) => {
    if (!this.idIncludes(nodes, cgg.id)) {
      let group = this.isExistingGoal(cgg.id) ? "input" : "new";
      nodes.push({ id: cgg.id, group: group, label: cgg.goal });
    }
    if (cgg.children !== undefined) {
      for (let i = 0; i < cgg.children.length; i++) {
        edges.push({
          from: cgg.children[i].id,
          to: cgg.id,
          arrows: { to: { type: cgginfo.symbols[cgg.link.toLowerCase()] } },
        });
        this.recParseCGG(cgg.children[i], nodes, edges);
      }
    }
  };

  render() {
    let that = this;

    function findGoalById(id) {
      if (that.props.goals !== null) {
        for (let i = 0; i < that.props.goals.length; i++) {
          if (that.props.goals[i].id === id) return that.props.goals[i];
        }
      }
      return { name: "error" };
    }

    function findGoalIndexById(id) {
      if (that.props.goals !== null) {
        for (let i = 0; i < that.props.goals.length; i++) {
          if (that.props.goals[i].id === id) {
            return { index: i, goal: that.props.goals[i] };
          }
        }
      }
    }

    function clickOnGoal(id) {
      const result = findGoalIndexById(id[0]);
      if (result !== undefined && !result.goal.hasOwnProperty("group")) {
        that.setModalGoal(true);
        that.setCurrentGoalIndex(result.index);
      }
    }

    let nodesArray = [];
    let edgesArray = [];

    if (this.state.cgg) {
      // the cgg state is a boolean, true if the cgg has been built
      // if you don't see how to fill the graph, there is an example in storage/crome/cgg.json
      for (let i = 0; i < that.props.goals.length; i++) {
        nodesArray.push({
          id: that.props.goals[i].id,
          label: that.props.goals[i].name,
        });
        nodesArray[nodesArray.length - 1].group = that.props.goals[i].hasOwnProperty(
          "group"
        )
          ? that.props.goals[i].group
          : "input";

        if (that.props.goals[i].hasOwnProperty("link")) {
          for (let j = 0; j < that.props.goals[i].children.length; j++) {
            edgesArray.push({
              from: that.props.goals[i].children[j],
              to: that.props.goals[i].id,
              arrows: {
                to: { type: cgginfo.symbols[that.props.goals[i].link.toLowerCase()] },
              },
            });
          }
        }
      }
    }

    /* DEFINE CGG PARAMETERS PASSED TO CGG COMPONENT */
    const graph = {
      nodes: nodesArray,
      edges: edgesArray,
    };

    const options = {
      layout: {
        hierarchical: false,
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
      height: "1200px",
      autoResize: true,
      /*"physics": { // PARAMETERS FOR THE CGG, see documentation for more info
                "forceAtlas2Based": {
                    "gravitationalConstant": -138,
                    "centralGravity": 0.02,
                    "springLength": 100
                },
                "minVelocity": 0.75,
                "solver": "forceAtlas2Based",
            }*/
    };

    const events = {
      doubleClick: function (event) {
        if (event.nodes.length !== 0) clickOnGoal(event.nodes);
      },
    };

    return (
      <>
        <GetCGG
          session={this.props.id}
          project={this.props.project}
          trigger={this.state.triggerCGG}
          setGoalsTrigger={this.setGoalsTrigger}
        />
        <SocketBuildCGG
          session={this.props.id}
          operator={this.state.operator}
          goals={this.props.goals}
          selectedGoals={this.state.selectedGoals}
          library={this.state.selectedLibrary}
          trigger={this.state.triggerOperation}
          setTrigger={this.setTriggerOperation}
        />
        {!this.state.cgg && <IndexCGG callCGG={this.callCGG} />}
        <BuildCGG
          infos={cgginfo}
          cgg={this.state.cgg}
          goals={this.props.goals}
          findGoalById={findGoalById}
          selectedOperator={this.state.operator}
          setOperator={this.setOperator}
          selectedGoals={this.state.selectedGoals}
          updateSelectedGoals={this.setSelectedGoals}
          selectedLibrary={this.state.selectedLibrary}
          setLibrary={this.setLibrary}
          applyOperator={this.applyOperator}
        />
        {this.state.cgg && (
          <>
            <CGG
              active={this.props.active}
              graph={graph}
              options={options}
              events={events}
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
                  <GoalModalView
                    goal={this.props.goals[this.state.currentGoalIndex]}
                    close={() => this.setModalGoal(false)}
                    patterns={this.props.patterns}
                    {...goaleditinfo}
                  />
                )}
            </Modal>
          </>
        )}
      </>
    );
  }
}
