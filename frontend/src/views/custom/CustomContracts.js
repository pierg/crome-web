import React from 'react';
import CustomHeader from "../../components/Crome/CustomHeader";
import customcontractsheaderscards from "../../_texts/custom/customcontractsheaderscards";
import customcontractsinfo from "../../_texts/custom/customcontractsinfo";
import GoalModeling from "./GoalModeling";
import goalmodelinginfo from "../../_texts/custom/goalmodelinginfo";
import SocketIoContracts from "../../components/Custom/Examples/GetContracts";


export default class CustomContracts extends React.Component {
    state = {
        id : "contracts",
        worlds: [],
        headerNames : ["conjunction", "composition", "refinement", "quotient", "merging", "separation"],
        headerStates: [true, false, false, false, false, false],
        activeHeaderIndex : 0,
        project: "conjunction",
        listOfWorldVariables: [[], [], [], []],
        triggerGetContract : true,
        goals : [],
        //not sure about initialized value

        projectAdded: false,
        setTriggerGoals: false,

        // useless variables
        uploadConfirmation: false,
        patterns: [],
        //projectAdded :
    }

    setTriggerGetContract = (bool) => {
        this.setState({
            triggerGetContract: bool
        })
    }

    handleHeaderStates = (activeHeaderIndex) => {
        if (!this.state.headerStates[activeHeaderIndex]) {
            let newHeaderStates = Array(this.state.headerStates.length).fill(false);
            newHeaderStates[activeHeaderIndex] = true
            this.setState({
                headerStates: newHeaderStates,
                activeHeaderIndex : activeHeaderIndex,
                project : this.state.headerNames[activeHeaderIndex]
            })
            this.displayWorldGoal(activeHeaderIndex)
        }
    }
    setUploadConfirmation = (bool) => {
        this.setState({
            uploadConfirmation: bool
        })
    }

    getListOfWorldVariables(world) {
        let worldVariables = [[], [], [], []]
        for (let i = 0; i < world.grid.locations.length; i++) {
            worldVariables[0].push(world.grid.locations[i].id)
        }
        for (let i = 0; i < world.actions.length; i++) {
            worldVariables[1].push(world.actions[i].name)
        }
        for (let i = 0; i < world.sensors.length; i++) {
            worldVariables[2].push(world.sensors[i].name)
        }
        for (let i = 0; i < world.context.length; i++) {
            worldVariables[3].push(world.context[i].name)
        }
        return worldVariables
    }

    settingGoals = (goals) => {
        // console.log("goals in settingGoals in CustomContracts")
        // console.log(goals)
        this.setState({goals: goals})
    }

    addProjectFromGoalModeling(projectId) {
        // this.setState({project: projectId})
        // this.setState({projectAdded: !this.projectAdded})
    }

    toggleGetTrigger = () => {
        this.setState({setTriggerGoals: !this.setTriggerGoals})
    }
    setPatterns = () => {
        this.setState({patterns: this.patterns})
    }

    displayWorldGoal = (index) => {
        this.setState({
            listOfWorldVariables : this.getListOfWorldVariables(this.state.worlds[index]),
        })
        // this.props.setProject(this.state.worlds[index].project_id)
        // this.props.setWorld({"environment": this.state.worlds[index], "info": this.state.info[index]})
    }

    getWorlds = (list_of_projects) => {
        // console.log(list_of_projects)
        let worlds = []

        for (let i = 0; i < list_of_projects.length; i++) {
            for (let j = 0; j < list_of_projects[i].length; j++) {
                if (list_of_projects[i][j]["title"] === "environment") {
                    worlds.push(JSON.parse(list_of_projects[i][j]["content"]))
                }
            }
        }
        this.setState({
            worlds: worlds,
        })

        this.displayWorldGoal(this.state.activeHeaderIndex)

        // console.log("this.state.worlds CustomContracts")
        // console.log(this.state.worlds)
    }


    render() {
        return (

            <>

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
                    onSelectCustomHeader={this.handleHeaderStates}
                />

                <div className="flex justify-center my-3 mx-60">

                    <div className="px-3 pb-5 mx-3 relative flex min-w-0 justify-center break-words bg-white rounded shadow-md w-full">
                        <div className=" mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                            {customcontractsinfo.info.texts.goals}
                        </div>
                    </div>

                    <div className="px-3 pb-5 mx-3 relative flex min-w-0 justify-center break-words bg-white rounded shadow-md w-full">
                        <div className=" mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                            {customcontractsinfo.info.texts.description}
                        </div>
                    </div>

                </div>
                <div className="mx-64 pb-12 ">
                <GoalModeling
                    {...goalmodelinginfo}
                    id={this.state.id}
                    project={this.state.project}
                    setGoals={this.settingGoals}
                    setPatterns={this.setPatterns}
                    listOfWorldVariables={this.state.listOfWorldVariables}
                    setProject={(project) =>
                        this.addProjectFromGoalModeling(project)
                    }
                    toggleGetTrigger={this.toggleGetTrigger}
                    contracts={true}
                />
            </div>
            </>


        )
    }
}
