import "../Elements/Button"
import "react"
import "reactstrap"
import Button
import CardBody
import React
import Table }
import { Card

function ListBlock(props) {
  return (
    <div className="m-4 px-4 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
      <div className="flex flex-col justify-center">
        <Card className="card-plain mb-0">
          <CardBody className="overflow-x-initial">
            <Table responsive>
              <thead>
                <tr>
                  <th colSpan={props.colspan} className="title-up text-center">
                    {props.title}
                  </th>
                </tr>
              </thead>
              <tbody>{props.content}</tbody>
            </Table>
          </CardBody>
        </Card>
        {props.displayAddButton && (
          <div className="flex flex-col pl-2 pb-3">
            <Button color="lightBlue" onClick={props.addLine}>
              <i className="text-xl fas fa-plus-square" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListBlock;
