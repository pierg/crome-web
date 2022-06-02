import React from "react";
import {Input} from "reactstrap";
import Button from "../../components/Elements/Button";
import synthesisInfo from "../../_texts/custom/synthesisinfo";
import Editor from "react-simple-code-editor";
import "../../assets/styles/textEditorStyle.css"

export default class CustomSynthesis extends React.Component {

    state = {
        textareaContentAssumption: [],
        textareaHeightAssumption: 0,
        tabCptLineAssumption: [],
        textareaContentGuarantee: [],
        textareaHeightGuarantee: 0,
        tabCptLineGuarantee: [],
        assumptionsValue : "",
        guaranteesValue : ""
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

    hightlightWithLineNumbers = (input) => {
        return input
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");
    }


    render(){

        return (
            <>
                <div className="relative pt-8 pb-12 bg-emerald-400">
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
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-7">
                             <div className="row mt-4">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.assumptions}
                                </div>
                                <div className="col-7 relative">
                                    <Editor
                                      value={this.state.assumptionsValue}
                                      onValueChange={code => this.setAssumptionsValue(code)}
                                      highlight={code => this.hightlightWithLineNumbers(code)}
                                      padding={10}
                                      className="editor border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200"
                                      textareaId="codeArea"
                                      style={{
                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                        fontSize: 18,
                                        outline: 0,
                                      }}
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.guarantees}
                                </div>
                                <div className="col-7 relative">
                                    <Editor
                                      value={this.state.guaranteesValue}
                                      onValueChange={code => this.setGuaranteesValue(code)}
                                      highlight={code => this.hightlightWithLineNumbers(code)}
                                      padding={10}
                                      className="editor border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200"
                                      textareaId="codeArea"
                                      style={{
                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                        fontSize: 18,
                                        outline: 0,
                                      }}
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.inputs}
                                </div>
                                <div className="col-7 relative">
                                    <Input
                                        className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.outputs}
                                </div>
                                <div className="col-7 relative">
                                    <Input
                                        className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
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
                            <div className="row">
                                <select
                                    className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                >

                                </select>
                            </div>
                            <div className="row mt-4">
                                <div className="col-8 offset-2 text-center">
                                    <Button color={synthesisInfo.info.buttons.upload.color} outline={true}>
                                        {synthesisInfo.info.buttons.upload.text}
                                        <i className={synthesisInfo.info.buttons.upload.icon}></i>
                                    </Button>
                                </div>
                            </div>

                            <div className="row mt-32 pt-12">
                                <div className="col-8 offset-2 text-center">
                                    <Button color={synthesisInfo.info.buttons.formula.color}  className="bg-emerald-400" outline={true}>
                                        {synthesisInfo.info.buttons.formula.text}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
