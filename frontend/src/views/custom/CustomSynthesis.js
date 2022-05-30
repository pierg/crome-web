import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

export default class CustomSynthesis extends React.Component {

    state = {
        textareaContent: "",
        textareaHeight: 0,
    }

    setTextareaContent = (e) => {
        this.setState({
            textareaContent: e.target.value
        })
    }

    textareaHeightChange = (height) => {
        console.log((height-42)/24)
        this.setState({
            textareaHeight: (height-42)/24
        })
        console.log(this.state.textareaContent)
        let tab = this.state.textareaContent.split("")
        console.log(tab)
    }

    render(){
        const children = [];
        let className = ""
        for (let i = 0; i <= this.state.textareaHeight; i++) {
            className = "absolute top-"+(i*24+10)+"-px left-3/100 text-blueGray-400"
            children.push(
                <div
                    key={i}
                    className={className}
                >
                    {i}
                </div>
            );
        }


        return (
            <>
                <div className="relative pt-8 pb-12 bg-orange-800">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap justify-center">
                                <h1 className="display-3 title-up text-white font-semibold text-center">
                                    Synthesis
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-2 offset-1 fs-4 text-left text-blueGray-500 uppercase font-bold">
                            ASSUMPTIONS
                        </div>
                        <div className="col-6 relative">
                            <TextareaAutosize
                                onHeightChange={this.textareaHeightChange}
                                onChange={this.setTextareaContent}
                                cacheMeasurements={false}
                                className="pl-8"
                            />
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
