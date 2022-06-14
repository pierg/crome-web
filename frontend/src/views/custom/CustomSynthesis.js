import React from "react";
import {Input} from "reactstrap";
import Button from "../../components/Elements/Button";
import synthesisInfo from "../../_texts/custom/synthesisinfo";
import Editor from "react-simple-code-editor";
import "../../assets/styles/textEditorStyle.css"
import {Link} from 'react-scroll';
import '@blueprintjs/core/lib/css/blueprint.css';
import {Tree, Classes, Icon} from "@blueprintjs/core";
import SocketSaveSynthesis from "../../components/Custom/Examples/SaveSynthesis";
import SocketDeleteSynthesis from "../../components/Custom/Examples/DeleteSynthesis";
import SocketGetSynthesis from "../../components/Custom/Examples/GetSynthesis";
import { Graphviz } from 'graphviz-react';
import SocketGetExamples from "../../components/Custom/Examples/GetExamples";
import {toast} from "react-toastify";
import SocketGetSimulation from "../../components/Custom/Examples/GetSimulation";


export default class CustomSynthesis extends React.Component {

    state = {
        nameValue : "",
        assumptionsValue : "",
        guaranteesValue : "",
        inputsValue : "",
        outputsValue : "",
        triggerExample : true,
        tree : [],
        isOpen : [],
        triggerSave : false,
        triggerDelete : false,
        nameToDelete : "",
        triggerSynthesis : false,
        toastLoading : null,
        triggerSimulation : false,
        clickedButtonStrix : false,
        clickedButtonParallel : false,
        network : null,
        graph : null,
        simulation : null,
        nbFolders : 0,
        nbExampleCreation : 0,
        creationExpanded: false,
    }

    setNameValue(e) {
        this.setState({
            nameValue : e.target.value
        })
    }

    setAssumptionsValue(value) {
        this.setState({
            assumptionsValue : value
        })
    }

    setGuaranteesValue(value) {
        this.setState({
            guaranteesValue : value
        })
    }

    setInputsValue(e) {
        this.setState({
            inputsValue : e.target.value
        })
    }

    setOutputsValue(e) {
        this.setState({
            outputsValue : e.target.value
        })
    }

    setGraph = (graph) => {
        this.setState({
            graph : graph
        })
    }

    setSimulation = (simulation) => {
        this.setState({
            simulation: simulation
        })
        if (this.state.simulation) {
            if (this.state.clickedButtonStrix)
                this.generateTable(this.state.simulation, "simulationTable_0")
            else {
                for (let i = 0; i < this.state.simulation.length; i++) {
                    this.generateTable(this.state.simulation[i], "simulationTable_" + i)
                }
            }
        }
    }

    /**
     * Highlight matching parenthesis in a string
     * @param input
     * @returns {string}
     */
    highlightParenthesis = (input) => {
        let out = "";
        let level = 0;
        input.split(/([()])/).forEach((bit) => {
          if (bit === "(") {
            level++; // eslint-disable-next-line
            out=out+"<span class=\""+`l${level}`+"\">"+bit+"</span>";
          } else if (bit === ")") { // eslint-disable-next-line
            out=out+"<span class=\""+`l${level}`+"\">"+bit+"</span>";
            level--;
          } else {
            out=out+bit;
          }
        });
        return out.toString();
    }

    /**
     * Highlight the inputs and outputs contains in a string
     * @param input
     * @returns {string}
     */
    highlightWords = (input) => {
        let words = []
        let context = ""
        let output = ""
        let textBefore = ""
        let textAfter = ""
        words = this.state.inputsValue.replaceAll(" ","").split(",")
        words = words.concat(this.state.outputsValue.replaceAll(" ","").split(","))
        words = words.filter(n => n)
        const inputTab = input.split(/(\s+)/)
        if (words) {
            for (let i=0; i<inputTab.length; i++) {
                    textBefore = ""
                    textAfter = ""
                    context = inputTab[i]
                    while (context && (context.charAt(0) === "!" || context.charAt(0) === "(")) {
                        textBefore += context.charAt(0)
                        context = context.substring(1)
                    }

                    while (context && (context.charAt(context.length - 1) === ")")) {
                        textAfter += context.charAt(context.length - 1)
                        context = context.substring(0, 1 * context.length - 1)
                    }
                    if (words.includes(context)) {
                        context = "<span class='text-emerald-500'>" + context + "</span>"
                    }

                    output = output + textBefore + context + textAfter
            }
        }
        return output
    }

    /**
     * Highligth LTL operators and symbols in a string
     * @param input
     * @returns {*}
     */
    highlight = (input) => {
        const LTL = ["G", "F", "X", "U", "R", "W", "M"]
        const symbols = ["->", "&", "|"]

        for (let i=0; i<LTL.length; i++) {
            input = input.replaceAll(LTL[i],"<strong>"+LTL[i]+"</strong>")
        }
        for (let i=0; i<symbols.length; i++) {
            input = input.replaceAll(symbols[i],"<strong>"+symbols[i]+"</strong>")
        }
        return input
    }

    /**
     * Highlight what needs to be highlight in the textarea and put the line numbers before the text
     * @param input
     * @returns {string}
     */
    hightlightWithLineNumbers = (input) => {
        input = this.highlightWords(input)
        input = this.highlight(input)
        return this.highlightParenthesis(input)
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");
    }

    loadFormula = () => {
        this.setTriggerSave(true)
    }

    setTriggerExample = (bool) => {
        this.setState({
            triggerExample: bool
        })
    }

    changeIsOpen(e: React.MouseEvent<HTMLElement>) {
        e.isExpanded = !e.isExpanded
        let creationExpanded = this.state.creationExpanded
        let sizeFolder = this.state.nbFolders
        if(e.id.length !== undefined) {
            this.setState({
                nameValue : e.label,
                assumptionsValue : e.assumptions.join("\n"),
                guaranteesValue : e.guarantees.join("\n"),
                inputsValue : e.inputs.join(", "),
                outputsValue : e.outputs.join(", "),
            })
        }
        else {
            if(e.label !== "Your creation") {
                if(!e.isExpanded) {
                    sizeFolder -= e.childNodes.length
                }
                else {
                    sizeFolder += e.childNodes.length
                }
            }
            else {
                creationExpanded = e.isExpanded
            }
        }
        this.setState({
            clickedButtonStrix : false,
            clickedButtonParallel : false,
            triggerSynthesis : false,
            graph: null,
            simulation: null,
            nbFolders: sizeFolder,
            creationExpanded: creationExpanded,
        })
    }

    setTree = (tree) => {
        let treeTmp = []
        let keys = Object.keys(tree).sort()
        let node
        let nbExampleCreation = 0
        for(let i=0;i<keys.length;i++) {
            node = {}
            node.id = i
            node.label = keys[i]
            node.icon = "folder-close"
            node.isExpanded = false
            node.childNodes = []

            let childNode
            for(let j=0;j<tree[keys[i]].length;j++) {
                childNode = {}
                childNode.id = i+"_"+j
                childNode.label = tree[keys[i]][j].id
                if(keys[i] === "Your creation") {
                    nbExampleCreation++
                }
                childNode.assumptions = tree[keys[i]][j].assumptions
                childNode.guarantees = tree[keys[i]][j].guarantees
                childNode.inputs = tree[keys[i]][j].inputs
                childNode.outputs = tree[keys[i]][j].outputs
                node.childNodes[j] = childNode
            }

            treeTmp[i] = node
        }

        this.setState({
            tree : treeTmp,
            nbFolders : keys.length,
            nbExampleCreation : nbExampleCreation,
            creationExpanded: false,
        })
    }

    deleteCreationClick = (nodeId) => {
        this.setState({
            nameToDelete: this.state.tree[this.state.tree.length-1].childNodes[nodeId].label
        })
        this.setTriggerDelete(true)
    }

    setTriggerSave = (bool) => {
        this.setState({
            triggerSave: bool
        })
    }

    setTriggerDelete = (bool) => {
        this.setState({
            triggerDelete: bool
        })
    }

    savedDone = () => {
        this.displayMessagesWaiting()
        this.setTriggerExample(true)
    }

    deletedDone = () => {
        this.setTriggerExample(true)
    }

    setTriggerSynthesis = (bool) => {
        this.setState({
            triggerSynthesis: bool
        })
    }

    setTriggerSimulation = (bool) => {
        this.setState({
            triggerSimulation: bool
        })
    }

    synthesisStrix = () => {
        this.setTriggerSave(true)
        this.setState({
            clickedButtonStrix : true,
            clickedButtonParallel : false,
            triggerSynthesis : true,
            graph: null,
            simulation: null
        })
    }

    parallelSynthesis = () => {
        this.setTriggerSave(true)
        this.setState({
            clickedButtonStrix : false,
            clickedButtonParallel : true,
            triggerSynthesis : true,
            graph : null,
            simulation: null
        })
    }

    clickSimulation = () => {
        this.setTriggerSimulation(true)
    }

    generateTable = (simulation, tableID) => {
        let table = "<tr class=\"border-b-1 border-t-1 text-blueGray-700 text-lg py-1 hover:bg-blueGray-100\"><th class=\"px-5\">T</th> <th class=\"px-5\">INPUTS</th> <th class=\"px-5\">OUTPUTS</th> </tr>"
        this.tab = []
        for (let i = 0; i < simulation.length; i++) {
            table += "<tr key={i} class=\"border-b-1 border-t-1 text-blueGray-700 text-lg py-1 hover:bg-blueGray-100 text-center\" ><td>" + simulation[i][0] + "</td>"
            table += "<td>" + simulation[i][1] + "</td>";
            table += "<td>" + simulation[i][2] + "</td></tr>";
        }
        document.getElementById(tableID).innerHTML = table;
    }

    displayMessagesWaiting = () => {
        const toastId = toast.loading(
            <>
                <div>
                    Synthesis is working.
                </div>
                <div>
                    Please wait...
                </div>
            </>,
            {
                icon: <Icon icon="time" size={20} color="blue"/>,
            })
        this.setState({
            toastLoading: toastId
        })
    }

    displayMessages = (message_received, synthesis = false) => {
        if(synthesis) {
            const toastId = this.state.toastLoading
            toast.dismiss(toastId)
            this.setState({
                toastLoading: null
            })
        }
        toast[message_received["crometypes"]](message_received["content"]);
        this.props.updateMessage(message_received["content"])
    }

    render(){
        const deleteCreation = [];
        for (let i = 0; i < this.state.nbExampleCreation; i += 1) {
            deleteCreation.push(
                <button
                    key={i}
                    style={{top: ((this.state.nbFolders+i)*30)+"px", right: "10px", height: "30px", width: "30px"}}
                    className="absolute text-right"
                    onClick={() => this.deleteCreationClick(i)}
                >
                    <span className="fas fa-trash"></span>
                </button>
            );
        }

        let width=window.innerWidth

        const children = [];
        let graph
        if (this.state.clickedButtonParallel && this.state.graph) {
            for (let i = 0; i < this.state.graph.length; i += 1) {
                graph = this.state.graph[i].slice(0,this.state.graph[i].indexOf("{")+1)+'\n  bgcolor="#F1F5F9"'+this.state.graph[i].slice(this.state.graph[i].indexOf("{")+1)
                children.push(<Graphviz
                                dot={graph}
                                key={i}
                                options={({
                                    fit: true,
                                    height: 300,
                                    width: width / 4.2,
                                    zoom: true
                                })}
                                className="p-2 m-4 border-solid border-2 rounded-md flex bg-blueGray-100 border-blueGray-100 wrap-content"/>);
            }
        }

        const simulationTable = [];
        if (this.state.clickedButtonParallel && this.state.simulation) {
            let idTable =""
            for (let i=0; i<this.state.simulation.length; i++) {
                idTable="simulationTable_"+i
                simulationTable.push(<table key={i} id={idTable} className="m-4"/>)
            }
        }

        return (
            <>
                <SocketGetExamples
                    trigger={this.state.triggerExample}
                    setTrigger={this.setTriggerExample}
                    setTree={this.setTree}
                />
                <SocketSaveSynthesis
                    trigger={this.state.triggerSave}
                    setTrigger={this.setTriggerSave}
                    savedDone={this.savedDone}
                    displayMessages={this.displayMessages}
                    name={this.state.nameValue}
                    assumptions={this.state.assumptionsValue.split("\n")}
                    guarantees={this.state.guaranteesValue.split("\n")}
                    inputs={this.state.inputsValue.split(",")}
                    outputs={this.state.outputsValue.split(",")}
                />
                <SocketDeleteSynthesis
                    trigger={this.state.triggerDelete}
                    setTrigger={this.setTriggerDelete}
                    deletedDone={this.deletedDone}
                    displayMessages={this.displayMessages}
                    name={this.state.nameToDelete}
                />
                <SocketGetSynthesis
                    trigger={this.state.triggerSynthesis}
                    setTrigger={this.setTriggerSynthesis}
                    displayMessages={this.displayMessages}
                    name={this.state.nameValue}
                    strix={this.state.clickedButtonStrix}
                    parallel={this.state.clickedButtonParallel}
                    setGraph={this.setGraph}
                />
                <SocketGetSimulation
                    trigger={this.state.triggerSimulation}
                    setTrigger={this.setTriggerSimulation}
                    name={this.state.nameValue}
                    strix={this.state.clickedButtonStrix}
                    parallel={this.state.clickedButtonParallel}
                    setSimulation={this.setSimulation}
                />
                <div className="relative pt-8 pb-12 bg-emerald-400 ">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap justify-center">
                                <h1 className="display-3 title-up text-white font-semibold text-center">
                                    {synthesisInfo.info.texts.synthesis}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-9/12 xl:w-10/12 flex-col mt-5 mx-auto">
                    <div className="px-3 pb-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                        <div className="flex flex-col justify-center p-5 ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.name}
                                            </div>
                                            <div className="col-8 relative">
                                                <Input
                                                    value={this.state.nameValue}
                                                    className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                                    onChange={e => this.setNameValue(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.assumptions}
                                            </div>
                                            <div className="col-8 relative">
                                                <Editor
                                                  value={this.state.assumptionsValue}
                                                  onValueChange={code => this.setAssumptionsValue(code)}
                                                  highlight={code => this.hightlightWithLineNumbers(code)}
                                                  padding={10}
                                                  className="editor border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200"
                                                  textareaId="codeArea"
                                                  style={{
                                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                                    fontSize: 16,
                                                    outline: 0,
                                                  }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.guarantees}
                                            </div>
                                            <div className="col-8 relative">
                                                <Editor
                                                  value={this.state.guaranteesValue}
                                                  onValueChange={code => this.setGuaranteesValue(code)}
                                                  highlight={code => this.hightlightWithLineNumbers(code)}
                                                  padding={10}
                                                  className="editor border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200"
                                                  textareaId="codeArea"
                                                  style={{
                                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                                    fontSize: 16,
                                                    outline: 0,
                                                  }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.inputs}
                                            </div>
                                            <div className="col-8 relative">
                                                <Input
                                                    value={this.state.inputsValue}
                                                    className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                                    onChange={e => this.setInputsValue(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.outputs}
                                            </div>
                                            <div className="col-8 relative">
                                                <Input
                                                    value={this.state.outputsValue}
                                                    className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                                    onChange={e => this.setOutputsValue(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="row">
                                            <div className="text-center fs-6 text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.load}
                                            </div>
                                        </div>
                                        <div className="row mt-3 relative">
                                            <Tree
                                                contents={this.state.tree}
                                                className={Classes.TEXT_SMALL}
                                                onNodeClick={e => this.changeIsOpen(e)}
                                            />
                                            {this.state.creationExpanded && deleteCreation}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-9/12 xl:w-10/12 flex-col mt-12 mx-auto">
                    <div className="px-3 relative flex flex-col min-w-0 m-auto">
                        <div className="flex flex-col justify-center p-5 ">
                            <div className="container">
                                <div className="row">
                                    <div id="buttons" className="col-3 offset-2">
                                        <Link  to="synthesis" spy={true} smooth={true}>
                                            <Button
                                                id="buttonSynthesisStrix"
                                                color={synthesisInfo.info.buttons.synthesis.color}
                                                size="lg"
                                                outline={this.state.clickedButtonStrix}
                                                fullWidth={true}
                                                onClick={this.synthesisStrix}
                                            >
                                                {synthesisInfo.info.buttons.synthesis.strix}
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="col-3 offset-2">
                                         <Link  to="synthesis" spy={true} smooth={true}>
                                            <Button
                                                id="buttonParallelSynthesis"
                                                color={synthesisInfo.info.buttons.synthesis.color}
                                                size="lg"
                                                outline={this.state.clickedButtonParallel}
                                                fullWidth={true}
                                                onClick={this.parallelSynthesis}
                                            >
                                                {synthesisInfo.info.buttons.synthesis.parallel}
                                            </Button>
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  id="synthesis" className="w-full lg:w-9/12 xl:w-10/12 flex-col mt-5 mx-auto pb-5">
                {
                        this.state.graph ?
                            <div className="px-3 pb-5 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                                <div className="w-full border-b-1">
                                    <div className="fs-4 m-2 text-center">
                                        {this.state.clickedButtonStrix ? synthesisInfo.info.buttons.synthesis.strix : synthesisInfo.info.buttons.synthesis.parallel}
                                    </div>
                                </div>
                                <div className="row h-auto">
                                    <div className="col-9 m-auto">
                                        {this.state.clickedButtonStrix ?
                                            <Graphviz
                                                dot={this.state.graph}
                                                options={({
                                                    fit: true,
                                                    height: 450,
                                                    width: width / 1.5,
                                                    zoom: true
                                                })}
                                                className="p-4 flex wrap-content"
                                            />
                                        :
                                            <div className="flex flex-wrap p-4 justify-center">{children}</div>
                                        }
                                    </div>
                                    <div className="col-2 offset-1 text-center py-5 m-auto">
                                        <Link  to="simulation" spy={true} smooth={true}>
                                            <Button
                                                id="simulationButton"
                                                size="lg"
                                                onClick={this.clickSimulation}
                                            >
                                                simulation
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        : null
                }
                </div>
                <div  id="simulation" className="w-full lg:w-9/12 xl:w-10/12 flex-col mt-5 mx-auto pb-5">
                    {
                        this.state.simulation ?
                            <div
                                className="px-3 pb-5 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                                <div className="w-full border-b-1">
                                    <div className="fs-4 m-2 text-center">
                                        Simulation
                                    </div>
                                </div>
                                <div className="row h-auto">
                                    <div className="flex flex-col">
                                        {this.state.clickedButtonStrix ?
                                            <div className="w-full flex justify-center">
                                                <table id='simulationTable_0' className="m-4"/>
                                            </div>
                                            : <div className="flex flex-wrap justify-center">
                                                {simulationTable}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            : null
                    }
                </div>
            </>
        )
    }
}
