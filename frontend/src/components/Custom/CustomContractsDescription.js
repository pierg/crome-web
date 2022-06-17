import React from 'react';
import customcontractsinfo from "../../_texts/custom/customcontractsinfo";


export default class CustomContractsDescription extends React.Component {


    render() {
        let tableDescription = []

        for (let i = 0; i < customcontractsinfo.operations.length; i++) {
            tableDescription.push(
                <tbody key={i}>
                <tr>
                    <th className="uppercase whitespace-nowrap align-text-top ">
                        {customcontractsinfo.operations[i].title} :
                    </th>
                    <td className="px-1 py-2 align-text-top">
                        {customcontractsinfo.operations[i].description}
                    </td>
                </tr>
                </tbody>
            )
        }
        return (
            <>


                <div className="flex m-3 fs-5 text-blueGray-500 uppercase font-bold justify-center ">
                    {customcontractsinfo.info.texts.description}
                </div>

                <table className="flex-col text-base text-blueGray-500">
                    {tableDescription}
                </table>


            </>
        )
    }
}
