import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import "../../assets/styles/custom.css";
import GoalView from "../../components/Custom/GoalView";
import AddButton from "../../components/Custom/AddButton";
import { Modal } from "reactstrap";
import GoalEdit from "../../components/Crome/GoalEdit";
import defaultgoal from "_texts/defaultgoal.js";
import goaleditinfo from "_texts/goaleditinfo.js";
import SocketIoPatterns from "../../components/Custom/Socket/GetPatterns";
import SocketSaveGoals from "../../components/Custom/Socket/SaveGoals";
import SocketCheckGoals from "../../components/Custom/Socket/CheckGoals";
import { saveAs } from "file-saver";
import UploadButton from "../../components/Custom/UploadButton";
import goalmodelinginfo from "../../_texts/goalmodelinginfo";
import SocketIoGoals from "../../components/Custom/Socket/GetGoals";
import ElementsButton from "../../components/Elements/Button";

export default class GoalModeling extends React.Component {
  state = {
    modalClassic: false,
    goals: [],
    receivedGoals: [],
    editedGoals: [],
    currentGoalIndex: 0,
    numChildren: 0,
    patterns: [],
    saveTrigger: false,
    deletionIndex: null,
  };

  /**
   * Download a goal
   * @param index
   */
  downloadGoal = (index) => {
    const goal = {
      context: this.state.goals[index].context,
      contract: this.state.goals[index].contract,
      description: this.state.goals[index].description,
      name: this.state.goals[index].name,
    };
    const json = JSON.stringify(goal, null, "\t");
    const blob = new Blob([json], { type: "text/json;charset=utf-8" });
    const file = new File([blob], this.state.goals[index].name + ".json");
    saveAs(file);
  };

  /**
   * Download all goals in the project
   */
  downloadAllGoals = () => {
    if (this.state.goals.length === 0) return;
    let goals = [];
    let goal;
    for (let i = 0; i < this.state.goals.length; i++) {
      goal = {
        context: this.state.goals[i].context,
        contract: this.state.goals[i].contract,
        description: this.state.goals[i].description,
        name: this.state.goals[i].name,
      };
      goals.push(goal);
    }
    const json = JSON.stringify(goals, null, "\t");
    const blob = new Blob([json], { type: "text/json;charset=utf-8" });
    const file = new File([blob], this.props.project + "_goals.json");
    saveAs(file);
  };

  /**
   * Verify if a string is convertible to json
   * @param str
   * @returns {boolean}
   */
  isJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  /**
   * Verify if an upload goal is part of the project
   * @param goal
   * @returns {boolean}
   */
  goalPartOfProject = (goal) => {
    if (goal.context.hasOwnProperty("world_values")) {
      for (let i = 0; i < goal.context.world_values.length; i++) {
        if (!this.props.listOfWorldVariables[3].includes(goal.context.world_values[i]))
          return false;
      }
    } else return false;
    if (goal.contract.hasOwnProperty("assumptions")) {
      if (
        goal.contract.assumptions[0] &&
        goal.contract.assumptions[0].hasOwnProperty("world_values")
      ) {
        for (let i = 0; i < goal.contract.assumptions.length; i++) {
          if (goal.contract.assumptions[0].world_values[i][0]) {
            if (
              !(
                this.props.listOfWorldVariables[0].includes(
                  goal.contract.assumptions[0].world_values[i][0]
                ) ||
                this.props.listOfWorldVariables[1].includes(
                  goal.contract.assumptions[0].world_values[i][0]
                ) ||
                this.props.listOfWorldVariables[2].includes(
                  goal.contract.assumptions[0].world_values[i][0]
                )
              )
            )
              return false;
          }
        }
      }
    } else return false;
    if (goal.contract.hasOwnProperty("guarantees")) {
      if (
        goal.contract.guarantees[0] &&
        goal.contract.guarantees[0].hasOwnProperty("world_values")
      ) {
        for (let i = 0; i < goal.contract.guarantees.length; i++) {
          if (goal.contract.guarantees[0].world_values[i][0]) {
            if (
              !(
                this.props.listOfWorldVariables[0].includes(
                  goal.contract.guarantees[0].world_values[i][0]
                ) ||
                this.props.listOfWorldVariables[1].includes(
                  goal.contract.guarantees[0].world_values[i][0]
                ) ||
                this.props.listOfWorldVariables[2].includes(
                  goal.contract.guarantees[0].world_values[i][0]
                )
              )
            )
              return false;
          }
        }
      }
    } else return false;
    return true;
  };

  /**
   * Upload goals
   * @param json
   */
  uploadGoals = (json) => {
    if (this.isJsonString(json)) {
      const goals = JSON.parse(json);
      if (goals.length) {
        goals.push(defaultgoal);
        for (let i = 0; i < goals.length; i++) {
          setTimeout(() => {
            this.uploadGoal(goals[i]);
          }, 2000);
        }
      } else {
        this.uploadGoal(goals);
      }
    }
  };

  /**
   * Upload one goal
   * @param goal
   */
  uploadGoal = (goal) => {
    if (
      goal.hasOwnProperty("context") &&
      goal.hasOwnProperty("contract") &&
      goal.hasOwnProperty("name") &&
      goal.hasOwnProperty("description")
    ) {
      if (this.goalPartOfProject(goal)) {
        this.saveCurrentGoal(goal);
        let tmpGoals = JSON.parse(JSON.stringify(this.state.goals));
        tmpGoals.push(JSON.parse(JSON.stringify(goal)));
        this.setState({
          currentGoalIndex: tmpGoals.length - 1,
          editedGoals: tmpGoals,
        });
      }
    }
  };

  render() {
    const children = [];
    for (let i = 0; i < this.state.numChildren; i += 1) {
      children.push(
        <GoalView
          key={i}
          number={i}
          title={this.state.receivedGoals[i].name}
          description={this.state.receivedGoals[i].description}
          contextChecked={this.state.receivedGoals[i].context}
          context={this.props.listOfWorldVariables[3]}
          contract={this.state.receivedGoals[i].contract}
          patterns={this.state.patterns}
          statIconName={this.props.info.goalComponent.editIconName}
          statDownloadIconName={this.props.info.goalComponent.downloadIconName}
          statSecondIconName={this.props.info.goalComponent.deleteIconName}
          statIconColor={this.props.info.goalComponent.iconColor}
          modify={this.setModalClassic}
          download={this.downloadGoal}
          delete={this.deleteGoal}
        />
      );
    }

    return (
      <>
        <SocketCheckGoals
          projectId={this.props.project}
          triggerGoalsChecked={this.props.triggerGoalsChecked}
          swapTriggerGoalsChecked={this.props.swapTriggerGoalsChecked}
        />
        <SocketIoGoals
          projectId={this.props.project}
          session={this.props.id}
          updateGoals={this.getGoals}
          goals={this.state.editedGoals}
          deleteIndex={this.state.deletionIndex}
          triggerGoals={this.props.triggerGetGoals}
          deleteTrigger={this.deleteTrigger}
          switchWorld={this.switchWorld}
          contracts={this.props.contracts}
        />
        <SocketIoPatterns patterns={this.getPatterns} />
        <SocketSaveGoals
          projectId={this.props.project}
          index={this.state.currentGoalIndex}
          goals={this.state.editedGoals}
          contracts={this.props.contracts}
          triggerSave={this.state.saveTrigger}
          toggleSaveTrigger={this.toggleSaveTrigger}
          toggleGetTrigger={this.props.toggleGetTrigger}
          switchWorld={this.switchWorld}
        />
        <ParentComponent
          uploadGoal={this.uploadGoals}
          addChild={this.onAddChild}
          contracts={this.props.contracts}
          downloadGoals={this.downloadAllGoals}
        >
          {children}
        </ParentComponent>
        <Modal
          isOpen={this.state.modalClassic}
          toggle={() => this.setModalClassic(false)}
          className={
            "custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"
          }
        >
          <GoalEdit
            tmpedited={this.state.editedGoals}
            tmpindex={this.state.currentGoalIndex}
            goal={this.state.editedGoals[this.state.currentGoalIndex]}
            listOfWorldVariables={this.props.listOfWorldVariables}
            patterns={this.state.patterns}
            edit={this.editCurrentGoal}
            save={this.saveCurrentGoal}
            close={() => this.setModalClassic(false)}
            {...goaleditinfo}
          />
        </Modal>
      </>
    );
  }

  onAddChild = () => {
    let tmpGoals = JSON.parse(JSON.stringify(this.state.goals));
    tmpGoals.push(JSON.parse(JSON.stringify(defaultgoal)));

    this.setState(
      {
        editedGoals: tmpGoals,
      },
      () => this.setModalClassic(true, tmpGoals.length - 1)
    );
  };

  setModalClassic = (bool, key = -1) => {
    this.setState({
      modalClassic: bool,
      //editedGoals: this.state.goals
    });
    if (key !== -1) {
      this.setState({
        currentGoalIndex: key,
      });
    }
  };

  deleteGoal = (key) => {
    this.setState({
      deletionIndex: key,
    });
  };

  editCurrentGoal = (newGoal) => {
    this.setState((state) => {
      const editedGoals = state.editedGoals.map((item, j) => {
        if (j === this.state.currentGoalIndex) {
          return newGoal;
        } else {
          return item;
        }
      });
      return {
        editedGoals,
      };
    });
  };

  saveCurrentGoal = (newGoal) => {
    console.log(newGoal);
    this.setState(
      (state) => {
        const goals = state.goals.map((item, j) => {
          if (j === this.state.currentGoalIndex) {
            return newGoal;
          } else {
            return item;
          }
        });
        return {
          goals,
        };
      },
      () => this.toggleSaveTrigger(true)
    );
    this.setModalClassic(false);
  };

  getGoals = (list) => {
    let tmpArray = [];
    let allGoals = [];
    for (let i = 0; i < list.length; i++) {
      let parsedGoal = JSON.parse(list[i]);
      if (!parsedGoal.hasOwnProperty("group") || parsedGoal.group !== "new") {
        tmpArray.push(parsedGoal);
      }
      allGoals.push(parsedGoal);
    }
    this.setState({
      goals: tmpArray,
      receivedGoals: tmpArray,
      editedGoals: tmpArray,
      numChildren: tmpArray.length,
    });
    this.props.setGoals(allGoals);
  };

  getPatterns = (list) => {
    this.setState(
      {
        patterns: JSON.parse(list),
      },
      () => this.props.setPatterns(this.state.patterns)
    );
  };

  toggleSaveTrigger = (bool) => {
    this.setState({
      saveTrigger: bool,
    });
  };

  deleteTrigger = () => {
    this.setState(
      {
        deletionIndex: null,
      },
      () => this.props.toggleGetTrigger()
    );
  };

  switchWorld = (id) => {
    if (!this.props.contracts) {
      this.props.setProject(id);
      this.props.toggleGetTrigger();
    }
  };
}

GoalModeling.defaultProps = {
  contract: "",
};

const ParentComponent = (props) => (
  <section className="relative">
    <UploadButton
      size="worldModeling"
      upload={props.uploadGoal}
      color={goalmodelinginfo.info.buttons.uploadGoal.color}
      text={goalmodelinginfo.info.buttons.uploadGoal.text}
      icon={goalmodelinginfo.info.buttons.uploadGoal.icon}
      contracts={props.contracts}
    />
    <ElementsButton
      contracts={props.contracts}
      size="worldModeling"
      color={goalmodelinginfo.info.buttons.downloadGoals.color}
      outline={true}
      onClick={props.downloadGoals}
    >
      <i className={goalmodelinginfo.info.buttons.downloadGoals.icon + "mr-2"} />
      {goalmodelinginfo.info.buttons.downloadGoals.text}
    </ElementsButton>

    <div className="mx-auto w-full">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="mt-2"></div>
        </div>
        <div
          onClick={props.addChild}
          className="w-full lg:w-6/12 xl:w-3/12 ml-4 mr-4 px-4 relative flex flex-col min-w-0 break-words bg-lightBlue-600 rounded mb-6 xl:mb-0 shadow-lg cursor-pointer opacity-1 transform duration-300 transition-all ease-in-out"
        >
          <AddButton
            statText="Add a Goal"
            statIconName="fas fa-plus-square"
            statIconColor="text-lightBlue-700"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">{props.children}</div>
    </div>
  </section>
);
