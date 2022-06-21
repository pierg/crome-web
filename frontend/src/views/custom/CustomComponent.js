import React from "react";
import componentInfo from "../../_texts/custom/componentInfo";
import ComponentsDiagram from "../../components/Custom/ComponentsDiagram"
import ComponentsView from "../../components/Custom/ComponentsView";
import SocketIoPatterns from "../../components/Custom/Examples/GetPatterns";
import Button from "../../components/Elements/Button";

export default class CustomComponent extends React.Component {

    state = {
        patterns: [],
        components : []

    }

    setComponents = (components) => {
        this.setState({
            components
        })
    }


    getPatterns = (list) => {
        this.setState({
            patterns: JSON.parse(list)
        })
    }

    render() {

        const nodes = [
                {
                    id: 'node-1',
                    content: 'Start',
                    coordinates: [100, 150],
                    outputs: [
                        {id: 'port-1', alignment: 'right'},
                        {id: 'port-2', alignment: 'right'},
                    ],
                    disableDrag: true,
                    data: {
                        foo: 'bar',
                        count: 0,
                    }
                },
                {
                    id: 'node-2',
                    content: 'Middle',
                    coordinates: [300, 150],
                    inputs: [
                        {id: 'port-3', alignment: 'left'},
                        {id: 'port-4', alignment: 'left'},
                    ],
                    outputs: [
                        {id: 'port-5', alignment: 'right'},
                        {id: 'port-6', alignment: 'right'},
                    ],
                    data: {
                        bar: 'foo',
                    }
                },
                {
                    id: 'node-3',
                    content: 'End',
                    coordinates: [600, 150],
                    inputs: [
                        {id: 'port-7', alignment: 'left'},
                        {id: 'port-8', alignment: 'left'},
                    ],
                    data: {
                        foo: true,
                        bar: false,
                        some: {
                            deep: {
                                object: true,
                            }
                        },
                    }
                },
            ]


            const links = [
                {input: 'port-1', output: 'port-4'},
            ]



        return (
            <>
                <SocketIoPatterns
                    patterns={this.getPatterns}
                />
                <div className="relative pt-8 pb-12 bg-red-500 ">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap justify-center">
                                <h1 className="display-3 title-up text-white font-semibold text-center">
                                    {componentInfo.info.texts.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between mx-5 mt-5">
                    <div className="w-35">
                        <ComponentsView
                            patterns={this.state.patterns}
                        />
                    </div>
                    <div className="m-auto w-32">
                        <Button size="xl" color="red"><i className={componentInfo.info.icon.build}/></Button>
                    </div>
                    <div className="w-50 lg:w-9/12 xl:w-10/12">
                        <ComponentsDiagram
                            nodes={nodes}
                            links={links}
                        />
                    </div>
                </div>

            </>)
    }
}