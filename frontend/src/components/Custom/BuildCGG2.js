import React from 'react';
import Button from "../Elements/Button";

function BuildCGG2(props) {

    const goals = []
    if (props.goals != null) {
        for (let i = 0; i < props.goals.length; i += 1) {
            if (i === 0)
                goals.push(<li key={i}
                               className="border-b-1 border-t-1 text-blueGray-700 text-lg py-1 ">{props.goals[i].name}</li>)
            else
                goals.push(<li key={i}
                               className="border-b-1 text-blueGray-700 text-lg py-1 ">{props.goals[i].name}</li>)
        }
    }
    const tmp_libraries = []
    for (let i = 0; i < 1000; i += 1) {
        if (i===0)
            tmp_libraries.push(<li key={i} className="border-b-1 border-t-1 text-blueGray-700 text-lg py-1 ">library_{i}</li>)
        else
            tmp_libraries.push(<li key={i} className="border-b-1 text-blueGray-700 text-lg py-1 ">library_{i}</li>)
    }


    /*return (
        <>
            <div className={"lg:w-6/12 xl:w-5/12 ml-12 px-3 max-h-350-px relative flex flex-col min-h-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg opacity-1 transform duration-300 transition-all ease-in-out"}>
                <div className="flex-auto p-4 pr-0">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <span className="font-bold text-xl uppercase text-blueGray-700">Input Goals</span>
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

        </>

    );*/

    return (
        <div className="w-full lg:w-5/12 xl:w-6/12 flex-col">
             <div className="ml-12 px-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg mb-12">
                <div className="flex flex-col justify-center p-4 pr-0">
                    <span className="font-bold text-xl uppercase text-blueGray-700">Input Goals</span>

                    <div className="overflow-auto max-h-200-px pt-3 px-5">
                        <ul>
                            {goals}
                        </ul>
                    </div>
                    <div className="flex flex-col m-auto py-2 uppercase">
                        <Button>Build CGG</Button>
                    </div>
                </div>
            </div>

            <div className="ml-12 px-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
                <div className="flex flex-col justify-center p-4 pr-0">
                    <span className="font-bold text-xl uppercase text-blueGray-700">Libraries</span>

                    <div className="overflow-auto max-h-200-px pt-3 px-5">
                        <ul>
                            {tmp_libraries}
                        </ul>
                    </div>
                    <div className="flex flex-col m-auto py-2 uppercase ">
                        <Button>Map to library</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildCGG2;