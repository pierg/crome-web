import React from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import Simulation from "../../components/Custom/Simulation";


export default class Synthesis extends React.Component {
    constructor(props) {
        super(props);
        this.myCanvas = React.createRef();
        this.map = [];
        this.world = null;
        this.tab = [];
        this.index = 0;
        this.timer = null;
        this.x = null;
        this.y = null;
        this.robotButton = React.createRef();
    }

    state = {
        started : false,
        table: null,
        running: false
    }

    render() {
        return (
            <>
                <Simulation
                    name="test"
                    mode="crome"
                />
            </>
        );
    }
}
