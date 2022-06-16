import React from 'react';
import synthesisInfo from "../../_texts/custom/synthesisinfo";
import {Input} from "reactstrap";
import LTLEdit from "./LTLEdit";
import {Classes, Tree} from "@blueprintjs/core";
import {Link} from "react-scroll";
import Button from "../Elements/Button";

function SynthesisForm(props) {


    return(<div className="w-full lg:w-9/12 xl:w-10/12 flex-col mt-5 mx-auto pb-5">
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
                                                    value={props.nameValue}
                                                    className="border-blueGray-300 text-base text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                                    onChange={e => props.setNameValue(e)}
                                                    style={{
                                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.assumptions}
                                            </div>
                                            <div className="col-8 relative">
                                                <LTLEdit
                                                    goalEdit={false}
                                                    value={props.assumptionsValue}
                                                    setValue={props.setAssumptionsValue}
                                                    size={16}
                                                    inputsValue={props.inputsValue}
                                                    outputsValue={props.outputsValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.guarantees}
                                            </div>
                                            <div className="col-8 relative">
                                                <LTLEdit
                                                    goalEdit={false}
                                                    value={props.guaranteesValue}
                                                    setValue={props.setGuaranteesValue}
                                                    size={16}
                                                    inputsValue={props.inputsValue}
                                                    outputsValue={props.outputsValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.inputs}
                                            </div>
                                            <div className="col-8 relative">
                                                <Input
                                                    value={props.inputsValue}
                                                    className="border-blueGray-300 text-base text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                                    onChange={e => props.setInputsValue(e)}
                                                    style={{
                                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-3 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                                {synthesisInfo.info.texts.outputs}
                                            </div>
                                            <div className="col-8 relative">
                                                <Input
                                                    value={props.outputsValue}
                                                    className="border-blueGray-300 text-base text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                                    onChange={e => props.setOutputsValue(e)}
                                                    style={{
                                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                                    }}
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
                                                contents={props.tree}
                                                className={Classes.TEXT_SMALL}
                                                onNodeClick={e => props.changeIsOpen({e: e})}
                                            />
                                            {props.creationExpanded && props.deleteCreation}
                                        </div>
                                    </div>
                                </div>
                                <div className="container mt-16">
                                    <div className="row">
                                        <div id="buttons" className="col-3 offset-2">
                                            <Link  to="synthesis" spy={true} smooth={true}>
                                                <Button
                                                    id="buttonSynthesisStrix"
                                                    color={synthesisInfo.info.buttons.synthesis.color}
                                                    size="lg"
                                                    outline={props.clickedButtonStrix}
                                                    fullWidth={true}
                                                    onClick={props.synthesisStrix}
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
                                                    outline={props.clickedButtonParallel}
                                                    fullWidth={true}
                                                    onClick={props.parallelSynthesis}
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
                </div>);
}

export default SynthesisForm;