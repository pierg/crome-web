import React from 'react';
import {Button, UncontrolledTooltip} from "reactstrap";
import mutexcolors from "_texts/custom/mutexcolors.js";

function ListLine(props) {
    return(
        <tr>
            <td>
                <div className="grid grid-template-2">
                    {props.colors.map((prop, key) => (
                        <span key={key}><i id={"tooltipMutex"+props.list+"-"+props.number+"-"+key} className={"text-2xl "+props.statIconName} style={{color: mutexcolors.colors[props.list][prop]}}/>
                        <UncontrolledTooltip
                        delay={0}
                        placement="left"
                        target={"tooltipMutex"+props.list+"-"+props.number+"-"+key}
                        >
                        <div className="flex flex-col text-left">
                            Mutex group {prop}
                        </div>
                        </UncontrolledTooltip></span>
                    ))}
                </div>
            </td>
            <td className="text-break">
                {props.name}
            </td>
            <td className="whitespace-nowrap w-1 pr-0">
                <Button
                    className="btn-icon mr-1 float-right"
                    color="info"
                    size="sm"
                    type="button"
                    onClick={props.onEdit}
                >
                    <i className={props.editIconName}/>
                </Button>
            </td>
            <td>
                <Button
                    className="btn-icon float-right"
                    color="danger"
                    size="sm"
                    type="button"
                    onClick={props.onDelete}
                >
                    <i className={props.deleteIconName}/>
                </Button>
            </td>
        </tr>
    );
}

export default ListLine;