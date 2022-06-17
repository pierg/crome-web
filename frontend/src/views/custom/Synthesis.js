import React from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import Simulation from "../../components/Custom/Simulation";


export default class Synthesis extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.active &&
                    <Simulation
                        name={this.props.project}
                        mode="crome"
                    />
                }
            </>
        );
    }
}
