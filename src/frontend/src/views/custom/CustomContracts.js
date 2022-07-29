import React from "react";
import CustomHeader from "../../components/Crome/CustomHeader";
import customcontractsheaderscards from "../../_texts/customcontractsheaderscards";
import customcontractsinfo from "../../_texts/customcontractsinfo";
import GoalModeling from "./GoalModeling";
import goalmodelinginfo from "../../_texts/goalmodelinginfo";
import SocketIoContracts from "../../components/Custom/Socket/GetContracts";
import GetContractCGG from "../../components/Custom/Socket/GetContractCGG";
import cgginfo from "../../_texts/cgginfo";
import CGG from "../../components/Crome/CGG";
import CustomContractsDescription from "../../components/Custom/CustomContractsDescription";
import ElementsButton from "../../components/Elements/Button";
import { Modal } from "reactstrap";
import ContractsChoiceActiveGoals from "../../components/Custom/ContractsChoiceActiveGoals";
import customfooter from "../../_texts/customfooter";
import CustomFooter from "../../components/Custom/CustomFooter";

export default class CustomContracts extends React.Component {
  state = {
    id: "contracts",
    worlds: [],
    headerStates: [true, false, false, false, false, false],
    activeHeaderIndex: 0,
    project: "conjunction",
    listOfWorldVariables: [[], [], [], []],
    triggerGetContract: true,
    triggerCGG: false,
    goals: [],
    activeGoals: [],
    modalChoiceGoal: false,
    cgg: false,
    cggTab: null,
    projectAdded: false,
    triggerGoals: false,
    triggerGoalsChecked: false,
    patterns: [],
  };

  setTriggerGetContract = (bool) => {
    this.setState({
      triggerGetContract: bool,
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
      triggerCGG: false,
      cgg: true,
      triggerGoals: !this.state.triggerGoals,
    });
  };

  swapTriggerGoalsChecked = (bool) => {
    this.setState({
      triggerGoalsChecked: bool,
    });
  };

  onSelectCustomHeader = (activeHeaderIndex, clickable, statTitle) => {
    if (!this.state.headerStates[activeHeaderIndex] && clickable) {
      let newHeaderStates = Array(this.state.headerStates.length).fill(false);
      newHeaderStates[activeHeaderIndex] = true;

      this.setState({
        activeHeaderIndex: activeHeaderIndex,
        project: statTitle,
        headerStates: newHeaderStates,
        cgg: false,
      });
      this.displayWorldGoal(activeHeaderIndex);
    }
  };

  getListOfWorldVariables(world) {
    let worldVariables = [[], [], [], []];
    if (world !== undefined) {
      for (let i = 0; i < world.grid.locations.length; i++) {
        worldVariables[0].push(world.grid.locations[i].id);
      }
      for (let i = 0; i < world.actions.length; i++) {
        worldVariables[1].push(world.actions[i].name);
      }
      for (let i = 0; i < world.sensors.length; i++) {
        worldVariables[2].push(world.sensors[i].name);
      }
      for (let i = 0; i < world.context.length; i++) {
        worldVariables[3].push(world.context[i].name);
      }
    }
    return worldVariables;
  }

  settingGoals = (goals) => {
    this.setState({
      goals: goals,
    });
  };

  toggleGetTrigger = () => {
    this.setState({
      triggerGoals: !this.state.triggerGoals,
      cgg: false,
    });
  };

  setPatterns = () => {
    this.setState({ patterns: this.patterns });
  };

  displayWorldGoal = (index) => {
    this.setState({
      listOfWorldVariables: this.getListOfWorldVariables(this.state.worlds[index]),
    });
  };

  getWorlds = (list_of_projects) => {
    let worlds = [];

    for (let i = 0; i < list_of_projects.length; i++) {
      for (let j = 0; j < list_of_projects[i].length; j++) {
        if (list_of_projects[i][j]["title"] === "environment") {
          worlds.push(JSON.parse(list_of_projects[i][j]["content"]));
        }
      }
    }
    this.setState({
      worlds: worlds,
    });

    this.displayWorldGoal(this.state.activeHeaderIndex);
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

  addGoalAlreadyHere = (nodes) => {
    for (let i = 0; i < this.state.goals.length; i++) {
      nodes.push({ id: this.state.goals[i].id, label: this.state.goals[i].name });
      nodes[nodes.length - 1].group = this.state.goals[i].hasOwnProperty("group")
        ? this.state.goals[i].group
        : "input";
    }
  };

  setModalGoal = (bool) => {
    this.setState({
      modalChoiceGoal: bool,
    });
  };
  validate = (selectedGoals) => {
    this.setState({
      activeGoals: selectedGoals,
      modalChoiceGoal: false,
      triggerCGG: true,
    });
  };

  render() {
    let nodesArray = [];
    let edgesArray = [];
    if (this.state.cgg) {
      this.addGoalAlreadyHere(nodesArray);
      this.addCombinedGoal(nodesArray);
      this.addEdges(edgesArray);
    }

    let graph = {
      nodes: nodesArray,
      edges: edgesArray,
    };

    return (
      <>
        <GetContractCGG
          session={this.state.id}
          project={this.state.project}
          goals={this.state.activeGoals}
          trigger={this.state.triggerCGG}
          setTrigger={this.setTriggerCGG}
          setGoalsTrigger={this.setGoalsTrigger}
        />
        <SocketIoContracts
          trigger={this.state.triggerGetContract}
          setTrigger={this.setTriggerGetContract}
          worlds={this.getWorlds}
        />
        <CustomHeader
          {...customcontractsheaderscards}
          color={"purple"}
          states={this.state.headerStates}
          clickable={true}
          onSelectCustomHeader={this.onSelectCustomHeader}
        />
        <div className="pb-20">
          <div className="flex justify-center my-3 mx-60">
            <div className="flex-col px-3 pb-5 mx-3 relative min-w-0 break-words bg-white rounded shadow-md w-full">
              <div className="flex m-3 fs-5 text-blueGray-500 uppercase font-bold justify-center ">
                {customcontractsinfo.info.texts.cgg}
              </div>

              {!this.state.cgg && (
                <>
                  <div className="flex justify-center min-h-full">
                    <div className="flex flex-col justify-center pb-5">
                      <ElementsButton
                        size="lg"
                        color="facebook"
                        outline={false}
                        onClick={() => this.setModalGoal(true)}
                      >
                        Choose your goals
                      </ElementsButton>
                    </div>
                  </div>
                  <Modal
                    isOpen={this.state.modalChoiceGoal}
                    toggle={() => this.setModalGoal(false)}
                    size="sm"
                    className={
                      "custom-modal-dialog c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"
                    }
                  >
                    <ContractsChoiceActiveGoals
                      settingActiveGoals={this.settingActiveGoals}
                      goals={this.state.goals}
                      validate={this.validate}
                      operationName={this.state.project}
                    />
                  </Modal>
                </>
              )}
              {this.state.cgg && this.state.activeGoals && (
                <>
                  <div className="relative flex flex-auto mt-4 m-auto">
                    <div className="mx-4 w-100">
                      <CGG
                        active={true}
                        graph={graph}
                        size={"350px"}
                        goals={this.state.activeGoals}
                        nodesArray={nodesArray}
                        edgesArray={edgesArray}
                        patterns={this.state.patterns}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex-col px-3 pb-5 mx-3 relative min-w-0 break-words bg-white rounded shadow-md w-full overflow-scroll">
              <CustomContractsDescription />
            </div>
          </div>
          <div className="mx-64 mb-12 p-4 bg-white rounded shadow-md">
            <GoalModeling
              {...goalmodelinginfo}
              id={this.state.id}
              project={this.state.project}
              setGoals={this.settingGoals}
              setPatterns={this.setPatterns}
              triggerGetGoals={this.state.triggerGoals}
              toggleGetTrigger={this.toggleGetTrigger}
              listOfWorldVariables={this.state.listOfWorldVariables}
              triggerGoalsChecked={this.state.triggerGoalsChecked}
              swapTriggerGoalsChecked={this.swapTriggerGoalsChecked}
              contracts={true}
            />
          </div>
        </div>
        <CustomFooter {...customfooter} />
      </>
    );
  }
}
