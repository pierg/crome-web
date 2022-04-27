import "react"
import "reactstrap"
import React
import { Button }

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
      <td className="flex justify-end">
        <Button
          className="btn-icon"
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
