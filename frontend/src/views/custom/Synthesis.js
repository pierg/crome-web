import React from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import GridWorld from "../../components/Crome/IndexEnvironment";
import img from "./robot1.png";
import * as jsoninfo from "./test.json"
import Button from "../../components/Elements/Button";


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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.world !== null && !this.state.started) {
            this.loadGridworld();
            this.generate();
            this.setState({
                started : true
            })
        }
        if (this.props.active) this.drawRobot()
    }


    loadGridworld() {
        const json = this.props.world.environment
        this.world = new GridWorld(this.myCanvas.current, json.size.width, json.size.height, {
                padding: {top: 10, left: 10, right: 10, bottom: 10},
                resizeCanvas: true,
                drawBorder: true
            },this.setModalLocationId);

        //load grid with location colors
        const locations = json.grid.locations;
        this.world.clearMsgMode()
        this.world.loadGrid(locations)
    }

    /* ROBOT FUNCTIONS */


    launchRobot() {
        this.timer = setInterval(this.robot, 1000);
    }

    drawRobot() {
        const line = document.getElementsByClassName("line");
        line[this.index].style.background = "yellow";
        const image = new Image();
        image.src = img;
        const ctx = document.getElementById('canvas').getContext('2d');
        this.x = Math.trunc(this.tab[this.index][0] - 1) * 32 + 24;
        this.y = Math.trunc(this.tab[this.index][1] - 1) * 32 + 24;
        ctx.drawImage(image, this.x, this.y, 50, 50);
    }

    robot(i) {
        const line = document.getElementsByClassName("line");
        const ctx = document.getElementById('canvas').getContext('2d');
        if (this.index === 1 && i === -1) {
            this.drawPreviousCase(ctx, 1);
        }
        line[this.index].style.background = "transparent";
        this.index += i;
        if (this.index === this.tab.length) {
            this.drawPreviousCase(ctx, 1);
            this.clear();
            if (this.timer !== null) {
                clearInterval(this.timer)
                this.timer = null;
            }
            return;
        }
        else if (this.index > 0) {
            this.drawPreviousCase(ctx, this.index - 1);
        }
        else if (this.index < 0) {
            this.clear();
            return;
        }
        //this.drawRobot();
    }

    run() {
        if (this.state.running) {
            clearInterval(this.timer)
            this.timer = null;
            this.setState({
                running: false
            })
        }
        else {
            this.timer = setInterval(() => {
                this.robot(1)
            }, 1000);
            this.setState({
                running: true
            })
        }
    }


    drawPreviousCase(ctx, index) {
        ctx.fillRect(this.x, this.y, 50, 50);
        //this.world.setBackgroundColor(this.tab[index][0],this.tab[index][1],this.map[this.tab[index][0]][this.tab[index][1]][0]);
    }

    clear() {
        const line = document.getElementsByClassName("line");
        const ctx = document.getElementById('canvas').getContext('2d');
        if (this.index === this.tab.length) {
            this.drawPreviousCase(ctx, this.index - 1);
            line[this.index - 1].style.background = "transparent";
        }
        else if (this.index < 0) {
            this.drawPreviousCase(ctx, this.index + 1);
            line[this.index + 1].style.background = "transparent";
        }
        else {
            this.drawPreviousCase(ctx, this.index);
            line[this.index].style.background = "transparent";
        }

        this.index = 0;
        this.robot(0);
    }

    /* ROBOT FUNCTIONS */
    generate() {
        const locations = this.props.world.environment.grid.locations
        const simulation = jsoninfo.simulation;
        let table = "<tr> <th>T</th> <th>CONTEXT</th> <th>CONTROLLER</th> <th>INPUTS</th> <th>OUTPUTS</th> </tr>"
        this.tab = []
        for (let i = 0; i < simulation.length; i++) {
            table += "<tr class='line' ><td>" + simulation[i].t + "</td>";
            table += "<td>" + simulation[i].context + "</td>";
            table += "<td>" + simulation[i].controller + "</td>";
            table += "<td>" + simulation[i].inputs + "</td>";
            table += "<td>" + simulation[i].outputs + "</td></tr>";
            let locationInSimulation = simulation[i].outputs.split(",")[0]
            for (let j=0; j<locations.length; j++) {
                if (locations[j].id === locationInSimulation) {
                    let x1 = locations[j].coordinates[0].x
                    let x2 = locations[j].coordinates[locations[j].coordinates.length - 1].x
                    let y1 = locations[j].coordinates[0].y
                    let y2 = locations[j].coordinates[locations[j].coordinates.length - 1].y
                    this.tab.push([(x1 + x2) - 1 , (y1 + y2) - 1]);
                }
            }
        }
        document.getElementById("synthesisTable").innerHTML = table;
    }

    render() {
        return (
            <>
                <div className="flex justify-center" >
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-full ml-4 flex">
                                <div>
                                    <div>
                                        <canvas className="shifted-canvas-margin" ref={this.myCanvas} id='canvas'/>
                                    </div>
                                    <div className="flex mt-4 justify-end items-center">
                                        <div className="flex h-fit">
                                            <Button color="amber" className="text-xl" onClick={() =>this.clear()}>Reset</Button>
                                            <Button color="emerald" onClick={() =>this.run()}><i className={"text-xl "+(this.state.running ? this.props.info.buttons.pause : this.props.info.buttons.run)}/></Button>
                                        </div>
                                        <div className="flex flex-col">
                                            <Button color="lightBlue" onClick={() =>this.robot(-1)}><i className={"text-xl "+this.props.info.buttons.up}/></Button>
                                            <Button color="red" onClick={() =>this.robot(1)}><i className={"text-xl "+this.props.info.buttons.down}/></Button>
                                        </div>
                                    </div>
                                </div>
                                <div><table id='synthesisTable' className="ml-4"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
