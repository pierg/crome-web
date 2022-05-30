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
import default_cgg from './default_cgg.json'

/**
 * The analysis page component
 * This component allows to generate the cgg
 */
export default class Analysis extends React.Component {

    state = {
        modalGoal: false,
        modalNode : false,
        nodeLabel : "",
        nodeChildren : "",
        nodeParent : "",
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

    setNodeLabel = (str) => {
        this.setState({
            nodeLabel: str
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
        this.setModalGoal(true)
        this.setCurrentGoalIndex(id)
    }


    addEdges = (edges) => {
        for(let i=0; i<this.state.cggTab['edges'].length; i++) {
            edges.push({"from": this.state.cggTab['edges'][i]["from"], "to": this.state.cggTab['edges'][i]["to"], "arrows": {to: {type: cgginfo.symbols[this.state.cggTab['edges'][i]["link"].toLowerCase()]}}})
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
        /*let goals = id.split("/\\")
        let str = ""
        if (goals.length===2) {
            str+="a conjunction link between { "
            str+=this.getNodeChildren(goals[0])
            str+=" and "
            str+=this.getNodeChildren(goals[1])+" } "
        } else {
            goals = id.split("**")
            if (goals.length===2) {
                str+="a refinement link between { "
                str+=this.getNodeChildren(goals[0])
                str+=" and "
                str+=this.getNodeChildren(goals[1])+" } "
            } else {
                goals = id.split("||")
                if (goals.length===2) {
                    str+="a composition link between { "
                    str+=this.getNodeChildren(goals[0])
                    str+=" and "
                    str+=this.getNodeChildren(goals[1])+" } "
                } else {
                    str += "<strong>"+this.findGoalIndexById(id).goal.name+"</strong>"
                }
            }
        }
        return str*/
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

    findGoalIndexById = (id) => {
        if (this.props.goals !== null) {
            for (let i = 0; i < this.props.goals.length; i++) {
                if (this.props.goals[i].id === id) {
                    return {"index": i, "goal": this.props.goals[i]}
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
     * Verif
     * @param goals
     * @returns {boolean}
     */
    isDefaultGoals(goals) {
       if (goals.length !==0) {
            if (goals.length > 4) return false
            if (goals[0].id === "default-simple-0001" && goals[1].id === "default-simple-0002" && goals[2].id === "default-simple-0003" && goals[3].id === "default-simple-0000") return true
        }
        return false
    }

    componentDidMount() {
        if (this.props.project === "simple" && !this.state.cgg ) { //&& this.isDefaultGoals(this.props.goals)
            //this.callCGG("auto")
            this.setState({ cgg : true })
        }
    }

    render() {

        let that = this
        let nodesArray = []
        let edgesArray = []
        /**
         * Open the right modal when double-clicking on a goal or a node on the CGG
         * @param id
         */
        function clickOnGoal(id) {
            const result = that.findGoalIndexById(id[0])
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
            // the cgg state is a boolean, true if the cgg has been built
            // if you don't see how to fill the graph, there is an example in storage/crome/cgg.json
            if (!(this.props.project === "simple")) {
                this.addGoalAlreadyHere(that.props, nodesArray)

                this.addCombinedGoal(nodesArray)

                this.addEdges(edgesArray)
            }
        }

        /* DEFINE CGG PARAMETERS PASSED TO CGG COMPONENT */
        let graph = {
            nodes: nodesArray,
            edges: edgesArray
        }

        if (this.props.project === "simple" && this.isDefaultGoals(this.props.goals)) {
            graph = default_cgg
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
                        {this.props.goals !== null && (<>
                            <NodeModalView
                                nodeChildren={this.state.nodeChildren}
                                nodeLabel={this.state.nodeLabel}
                                nodeParent={this.state.nodeParent}
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
                    {this.props.goals !== null && this.props.goals[this.state.currentGoalIndex] !== undefined && (<>
                        <GoalModalView
                            goal={this.props.goals[this.state.currentGoalIndex]}
                            library={true}
                            close={() => this.setModalGoal(false)}
                            patterns={this.props.patterns}
                            {...goaleditinfo}/>
                    </>)}
                </Modal>
            </>
        );


    }
}