import React from "react";
import { Button } from "reactstrap";
import mutexcolors from "_texts/mutexcolors.js";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

function ListLine(props) {
  return (
    <tr>
      <td>
        <div className="grid grid-template-2">
          {props.colors.map((prop, key) => (
            <Tooltip
              key={key}
              html={<div className="flex flex-col text-left">Mutex group {prop}</div>}
              position="left"
              arrow="true"
            >
              <span key={key}>
                <i
                  id={"tooltipMutex" + props.list + "-" + props.number + "-" + key}
                  className={"text-2xl " + props.statIconName}
                  style={{ color: mutexcolors.colors[props.list][prop] }}
                />
              </span>
            </Tooltip>
          ))}
        </div>
      </td>
      <td className="text-break">{props.name}</td>
      <td className="whitespace-nowrap w-1 pr-0">
        <Button
          className="btn-icon mr-1 float-right"
          color="info"
          size="sm"
          type="button"
          onClick={props.onEdit}
        >
          <i className={props.editIconName} />
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
          <i className={props.deleteIconName} />
        </Button>
      </td>
    </tr>
  );
}

export default ListLine;
