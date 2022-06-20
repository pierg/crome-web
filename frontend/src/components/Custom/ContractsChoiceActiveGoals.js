import React from 'react';
import ElementsButton from "../Elements/Button";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import contractschoiceactivegoals from "../../_texts/custom/contractschoiceactivegoals";

export default class ContractsChoiceActiveGoals extends React.Component {
    state = {
        selectedGoals: [],
        firstDropDownMenuChoice: "",
        secondDropDownMenuChoice: ""
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
    }


    render() {
        let goalChoice = <></>
        let index = -1
        for (let i = 0; i < Object.keys(contractschoiceactivegoals.operation).length; i++) {
            if (contractschoiceactivegoals.operation[i].name === this.props.operationName) {
                index = i
            }
        }
        if (index !== -1) {
            goalChoice = <>
                <UncontrolledDropdown>
                    <DropdownToggle
                        caret
                        className="btn-round btn-block"
                        color="black"
                    >
                        {this.state.firstDropDownMenuChoice === "" ? contractschoiceactivegoals.operation[index].firstDropDownMenuChoice : this.state.firstDropDownMenuChoice}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.goals.map((prop, key) => (<DropdownItem
                            key={key}
                        >
                            {prop.name}
                        </DropdownItem>))}
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                    <DropdownToggle
                        caret
                        className="btn-round btn-block"
                        color="black"
                    >
                        {this.state.secondDropDownMenuChoice === "" ? contractschoiceactivegoals.operation[index].secondDropDownMenuChoice : this.state.secondDropDownMenuChoice}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.goals.map((prop, key) => (<DropdownItem
                            key={key}
                        >
                            {prop.name}
                        </DropdownItem>))}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </>
        } else {

        }

        return (

            <>
                <div
                    className="w-full mt-8 px-4 relative flex flex-col min-w-0 break-words bg-white rounded mb-6 opacity-1 transform duration-300 transition-all ease-in-out"> {this.props.goals.map((prop, key) => (
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
                    </div>))}


                    {goalChoice}
                    <div className="flex content-center justify-center">
                        <ElementsButton
                            size="sm" color="facebook" outline={false}
                            onClick={() => this.props.validate()}>
                            Build your CGG
                        </ElementsButton>
                    </div>
                </div>

            </>)
    }
}
