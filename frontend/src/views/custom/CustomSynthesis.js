import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {Input} from "reactstrap";
import Button from "../../components/Elements/Button";
import synthesisInfo from "../../_texts/custom/synthesisinfo";

export default class CustomSynthesis extends React.Component {

    state = {
        textareaContentAssumption: [],
        textareaHeightAssumption: 0,
        tabCptLineAssumption: [],
        textareaContentGuarantee: [],
        textareaHeightGuarantee: 0,
        tabCptLineGuarantee: [],
    }

    setTextareaContentAssumption = (e) => {
        let tabValue = e.target.value.split("")
        let tmpTabCptLine = this.state.tabCptLineAssumption
        if(tabValue[tabValue.length-1] === "\n"  &&  tmpTabCptLine[tmpTabCptLine.length-1] !== 1) {
            tmpTabCptLine[tmpTabCptLine.length-1]--
            tmpTabCptLine.push(1)
        }

        this.setState({
            textareaContentAssumption: e.target.value.split("\n"),
            tabCptLineAssumption: tmpTabCptLine,
        })
    }

    textareaHeightChangeAssumption = (height) => {
        let tmpHeight = (height-42)/24
        let tmpTabCptLine = this.state.tabCptLineAssumption
        if(tmpTabCptLine.length === 0) {
            tmpTabCptLine.push(1)
        }
        else if(tmpHeight > this.state.textareaHeightAssumption) {
            tmpTabCptLine[tmpTabCptLine.length-1]++
        }
        else {
            if(tmpTabCptLine[tmpTabCptLine.length-1] === 1) {
                tmpTabCptLine.pop()
            }
            else {
                tmpTabCptLine[tmpTabCptLine.length-1]--
            }
        }

        this.setState({
            textareaHeightAssumption: tmpHeight,
            tabCptLineAssumption: tmpTabCptLine,
        })
    }

    setTextareaContentGuarantee = (e) => {
        let tabValue = e.target.value.split("")
        let tmpTabCptLine = this.state.tabCptLineGuarantee
        if(tabValue[tabValue.length-1] === "\n"  &&  tmpTabCptLine[tmpTabCptLine.length-1] !== 1) {
            tmpTabCptLine[tmpTabCptLine.length-1]--
            tmpTabCptLine.push(1)
        }

        this.setState({
            textareaContentGuarantee: e.target.value.split("\n"),
            tabCptLineGuarantee: tmpTabCptLine,
        })
    }

    textareaHeightChangeGuarantee = (height) => {
        let tmpHeight = (height-42)/24
        let tmpTabCptLine = this.state.tabCptLineGuarantee
        if(tmpTabCptLine.length === 0) {
            tmpTabCptLine.push(1)
        }
        else if(tmpHeight > this.state.textareaHeightGuarantee) {
            tmpTabCptLine[tmpTabCptLine.length-1]++
        }
        else {
            if(tmpTabCptLine[tmpTabCptLine.length-1] === 1) {
                tmpTabCptLine.pop()
            }
            else {
                tmpTabCptLine[tmpTabCptLine.length-1]--
            }
        }

        this.setState({
            textareaHeightGuarantee: tmpHeight,
            tabCptLineGuarantee: tmpTabCptLine,
        })
    }

    render(){
        let className = ""
        let heigth = 0
        const childrenAssumption = [];
        for(let i=0; i<this.state.tabCptLineAssumption.length; i++) {
            className = "absolute top-"+(heigth*24+10)+"-px left-20-px text-blueGray-400"
            childrenAssumption.push(
                <div
                    key={i}
                    className={className}
                >
                    {i+1}
                </div>
            );
            heigth += this.state.tabCptLineAssumption[i]
        }

        className = ""
        heigth = 0
        const childrenGuarantee = [];
        for(let i=0; i<this.state.tabCptLineGuarantee.length; i++) {
            className = "absolute top-"+(heigth*24+10)+"-px left-20-px text-blueGray-400"
            childrenGuarantee.push(
                <div
                    key={i}
                    className={className}
                >
                    {i+1}
                </div>
            );
            heigth += this.state.tabCptLineGuarantee[i]
        }


        return (
            <>
                <div className="relative pt-8 pb-12 bg-orange-800">
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
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.assumptions}
                                </div>
                                <div className="col-7 relative">
                                    <TextareaAutosize
                                        onChange={this.setTextareaContentAssumption}
                                        onHeightChange={this.textareaHeightChangeAssumption}
                                        className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                    />
                                    {childrenAssumption}
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.guarantees}
                                </div>
                                <div className="col-7 relative">
                                    <TextareaAutosize
                                        onChange={this.setTextareaContentGuarantee}
                                        onHeightChange={this.textareaHeightChangeGuarantee}
                                        className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100 pl-8 textareaResizeNone w-100"
                                    />
                                    {childrenGuarantee}
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                                    {synthesisInfo.info.texts.inputs}
                                </div>
                                <div className="col-7 relative">
                                    <Input
                                        className="border-blueGray-300 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200  pl-8 textareaResizeNone w-100"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
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
                            <div className="row mt-2">
                                <div className="col-8 offset-2 text-center">
                                    <Button color={synthesisInfo.info.buttons.upload.color} outline={true}>
                                        {synthesisInfo.info.buttons.upload.text}
                                        <i className={synthesisInfo.info.buttons.upload.icon}></i>
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
