import React from 'react';
import contractschoiceactivegoals from "../../_texts/custom/contractschoiceactivegoals";
import ContractsChoiceNaryGoals from "./ContractsChoiceNaryGoals";
import ContractsChoiceBinaryGoals from "./ContractsChoiceBinaryGoals";

export default class ContractsChoiceActiveGoals extends React.Component {
    state = {
        typeOfOperation: "",
        selectedGoals: [],
        buildButtonDisabled: true
    }


    setSelectedGoals = (goals) => {

        this.setState({
            selectedGoals: goals

        })

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
                selectedGoals: tmpGoals
            })
        } else {
            tmpGoals[1] = prop
            this.setState({
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
                <>
                    <ContractsChoiceBinaryGoals
                         index={index}
                        goals={this.props.goals}
                        disableBuildButton={this.disableBuildButton}
                        changeParameter={this.changeParameter}
                        sameGoal={(this.state.selectedGoals[0] === this.state.selectedGoals[1]) && this.state.selectedGoals.length===2}
                    />


                </>
        } else {
            goalChoice =
                <ContractsChoiceNaryGoals
                    goals={this.props.goals}
                    setSelectedGoals={this.setSelectedGoals}
                    disableBuildButton={this.disableBuildButton}
                />


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