import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/styles/tailwind.css";
import goaleditinfo from "../../_texts/custom/goaleditinfo";
import cgginfo from "../../_texts/custom/cgginfo";
import {Modal} from "reactstrap";
import GoalModalView from "../../components/Custom/GoalModalView";
import CGG from "../../components/Crome/CGG";
import GetCGG from "../../components/Custom/Examples/GetCGG";
import BuildCGG from "../../components/Custom/BuildCGG";
import SocketBuildCGG from "../../components/Custom/Examples/SocketBuildCGG";
import IndexCGG from "../../components/Custom/IndexCGG";
import BuildCGG2 from "../../components/Custom/BuildCGG2";


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
        triggerCGG: false
    }

    setModalGoal = (bool) => {
        this.setState({
            modalGoal: bool
        })
    }

    setCurrentGoalIndex = (id) => {
        this.setState({
            currentGoalIndex: id
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

    addEdges = (edges) => {
        for(let i=0; i<this.state.cggTab['edges'].length; i++) {
            edges.push({"from": this.state.cggTab['edges'][i]["from"], "to": this.state.cggTab['edges'][i]["to"], "arrows": {to: {type: cgginfo.symbols[this.state.cggTab['edges'][i]["link"].toLowerCase()]}}})
        }
    }

    render() {

        let that = this


        function findGoalById(id) {
            if (that.props.goals !== null) {
                for (let i = 0; i < that.props.goals.length; i++) {
                    if (that.props.goals[i].id === id) return that.props.goals[i]
                }
            }
            return {name: "error"}
        }

        function findGoalIndexById(id) {
            if (that.props.goals !== null) {
                for (let i = 0; i < that.props.goals.length; i++) {
                    if (that.props.goals[i].id === id) {
                        return {"index": i, "goal": that.props.goals[i]}
                    }
                }
            }
        }

        function clickOnGoal(id) {
            const result = findGoalIndexById(id[0])
            if (result !== undefined && !result.goal.hasOwnProperty("group")) {
                that.setModalGoal(true)
                that.setCurrentGoalIndex(result.index)
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
                hierarchical: false
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
            height: "800px",
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
                    session={this.props.id}
                    operator={this.state.operator}
                    goals={this.props.goals}
                    selectedGoals={this.state.selectedGoals}
                    library={this.state.selectedLibrary}
                    trigger={this.state.triggerOperation}
                    setTrigger={this.setTriggerOperation}
                />
                {!this.state.cgg && (<IndexCGG callCGG={this.callCGG}/>)}
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
                    applyOperator={this.applyOperator}/>
                {this.state.cgg && (<>
                    <div className="flex flex-auto">
                        <CGG
                            active={this.props.active}
                            graph={graph}
                            options={options}
                            events={events}
                        />
                        <BuildCGG2
                            infos={cgginfo}
                            cgg={this.state.cgg}
                            goals={this.props.goals}
                        />
                    </div>

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
                    </Modal></>)}

            </>
        );
    }
}