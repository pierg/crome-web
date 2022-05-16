import React from 'react';
import Button from "../Elements/Button";

function BuildCGG2(props) {

    const goals = []
    for (let i = 0; i < props.goals.length; i += 1) {
        if (i===0)
            goals.push(<li key={i} className="border-b-1 border-t-1 text-blueGray-700 text-lg py-1 ">{props.goals[i].name}</li>)
        else
            goals.push(<li key={i} className="border-b-1 text-blueGray-700 text-lg py-1 ">{props.goals[i].name}</li>)
    }
    /*for (let i = 0; i < 1000; i += 1) {
        if (i===0)
            goals.push(<li key={i} className="border-b-1 border-t-1 text-blueGray-700 text-lg py-1 ">TestwsH</li>)
        else
            goals.push(<li key={i} className="border-b-1 text-blueGray-700 text-lg py-1 ">TestwsH</li>)
    }*/

    /*return (
        <>
            <div className={"w-full lg:w-6/12 xl:w-5/12 ml-12 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg opacity-1 transform duration-300 transition-all ease-in-out"}>
                <div className="flex-auto p-4 pr-0">
                    <div className="flex">
                        <div className="flex flex-wrap w-full">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <span className="font-bold text-xl uppercase text-blueGray-700">Input Goals</span>
                                </div>
                            </div>

                            <ReactScrollableList
                                listItems={goals}
                                heightOfItem={30}
                                maxItemsToRender={20}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );*/

    return (
        <div className={"lg:w-6/12 xl:w-5/12 ml-12 px-3 max-h-350-px min-h-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg opacity-1 transform duration-300 transition-all ease-in-out"}>
            <div className="flex-auto p-4 pr-0">
                <div className="flex">
                    <div className="flex flex-wrap w-full">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <span className="font-bold text-xl uppercase text-blueGray-700">Input Goals</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="overflow-auto max-h-200-px px-5">
                <ul>
                    {goals}
                </ul>
            </div>
            <div className="w-full flex absolute bottom-0 justify-center py-4 pr-4">
                <Button>Build CGG</Button>
            </div>
        </div>
    );
}

export default BuildCGG2;