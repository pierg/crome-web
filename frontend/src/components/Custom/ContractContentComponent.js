import React from "react";

function ContractContentComponent(props) {
    return(
        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <span className="font-bold text-xs text-blueGray-700">
                    {props.type}
                </span>
            </div>
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <span className="font-bold text-xs text-blueGray-700">
                    {"LTL value : "+props.ltl_value}
                </span>
            </div>
            {props.content !== undefined && (
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                    {props.content.name+", "}
                    {props.content.arguments.map((prop, key) => {
                        let spacing = key !== 0 ? " - " : ""
                        if (Array.isArray(prop.value)) {
                            return (<span key={key} className="font-bold text-xs text-blueGray-700">{spacing}{prop.name+": "}
                                {prop.value.map((propV, keyV, arr) => {
                                    return keyV+1 === arr.length ? propV : propV+", "
                                })}</span>
                            )
                        }
                        return (<span key={key} className="font-bold text-xs text-blueGray-700">{spacing}{prop.name+": "+prop.value}</span>)
                    })}
                </div>
            )}
        </div>
    );
}

export default ContractContentComponent;