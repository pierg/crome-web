import React from "react";
import { Button } from "reactstrap";

function Location(props) {
  return (
    <tr>
      <td>
        <i
          className={"text-2xl " + props.statIconName}
          style={{ color: props.color }}
        />
      </td>
      <td className="text-center">{props.name}</td>
      <td>
        <Button
          className="btn-icon float-right"
          color="danger"
          size="sm"
          type="button"
          onClick={props.onClick}
        >
          <i className={props.deleteIconName} />
        </Button>
      </td>
    </tr>
  );
}

export default Location;
