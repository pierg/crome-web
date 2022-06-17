import React from 'react';
import ElementsButton from "../Elements/Button";

export default class ContractsChoiceActiveGoals extends React.Component {

    render() {

        return (
            <>
                <div
                    className="w-full mt-8 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 opacity-1 transform duration-300 transition-all ease-in-out">


                    {this.props.goals.map((prop, key) => (
                        <div key={key} className="flex items-center mb-4">
                            <input
                                onClick={() => this.props.settingActiveGoals(prop)}
                                id={key}
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label htmlFor={key}
                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {prop.name}
                            </label>
                        </div>
                    ))}


                    <div className="flex content-center justify-center">
                        <ElementsButton
                            size="sm" color="facebook" outline={false}
                            onClick={() => this.props.validate()}>
                            Build your CGG
                        </ElementsButton>
                    </div>
                </div>

            </>
        )
    }
}