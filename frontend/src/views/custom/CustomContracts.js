import React from 'react';
import CustomHeader from "../../components/Crome/CustomHeader";
import customcontractsheaderscards from "../../_texts/custom/customcontractsheaderscards";
import customcontractsinfo from "../../_texts/custom/customcontractsinfo";
import GoalModeling from "./GoalModeling";
import goalmodelinginfo from "../../_texts/custom/goalmodelinginfo";
import SocketIoContracts from "../../components/Custom/Examples/GetContracts";
import GetContractCGG from "../../components/Custom/Examples/GetContractCGG";
import cgginfo from "../../_texts/custom/cgginfo";
import Graph from "react-graph-vis";

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
        triggerCGG : false,
        goals : [],
        cgg : false,
        cggTab : null,
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

    setTriggerCGG = (bool) => {
        this.setState({
            triggerCGG: bool
        })
    }

    setGoalsTrigger = (contentJSON) => {
        this.setState({
            cggTab: contentJSON,
            triggerCGG: false,
            cgg: true,
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
        //console.log(goals)
        this.setState({
            goals: goals,
            triggerCGG: true
        })
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

    addCombinedGoal = (nodes) => {
        let inter = 0
        for(let i=0; i<this.state.cggTab['nodes'].length; i++) {
            for(let j=0; j<nodes.length; j++) {
                if(nodes[j]["id"] === this.state.cggTab['nodes'][i]['id']) {
                    inter = 1
                }
            }

            if(inter === 0) {
                nodes.push({"id": this.state.cggTab['nodes'][i]['id'], "label": "goal"+i})
            }

            inter = 0
        }
    }

    addEdges = (edges) => {
        for(let i=0; i<this.state.cggTab['edges'].length; i++) {
            edges.push({"from": this.state.cggTab['edges'][i]["from"], "to": this.state.cggTab['edges'][i]["to"], "arrows": {to: {type: cgginfo.symbols[this.state.cggTab['edges'][i]["link"].toLowerCase()]}}})
        }

    }

    addGoalAlreadyHere = (nodes) => {
        for (let i=0; i<this.state.goals.length; i++) {
            nodes.push({"id": this.state.goals[i].id, "label": this.state.goals[i].name})
            nodes[nodes.length - 1].group = this.state.goals[i].hasOwnProperty("group") ? this.state.goals[i].group : "input"
        }
    }


    render() {
        let nodesArray = []
        let edgesArray = []


        if (this.state.cgg) {
            console.log(this.state.cggTab)
            this.addGoalAlreadyHere(nodesArray)
            this.addCombinedGoal(nodesArray)
            this.addEdges(edgesArray)
        }

        let graph = {
            nodes: nodesArray,
            edges: edgesArray
        }

        console.log(graph)

        const options = {
            layout: {
                improvedLayout: true,
                hierarchical: {
                    enabled : true,
                    sortMethod: 'directed',
                    direction: 'DU',
                    shakeTowards: 'roots'
                }

            },
            edges: {
                color: "#000000",
                arrows: {
                    to: {
                        scaleFactor: 1
                    }
                }
            },
            nodes: {
                shape: "box"
            },
            groups: {
                input: {
                    color: {
                        border: "#00bb00",
                        background: "#ffffff",
                        highlight: {
                            border: "#88bb88",
                            background: "#ccccee"
                        }
                    }
                },
                new: {
                    color: {
                        border: "#00bb00",
                        background: "#00bb00",
                        highlight: {
                            border: "#88bb88",
                            background: "#bbffbb"
                        }
                    }
                },
                library: {
                    color: {
                        border: "#ffbb00",
                        background: "#ffffff",
                        highlight: {
                            border: "#ffbb88",
                            background: "#eeeecc"
                        }
                    }
                }
            },
            height: "350px",
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

        return (
            <>
                <GetContractCGG
                    session={this.state.id}
                    project={this.state.project}
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
                    onSelectCustomHeader={this.handleHeaderStates}
                />
                <div className="pb-12">
                    <div className="flex justify-center my-3 mx-60">

                        <div className="px-3 pb-5 mx-3 relative flex flex-col min-w-0 justify-center break-words bg-white rounded shadow-md w-full">
                            <div className=" mt-2 fs-5 text-center text-blueGray-500 uppercase font-bold">
                                {customcontractsinfo.info.texts.goals}
                            </div>
                            {this.state.cgg && (<>
                                <div className="relative flex flex-auto mt-4 m-auto">
                                    <div className="bg-lightBlue-500 bg-opacity-25 w-100 shadow-md mx-4">
                                        <Graph
                                            graph={graph}
                                            options={options}
                                        />
                                    </div>
                                </div>
                                </>)}
                        </div>

                        <div className="px-3 pb-5 mx-3 relative flex min-w-0 justify-center break-words bg-white rounded shadow-md w-full">
                            <div className=" mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                {customcontractsinfo.info.texts.description}
                            </div>
                        </div>

                    </div>
                <div className="mx-64 mb-12 p-4 bg-white rounded shadow-md">
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
                    </div>
            </>


        )
    }
}
