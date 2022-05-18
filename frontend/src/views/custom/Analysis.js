import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/styles/tailwind.css";
import goaleditinfo from "../../_texts/custom/goaleditinfo";
import cgginfo from "../../_texts/custom/cgginfo";
import {Modal} from "reactstrap";
import GoalModalView from "../../components/Custom/GoalModalView";
import CGG from "../../components/Crome/CGG";
import GetCGG from "../../components/Custom/Examples/GetCGG";
import SocketBuildCGG from "../../components/Custom/Examples/SocketBuildCGG";
import BuildCGG from "../../components/Custom/BuildCGG";
import ReactLoading from "react-loading";
import LegendCGG from "../../components/Custom/LegendCGG";
import NodeModalView from "../../components/Custom/NodeModalView";

/**
 * The analysis page component
 * This component allows to generate the cgg
 */
export default class Analysis extends React.Component {

    state = {
        modalGoal: false,
        modalNode : false,
        nodeDescription : "",
        currentGoalIndex: 0,
        cgg: false,
        cggTab: null,
        operator: null,
        selectedGoals: [],
        selectedLibrary: null,
        library: null,
        triggerOperation: false,
        triggerCGG: false,
    }

    setModalGoal = (bool) => {
        this.setState({
            modalGoal: bool
        })
    }

    setModalNode = (bool) => {
        this.setState({
            modalNode : bool
        })
    }

    setCurrentGoalIndex = (id) => {
        this.setState({
            currentGoalIndex: id
        })
    }

    setNodeDescription = (str) => {
        this.setState({
            nodeDescription: str
        })
    }

    callCGG = (mode) => {
        if (mode === "auto") {
            this.setState({
                triggerCGG: true
            })
        }
    }

    setOperator = (operator) => {
        this.setState({
            operator: operator
        })
    }

    setSelectedGoals = (selectedGoals) => {
        this.setState({
            selectedGoals: selectedGoals
        })
    }

    setLibrary = (library) => {
        this.setState({
            selectedLibrary: library
        })
    }

    applyOperator = () => {
        this.setTriggerOperation(true)
    }

    setTriggerOperation = (bool) => {
        if (!bool) {
            this.setTriggerCGG(true)
        }
        this.setState({
            triggerOperation: bool
        })
    }

    setTriggerCGG = (bool) => {
        this.setState({
            triggerCGG: bool
        })
    }

    setGoalsTrigger = (contentJSON) => {
        this.setState({
            cggTab: contentJSON
        })
        this.setState({
            triggerCGG: false,
            cgg: true,
        }, () => this.props.toggleGoalsTrigger())
    }

    addGoalAlreadyHere = (props,nodes) => {
        for (let i=0; i<props.goals.length; i++) {
            nodes.push({"id": props.goals[i].id, "label": props.goals[i].name})
            nodes[nodes.length - 1].group = props.goals[i].hasOwnProperty("group") ? props.goals[i].group : "input"
        }
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

    clickOnGoal2 = (id) => {
        console.log("wsh")
        this.setModalGoal(true)
        this.setCurrentGoalIndex(id)
    }


    addEdges = (edges) => {
        for(let i=0; i<this.state.cggTab['edges'].length; i++) {
            edges.push({"from": this.state.cggTab['edges'][i]["from"], "to": this.state.cggTab['edges'][i]["to"], "arrows": {to: {type: cgginfo.symbols[this.state.cggTab['edges'][i]["link"].toLowerCase()]}}})
        }
    }

    /**
     * Create, recursively, the string to print when double-clicking on a generated goal
     * @param id
     * @returns {string}
     */
    getGeneratedGoals = (id) => {
        let goals = id.split("/\\")
        let str = ""
        if (goals.length===2) {
            str+="a conjunction link between { "
            str+=this.getGeneratedGoals(goals[0])
            str+=" and "
            str+=this.getGeneratedGoals(goals[1])+" } "
        } else {
            goals = id.split("**")
            if (goals.length===2) {
                str+="a composition link between { "
                str+=this.getGeneratedGoals(goals[0])
                str+=" and "
                str+=this.getGeneratedGoals(goals[1])+" } "
            } else {
                goals = id.split("||")
                if (goals.length===2) {
                    str+="a refinement link between { "
                    str+=this.getGeneratedGoals(goals[0])
                    str+=" and "
                    str+=this.getGeneratedGoals(goals[1])+" } "
                } else {
                    str += "<strong>"+this.findGoalIndexById(id).goal.name+"</strong>"
                }
            }
        }
        return str
    }

    findGoalIndexById = (id) => {
        if (this.props.goals !== null) {
            for (let i = 0; i < this.props.goals.length; i++) {
                if (this.props.goals[i].id === id) {
                    return {"index": i, "goal": this.props.goals[i]}
                }
            }
        }
    }


    render() {

        let that = this

        /**
         * Open the right modal when double-clicking on a goal or a node on the CGG
         * @param id
         */
        function clickOnGoal(id) {
            const result = that.findGoalIndexById(id[0])
            console.log(result)
            if (result !== undefined && !result.goal.hasOwnProperty("group")) {
                that.setModalGoal(true)
                that.setCurrentGoalIndex(result.index)
            } else {
                that.setNodeDescription(that.getGeneratedGoals(id[0]))
                that.setModalNode(true)
            }
        }

        let nodesArray = []
        let edgesArray = []

        if (this.state.cgg) {
            // the cgg state is a boolean, true if the cgg has been built
            // if you don't see how to fill the graph, there is an example in storage/crome/cgg.json
            this.addGoalAlreadyHere(that.props,nodesArray)

            this.addCombinedGoal(nodesArray)

            this.addEdges(edgesArray)
        }


        /* DEFINE CGG PARAMETERS PASSED TO CGG COMPONENT */
        const graph = {
            nodes: nodesArray,
            edges: edgesArray
        }

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
            height: "725px",
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
                console.log(event)
                if (event.nodes.length !== 0) clickOnGoal(event.nodes)
            }
        };


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

                {this.state.cgg && (<>
                    <div className="relative flex flex-auto mt-4">
                        <CGG
                            active={this.props.active}
                            graph={graph}
                            options={options}
                            events={events}
                        />
                        <BuildCGG
                            callCGG={this.callCGG}
                            clickOnGoal2={this.clickOnGoal2}
                            goals={this.props.goals}
                        />
                        <LegendCGG/>
                    </div>
                    <Modal
                        isOpen={this.state.modalNode}
                        toggle={() => this.setModalNode(false)}
                        className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                        {this.props.goals !== null && this.state.nodeDescription && (<>
                            <NodeModalView
                                node={this.state.nodeDescription}
                                close={() => this.setModalNode(false)}
                                {...goaleditinfo}/>
                        </>)}
                    </Modal>
                    </>)}
                {!this.state.cgg && (<>
                    <div className="flex flex-auto mt-4">
                        <div className="bg-lightBlue-500 bg-opacity-25 w-50 shadow-md flex items-center justify-center" style={{width : 750, height : 725}}>
                            {this.state.triggerCGG && (<ReactLoading type="spinningBubbles" color="#fff" />)}
                        </div>
                        <BuildCGG
                            callCGG={this.callCGG}
                            clickOnGoal2={this.clickOnGoal2}
                            goals={this.props.goals}
                        />
                    </div>

                </>)}
                <Modal
                    isOpen={this.state.modalGoal}
                    toggle={() => this.setModalGoal(false)}
                    className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                    {this.props.goals !== null && this.props.goals[this.state.currentGoalIndex] !== undefined && (
                        <GoalModalView
                            goal={this.props.goals[this.state.currentGoalIndex]}
                            close={() => this.setModalGoal(false)}
                            patterns={this.props.patterns}
                            {...goaleditinfo}/>
                    )}
                </Modal>
            </>
        );
    }
}