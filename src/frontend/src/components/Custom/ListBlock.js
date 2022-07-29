import React from "react";
import { Table } from "reactstrap";
import Button from "../Elements/Button";

function ListBlock(props) {
  return (
    <div className="mx-12 my-3 px-4 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
      <div className="flex flex-col justify-center">
        <Table responsive>
          <thead>
            <tr>
              <th colSpan={props.colspan} className="title-up text-center">
                {props.title}
              </th>
              {props.displayAddButton && (
                <th className="text-center">
                  <div>
                    <Button size="sm" color="lightBlue" onClick={props.addLine}>
                      <i className="fas fa-plus fa-lg" />
                    </Button>
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <tbody>{props.content}</tbody>
        </Table>

        {props.displayAddWallButton && (
          <div className="flex flex-col m-auto pb-2">
            <Button color="lightBlue" onClick={props.addWall}>
              Add wall
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListBlock;
