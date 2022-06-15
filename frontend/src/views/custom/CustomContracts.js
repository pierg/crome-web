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
import GoalModalView from "../../components/Custom/GoalModalView";
import goaleditinfo from "../../_texts/custom/goaleditinfo";
import {Modal} from "reactstrap";
import NodeModalView from "../../components/Custom/NodeModalView";

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
        projectAdded: false,
        setTriggerGoals: false,
        uploadConfirmation: false,
        patterns: [],
        nodeLabel: "",
        modalGoal: false,
        modalNode : false,
        currentGoalIndex: 0,
        nodeChildren: "",
        nodeParent: ""
    }

    setCurrentGoalIndex = (id) => {
        this.setState({
            currentGoalIndex: id
        })
    }

    setNodeChildren = (str) => {
        this.setState({
            nodeChildren : str
        })
    }

    setNodeParent = (str) => {
        this.setState({
            nodeParent : str
        })
    }

    setModalNode = (bool) => {
        this.setState({
            modalNode : bool
        })
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

    setModalGoal = (bool) => {
        this.setState({
            modalGoal: bool
        })
    }

    setNodeLabel = (str) => {
        this.setState({
            nodeLabel: str
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

    findGoalIndexById = (id) => {
        if (this.state.goals !== null) {
            for (let i = 0; i < this.state.goals.length; i++) {
                if (this.state.goals[i].id === id) {
                    return {"index": i, "goal": this.state.goals[i]}
                }
            }
        }
    }

    findNodesIndexById = (nodesArray,id) => {
        if (nodesArray !== null) {
            for (let i = 0; i < nodesArray.length; i++) {
                if (nodesArray[i].id === id) {
                    return nodesArray[i].label
                }
            }
        }
    }

    /**
     * Find the children of a node and the type of operations they are linked with
     * @param id
     * @returns {string}
     */
    getNodeChildren = (nodesArray,id) => {
        let str = ""
        let goals1 = id.split("/\\")
        let goals2 = id.split("**")
        let goals3 = id.split("||")
        if (goals1.length===2) {
            str+="a conjunction link between "
            str+="<strong>"+this.findNodesIndexById(nodesArray,goals1[0])+"</strong> and "
            str+="<strong>"+this.findNodesIndexById(nodesArray,goals1[1])+"</strong>"
        } else if(goals2.length===2) {
            str+="a refinement link between "
            str+="<strong>"+this.findNodesIndexById(nodesArray,goals2[0])+"</strong> and "
            str+="<strong>"+this.findNodesIndexById(nodesArray,goals2[1])+"</strong>"
        } else if(goals3.length===2) {
            str+="a composition link between "
            str+="<strong>"+this.findNodesIndexById(nodesArray,goals3[0])+"</strong> and "
            str+="<strong>"+this.findNodesIndexById(nodesArray,goals3[1])+"</strong>"
        }
        return str
    }

    /**
     * Find the parents of a node and the type of operations they are linked with
     * @param nodesArray
     * @param edgesArray
     * @param id
     * @returns {string}
     */
    getNodeParent = (nodesArray,edgesArray,id) => {
        let str = ""
        const operations = {"/\\" : "conjunction", "**" : "refinement","||" : "composition"}
        let goals
         if (edgesArray !== null) {
             for (let i = 0; i < edgesArray.length; i++) {
                if (edgesArray[i].from === id) {
                    for (const key in operations) {
                        goals = edgesArray[i].to.split(key)
                        if (goals.length === 2 && (goals[0]===id || goals[1]===id)) {
                            str+=operations[key]+" of <strong>"+this.findNodesIndexById(nodesArray,edgesArray[i].to)+"</strong>\n"
                        }
                    }
                }
             }
         }
         return str
    }


    render() {
        let that = this
        let nodesArray = []
        let edgesArray = []

        function clickOnGoal(id) {
            console.log(id[0])
            const result = that.findGoalIndexById(id[0])
            console.log(result)
             if (result !== undefined && !result.goal.hasOwnProperty("group")) {
                that.setModalGoal(true)
                that.setCurrentGoalIndex(result.index)
            } else {
                const node = that.findNodesIndexById(nodesArray,id[0])
                that.setNodeLabel(node)
                that.setNodeChildren(that.getNodeChildren(nodesArray,id[0]))
                that.setNodeParent(that.getNodeParent(nodesArray,edgesArray,id[0]))
                that.setModalNode(true)
            }
        }

        if (this.state.cgg) {
            this.addGoalAlreadyHere(nodesArray)
            this.addCombinedGoal(nodesArray)
            this.addEdges(edgesArray)
        }

        let graph = {
            nodes: nodesArray,
            edges: edgesArray
        }

        const events = {
            doubleClick: function (event) {
                if (event.nodes.length !== 0) clickOnGoal(event.nodes)
            }
        };


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
                                                events={events}
                                            />
                                        </div>
                                    </div>
                                    <Modal
                                        isOpen={this.state.modalGoal}
                                        toggle={() => this.setModalGoal(false)}
                                        className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                                        {this.state.goals !== null && this.state.goals[this.state.currentGoalIndex] !== undefined && (<>
                                            <GoalModalView
                                                goal={this.state.goals[this.state.currentGoalIndex]}
                                                library={true}
                                                close={() => this.setModalGoal(false)}
                                                patterns={this.state.patterns}
                                                {...goaleditinfo}/>
                                        </>)}
                                    </Modal>
                                <Modal
                                    isOpen={this.state.modalNode}
                                    toggle={() => this.setModalNode(false)}
                                    className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                                    {this.state.goals !== null && (<>
                                        <NodeModalView
                                            nodeChildren={this.state.nodeChildren}
                                            nodeLabel={this.state.nodeLabel}
                                            nodeParent={this.state.nodeParent}
                                            close={() => this.setModalNode(false)}
                                            {...goaleditinfo}/>
                                    </>)}
                                </Modal>
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
