import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/styles/tailwind.css";
import "../../assets/styles/custom.css";
import GoalView from "../../components/Custom/GoalView";
import AddButton from "../../components/Custom/AddButton";
import {Modal} from "reactstrap";
import GoalEdit from "../../components/Crome/GoalEdit";
import SocketIoGaols from "../../components/Custom/Examples/GetGoals";
import defaultgoal from "_texts/custom/defaultgoal.js";
import goaleditinfo from "_texts/custom/goaleditinfo.js";
import SocketIoPatterns from "../../components/Custom/Examples/GetPatterns";
import SocketSaveGoals from "../../components/Custom/Examples/SaveGoals";
import SocketCheckGoals from "../../components/Custom/Examples/CheckGoals";



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
        deletionIndex: null
    }

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
                    statSecondIconName={this.props.info.goalComponent.deleteIconName}
                    statIconColor={this.props.info.goalComponent.iconColor}
                    modify={this.setModalClassic}
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
                <SocketIoGaols
                    projectId={this.props.project}
                    session={this.props.id}
                    updateGoals={this.getGoals}
                    deleteIndex={this.state.deletionIndex}
                    triggerGoals={this.props.triggerGetGoals}
                    deleteTrigger={this.deleteTrigger}
                    switchWorld={this.switchWorld}
                />
                <SocketIoPatterns
                    patterns={this.getPatterns}
                />
                <SocketSaveGoals
                    projectId={this.props.project}
                    index={this.state.currentGoalIndex}
                    goals={this.state.editedGoals}
                    triggerSave={this.state.saveTrigger}
                    toggleSaveTrigger={this.toggleSaveTrigger}
                    toggleGetTrigger={this.props.toggleGetTrigger}
                    switchWorld={this.switchWorld}
                />
                <ParentComponent addChild={this.onAddChild}>
                    {children}
                </ParentComponent>
                <Modal
                    isOpen={this.state.modalClassic}
                    toggle={() => this.setModalClassic(false)}
                    className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
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
        let tmpGoals = JSON.parse(JSON.stringify(this.state.goals))
        tmpGoals.push(JSON.parse(JSON.stringify(defaultgoal)))

        this.setState({
            editedGoals: tmpGoals,
        },() => this.setModalClassic(true, tmpGoals.length - 1))
    }

    setModalClassic = (bool, key = -1) => {
        this.setState({
            modalClassic: bool,
            //editedGoals: this.state.goals
        })
        if (key !== -1) {
            this.setState({
                currentGoalIndex: key
            })
        }
    }

    deleteGoal = (key) => {
        this.setState({
            deletionIndex: key
        })
    }

    editCurrentGoal = (newGoal) => {
        this.setState( state => {
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
    }

    saveCurrentGoal = (newGoal) => {
        this.setState( state => {
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
        }, () => this.toggleSaveTrigger(true));
        this.setModalClassic(false)
    }

    getGoals = (list) => {
        let tmpArray = []
        let allGoals = []
        for (let i=0; i<list.length; i++) {
            let parsedGoal = JSON.parse(list[i])
            if (!parsedGoal.hasOwnProperty("group") || parsedGoal.group !== "new") {
                tmpArray.push(parsedGoal)
            }
            allGoals.push(parsedGoal)
        }
        this.setState({
            goals: tmpArray,
            receivedGoals: tmpArray,
            editedGoals: tmpArray,
            numChildren: tmpArray.length
        })
        this.props.setGoals(allGoals)
    }

    getPatterns = (list) => {
        this.setState({
            patterns: JSON.parse(list)
        }, () => this.props.setPatterns(this.state.patterns))
    }

    toggleSaveTrigger = (bool) => {
        this.setState({
            saveTrigger: bool
        })
    }

    deleteTrigger = () => {
        this.setState({
            deletionIndex: null
        }, () => this.props.toggleGetTrigger())
    }

    switchWorld = (id) => {
        this.props.setProject(id)
        this.props.toggleGetTrigger()
    }
}

GoalModeling.defaultProps = {
  contract : ""
};

const ParentComponent = props => (
    <section className="mt-5 mt-xl-2 pt-2 relative">
        <div className="px-4 md:px-10 mx-auto w-full">
            <div>
                <div className="flex justify-center">
                    <div onClick={props.addChild} className="w-full lg:w-6/12 xl:w-3/12 mt-8 ml-4 mr-4 px-4 relative flex flex-col min-w-0 break-words bg-lightBlue-600 rounded mb-6 xl:mb-0 shadow-lg cursor-pointer opacity-1 transform duration-300 transition-all ease-in-out">
                        <AddButton
                            statText="Add a Goal"
                            statIconName="fas fa-plus-square"
                            statIconColor="text-lightBlue-700"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {props.children}
                </div>
            </div>
        </div>
    </section>
);
