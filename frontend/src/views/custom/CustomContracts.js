import React from 'react';
import CustomHeader from "../../components/Crome/CustomHeader";
import customcontractsheaderscards from "../../_texts/custom/customcontractsheaderscards";


export default class CustomContracts extends React.Component {



    render(){
        const headerStates = [true, false, false, false, false, false]
        return(
            <CustomHeader {...customcontractsheaderscards} color={"purple"} states={headerStates} />

        )
    }
}
