import React from 'react';
import CustomHeader from "../../components/Crome/CustomHeader";
import customcontractsheaderscards from "../../_texts/custom/customcontractsheaderscards";
import customcontractsinfo from "../../_texts/custom/customcontractsinfo";
import GoalModeling from "./GoalModeling";
import goalmodelinginfo from "../../_texts/custom/goalmodelinginfo";


export default class CustomContracts extends React.Component {
    state = {
        headerStates: [true, false, false, false, false, false],
        project : "project_example",

    }

    handleHeaderStates = (indexActiveHeader) => {
        console.log(indexActiveHeader)
        if (!this.state.headerStates[indexActiveHeader]) {
            let newHeaderStates = Array(this.state.headerStates.length).fill(false);
            newHeaderStates[indexActiveHeader] = true
            this.setState({headerStates: newHeaderStates})
        }
    }

    settingGoals = (goals) =>{
        this.setState({goals: goals})
    }


    render() {

        return (
            <>

                <CustomHeader
                    {...customcontractsheaderscards}
                    color={"purple"}
                    states={this.state.headerStates}
                    clickable={true}
                    onSelectCustomHeader={this.handleHeaderStates}
                />

                <div className="flex justify-center mt-5">

                    <div className="px-3 pb-5 mx-3 relative flex min-w-0 break-words bg-white rounded shadow-md ">
                        <div className=" mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                              {customcontractsinfo.info.texts.goals}
                          </div>
                    </div>

                    <div className="px-3 mx-2 pb-5 mx-3 relative flex min-w-0 break-words bg-white rounded shadow-md ">
                          <div className=" mt-2 fs-5 text-right text-blueGray-500 uppercase font-bold">
                              {customcontractsinfo.info.texts.description}
                          </div>
                    </div>

                </div>


                           <GoalModeling
                              id={this.props.id}
                              {...goalmodelinginfo}
                              project={this.state.project}
                              setGoals={this.settingGoals}
                              contracts={true}
                            />

            </>


        )
    }
}
