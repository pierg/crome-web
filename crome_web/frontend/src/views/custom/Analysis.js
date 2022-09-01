import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import goaleditinfo from "../../_texts/goaleditinfo";
import cgginfo from "../../_texts/cgginfo";
import { Modal } from "reactstrap";
import GoalModalView from "../../components/Custom/GoalModalView";
import CGG from "../../components/Crome/CGG";
import GetCGG from "../../components/Custom/Socket/GetCGG";
import SocketBuildCGG from "../../components/Custom/Socket/SocketBuildCGG";
import BuildCGG from "../../components/Custom/BuildCGG";
import ReactLoading from "react-loading";
import LegendCGG from "../../components/Custom/LegendCGG";
import default_cgg from "./default_cgg.json";

/**
 * The analysis page component
 * This component allows to generate the cgg
 */
export default class Analysis extends React.Component {
  state = {
    modalGoal: false,
    currentGoalIndex: 0,
    cgg: false,
    cggTab: null,
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

  setGoalsTrigger = (contentJSON) => {
    this.setState({
      cggTab: contentJSON,
    });
    this.setState(
      {
        triggerCGG: false,
        cgg: true,
      },
      () => this.props.toggleGoalsTrigger()
    );
  };

  addGoalAlreadyHere = (props, nodes) => {
    for (let i = 0; i < props.goals.length; i++) {
      nodes.push({ id: props.goals[i].id, label: props.goals[i].name });
      nodes[nodes.length - 1].group = props.goals[i].hasOwnProperty("group")
        ? props.goals[i].group
        : "input";
    }
  };

  addCombinedGoal = (nodes) => {
    let inter = 0;
    for (let i = 0; i < this.state.cggTab["nodes"].length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j]["id"] === this.state.cggTab["nodes"][i]["id"]) {
          inter = 1;
        }
      }

      if (inter === 0) {
        nodes.push({ id: this.state.cggTab["nodes"][i]["id"], label: "goal" + i });
      }

      inter = 0;
    }
  };

  clickOnGoal2 = (id) => {
    this.setModalGoal(true);
    this.setCurrentGoalIndex(id);
  };

  addEdges = (edges) => {
    for (let i = 0; i < this.state.cggTab["edges"].length; i++) {
      edges.push({
        from: this.state.cggTab["edges"][i]["from"],
        to: this.state.cggTab["edges"][i]["to"],
        arrows: {
          to: {
            type: cgginfo.symbols[this.state.cggTab["edges"][i]["link"].toLowerCase()],
          },
        },
      });
    }
  };

  componentDidMount() {
    if (this.props.project === "simple" && !this.state.cgg) {
      //&& this.isDefaultGoals(this.props.goals)
      //this.callCGG("auto")
      this.setState({ cgg: true });
    }
  }

  render() {
    let that = this;
    let nodesArray = [];
    let edgesArray = [];

    if (this.state.cgg) {
      // the cgg state is a boolean, true if the cgg has been built
      // if you don't see how to fill the graph, there is an example in storage/crome/cgg.json
      if (!(this.props.project === "simple")) {
        this.addGoalAlreadyHere(that.props, nodesArray);

        this.addCombinedGoal(nodesArray);

        this.addEdges(edgesArray);
      }
    }

    /* DEFINE CGG PARAMETERS PASSED TO CGG COMPONENT */
    let graph = {
      nodes: nodesArray,
      edges: edgesArray,
    };

    if (this.props.project === "simple") {
      graph = default_cgg;
      nodesArray = graph.nodes;
      edgesArray = graph.edges;
    }

    return (
      <>
        <GetCGG
          session={this.props.id}
          project={this.props.project}
          trigger={this.state.triggerCGG}
          setTrigger={this.setTriggerCGG}
          setGoalsTrigger={this.setGoalsTrigger}
        />
        <SocketBuildCGG
          operator={this.state.operator}
          goals={this.props.goals}
          selectedGoals={this.state.selectedGoals}
          library={this.state.selectedLibrary}
          trigger={this.state.triggerOperation}
          setTrigger={this.setTriggerOperation}
        />

        {this.state.cgg && (
          <>
            <div className="relative flex flex-auto mt-4">
              <div className="w-11/12">
                <CGG
                  active={this.props.active}
                  graph={graph}
                  size="725px"
                  goals={this.props.goals}
                  patterns={this.props.patterns}
                  nodesArray={nodesArray}
                  edgesArray={edgesArray}
                />
              </div>
              <BuildCGG
                callCGG={this.callCGG}
                clickOnGoal2={this.clickOnGoal2}
                goals={this.props.goals}
              />
              <LegendCGG />
            </div>
          </>
        )}
        {!this.state.cgg && (
          <>
            <div className="flex flex-auto mt-4">
              <div
                className="bg-lightBlue-500 bg-opacity-25 w-75 shadow-md flex items-center justify-center"
                style={{ width: 750, height: 725 }}
              >
                {this.state.triggerCGG && (
                  <ReactLoading type="spinningBubbles" color="#fff" />
                )}
              </div>
              <BuildCGG
                callCGG={this.callCGG}
                clickOnGoal2={this.clickOnGoal2}
                goals={this.props.goals}
              />
            </div>
          </>
        )}
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
      </>
    );
  }
}
