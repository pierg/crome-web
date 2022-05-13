import React from 'react';
import {Table} from "reactstrap";
import Button from "../Elements/Button";

function ListBlock(props) {

    return(
        <div className="mx-12 my-3 px-4 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
            <div className="flex flex-col justify-center">

                <Table responsive>
                    <thead>
                    <tr>
                        <th colSpan={props.colspan} className="title-up text-center">{props.title}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {props.content}
                    </tbody>
                </Table>

                {props.displayAddButton && (<div className="flex flex-col px-16 pb-2"><Button color="lightBlue" onClick={props.addLine}><i className="text-xl fas fa-plus-square"/></Button></div>)}
            </div>
        </div>
    );
}

export default ListBlock;