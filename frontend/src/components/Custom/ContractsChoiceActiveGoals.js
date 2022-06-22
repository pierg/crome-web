import React from 'react';
import Dropdown from 'react-multilevel-dropdown';
import contractschoiceactivegoals from "../../_texts/custom/contractschoiceactivegoals";

export default class ContractsChoiceActiveGoals extends React.Component {
    state = {
        typeOfOperation: "",
        selectedGoals: [],
        firstDropDownMenuChoice: [],
        secondDropDownMenuChoice: [],
        buildButtonDisabled: true
    }

    selectGoals = (goal) => {
        let selectedGoals = this.state.selectedGoals
        let found = false
        for (let i = 0; i < selectedGoals.length; i++) {
            if (selectedGoals[i] === goal) {
                selectedGoals.splice(i, 1)
                found = true
            }
        }
        if (!found) {
            selectedGoals.push(goal)
        }
        this.setState({selectedGoals: selectedGoals})

        if (this.state.selectedGoals !== []) {
            this.disableBuildButton(false)
        } else {
            this.disableBuildButton(true)
        }
    }

    disableBuildButton = (bool) => {
        this.setState({
            buildButtonDisabled: bool
        })
    }
    changeParameter = (menu, prop) => {
        let tmpGoals = this.state.selectedGoals
        if (menu === "firstDropDownMenu") {
            tmpGoals[0] = prop
            this.setState({
                firstDropDownMenuChoice: prop,
                selectedGoals: tmpGoals
            })
        } else {
            tmpGoals[1] = prop
            this.setState({
                secondDropDownMenuChoice: prop,
                selectedGoals: tmpGoals
            })
        }
        if (this.state.selectedGoals[0] !== this.state.selectedGoals[1] && this.state.selectedGoals.length === 2) {
            this.disableBuildButton(false)
        } else {
            this.disableBuildButton(true)
        }
    }

    render() {
        let goalChoice
        let index = -1
        for (let i = 0; i < Object.keys(contractschoiceactivegoals.operation).length; i++) {
            if (contractschoiceactivegoals.operation[i].name === this.props.operationName) {
                index = i
            }
        }
        if (index !== -1) {
            goalChoice =
                <div className="flex justify-content-evenly mb-6">
                    <div className="flex flex-col">
                        <Dropdown
                            title='Dropdown title'
                        >
                            <Dropdown.Item>
                                Item 1
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Item 2
                                <Dropdown.Submenu>
                                    <Dropdown.Item>
                                        Subitem 1
                                    </Dropdown.Item>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                        </Dropdown>

                        <label htmlFor="firstDropDownMenu"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Choose your {contractschoiceactivegoals.operation[index].firstDropDownMenuChoice}
                        </label>
                        <select id="firstDropDownMenu"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option
                                value={contractschoiceactivegoals.operation[index].firstDropDownMenuChoice}
                                hidden={true}
                            >
                                {contractschoiceactivegoals.operation[index].firstDropDownMenuChoice}
                            </option>
                            {this.props.goals.map((prop, key) => (
                                <option
                                    value={prop.name}
                                    key={key}
                                    onClick={() =>
                                        this.changeParameter("firstDropDownMenu", prop)
                                    }>
                                    {prop.name}
                                </option>

                            ))}
                        </select>

                    </div>

                    <div className="flex flex-col">

                        <label htmlFor="firstDropDownMenu"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Choose your {contractschoiceactivegoals.operation[index].secondDropDownMenuChoice}
                        </label>
                        <select id="firstDropDownMenu"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option
                                value={contractschoiceactivegoals.operation[index].secondDropDownMenuChoice}
                                hidden={true}
                            >
                                {contractschoiceactivegoals.operation[index].secondDropDownMenuChoice}
                            </option>
                            {this.props.goals.map((prop, key) => (
                                <option
                                    value={prop.name}
                                    key={key}
                                    onClick={() =>
                                        this.changeParameter("secondDropDownMenu", prop)
                                    }>
                                    {prop.name}
                                </option>

                            ))}
                        </select>

                    </div>

                </div>
        } else {
            goalChoice =
                <div className="grid grid-cols-2 gap-4">
                    {this.props.goals.map((prop, key) => (
                        <div key={key}
                             className="flex items-center mb-4">
                            <input
                                onClick={() => this.selectGoals(prop)}
                                id={key}
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </input>
                            <label htmlFor={key}
                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {prop.name}
                            </label>
                        </div>))
                    }
                </div>
        }

        return (

            <>
                <div
                    className="w-full mt-8 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 opacity-1 transform duration-300 transition-all ease-in-out">


                    {goalChoice}

                    <div className="flex content-center justify-center ">

                        <button
                            onClick={() => this.props.validate(this.state.selectedGoals)}
                            disabled={this.state.buildButtonDisabled}
                            className={this.state.buildButtonDisabled ? "bg-facebook-regular text-white font-bold py-2 px-4 rounded opacity-50 cursor-default " : "bg-facebook-regular hover:shadow-lg text-white font-bold py-2 px-4 rounded"}
                        >
                            Build your CGG
                        </button>
                    </div>
                </div>

            </>)
    }
}
