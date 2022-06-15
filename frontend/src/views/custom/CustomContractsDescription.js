import React from 'react';
import customcontractsinfo from "../../_texts/custom/customcontractsinfo";


export default class CustomContractsDescription extends React.Component {


    render() {
        let tableDescription = []

        for (let i = 0; i < customcontractsinfo.operations.length; i++) {
            tableDescription.push(
                <tr>
                    <th className="uppercase whitespace-nowrap align-text-top ">
                        {customcontractsinfo.operations[i].title} :
                    </th>
                    <td className="p-1 align-text-top">
                        {customcontractsinfo.operations[i].description}
                    </td>
                </tr>
            )
        }
        return (
            <>
                <div className="flex-col px-3 pb-5 mx-3 relative min-w-0 break-words bg-white rounded shadow-md w-full overflow-scroll">

                    <div className=" flex m-3 fs-5 text-blueGray-500 uppercase font-bold justify-center ">
                        {customcontractsinfo.info.texts.description}
                    </div>
                    <div className=" text-blueGray-500 ">
                        <table className="flex-col text-base ">
                            {tableDescription}
                        </table>
                    </div>

                </div>
            </>
        )
    }
}
