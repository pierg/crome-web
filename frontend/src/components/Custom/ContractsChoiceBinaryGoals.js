import React from 'react';
import contractschoiceactivegoals from "../../_texts/custom/contractschoiceactivegoals";

function ContractsChoiceBinaryGoals(props) {

    return(

        <div className="flex justify-content-evenly mb-6">
                    <div className="flex flex-col">
                        <label htmlFor="firstDropDownMenu"
                               className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">
                            Choose your {contractschoiceactivegoals.operation[props.index].firstDropDownMenuChoice}
                        </label>
                        <select id="firstDropDownMenu"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option
                                value={contractschoiceactivegoals.operation[props.index].firstDropDownMenuChoice}
                                hidden={true}
                            >
                                {contractschoiceactivegoals.operation[props.index].firstDropDownMenuChoice}
                            </option>
                            {props.goals.map((prop, key) => (
                                <option
                                    value={prop.name}
                                    key={key}
                                    onClick={() =>
                                        props.changeParameter("firstDropDownMenu", prop)
                                    }>
                                    {prop.name}
                                </option>

                            ))}
                        </select>

                    </div>

                    <div className="flex flex-col">

                        <label htmlFor="secondDropDownMenu"
                               className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">
                            Choose your {contractschoiceactivegoals.operation[props.index].secondDropDownMenuChoice}
                        </label>
                        <select id="firstDropDownMenu"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option
                                value={contractschoiceactivegoals.operation[props.index].secondDropDownMenuChoice}
                                hidden={true}
                            >
                                {contractschoiceactivegoals.operation[props.index].secondDropDownMenuChoice}
                            </option>
                            {props.goals.map((prop, key) => (
                                <option
                                    value={prop.name}
                                    key={key}
                                    onClick={() =>
                                        props.changeParameter("secondDropDownMenu", prop)
                                    }>
                                    {prop.name}
                                </option>

                            ))}
                        </select>

                    </div>

                </div>

    )
}

export default ContractsChoiceBinaryGoals