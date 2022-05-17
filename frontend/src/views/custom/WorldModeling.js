import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/styles/tailwind.css";
import React from "react";
import AddButton from "../../components/Custom/AddButton";
import WorldView from "../../components/Custom/WorldView";
import {Link} from "react-router-dom";
import SocketIoProjects from "../../components/Custom/Examples/GetProjects";
import {Button, Modal, ModalFooter} from "reactstrap";

export default class WorldModeling extends React.Component {

    state = {
        worlds: [],
        info: [],
        images: [],
        selectedWorldIndex: 0,
        selectedWorldToDelete: 0,
        numChildren: 0,
        modalDeletionConfirmation : false,
        deletionConfirmation: false,
        worldSelected: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.project !== this.props.project) {
            this.setState({
                worldSelected: this.getIndexOfProjectId(this.props.project)
            })
        }
    }

    getWorlds = (list) => {
        let worlds = []
        let info = []
        let names = []
        let images = []

        for (let i=0; i<list.length; i++) {
            for (let j=0; j<list[i].length; j++) {
                if (list[i][j]["title"] === "environment"){
                    worlds.push(JSON.parse(list[i][j]["content"]))
                }
                else if (list[i][j]["title"] === "info") {
                    info.push(JSON.parse(list[i][j]["content"]))
                    names.push(JSON.parse(list[i][j]["content"]).name)
                }
                else if (list[i][j]["title"] === "image") {
                    images.push(list[i][j]["content"])
                }
            }
        }

        this.props.setListOfWorldNames(names)

        this.setState({
            worlds: worlds,
            info: info,
            images: images,
            numChildren: worlds.length
        })
    }

    selectWorld = (index, eventId) => {
        if (eventId !== "deleteButton" && eventId !== "deleteIcon") {
            if (index === this.state.worldSelected) {
                this.setState({
                    worldSelected: null,
                })
                this.props.setProject(0)
            }
            else {
                this.props.setListOfWorldVariables(this.getListOfWorldVariables(this.state.worlds[index]))
                this.setState({
                    worldSelected: index,
                })
                this.props.setProject(this.state.worlds[index].project_id)
                this.props.setWorld({"environment": this.state.worlds[index], "info": this.state.info[index]})
            }
        }
    }

    modifyWorld = (index) => {
        this.props.setWorld({"environment": this.state.worlds[index], "info": this.state.info[index]})
    }

    clearWorld = () => {
        this.props.setWorld(null)
    }

    setModalDeletionConfirmation = (bool, key = null) => {
        if (bool && key !== null) {
            this.setState({
                selectedWorldToDelete: key,
            })
        }
        this.setState({
            modalDeletionConfirmation: bool,
        })
    }

    setDeletionConfirmation = (bool) => {
        this.setState({
            deletionConfirmation: bool,
        })
    }

    deleteWorld = () => {
        if (this.state.selectedWorldToDelete < this.state.worldSelected) {
            this.setState({
                worldSelected: this.state.worldSelected - 1
            })
        }
        this.setModalDeletionConfirmation(false)
        this.setDeletionConfirmation(true)
    }

    getIndexOfProjectId(projectId) {
        if (projectId === 0) return null
        for (let i=0; i<this.state.worlds.length; i++) {
            if (this.state.worlds[i].project_id === projectId) {
                return i
            }
        }
        return this.state.worlds.length
    }

    getListOfWorldVariables(world) {
        let worldVariables = [[], [], [], []]
        for (let i=0; i<world.grid.locations.length; i++) {
            worldVariables[0].push(world.grid.locations[i].id)
        }
        for (let i=0; i<world.actions.length; i++) {
            worldVariables[1].push(world.actions[i].name)
        }
        for (let i=0; i<world.sensors.length; i++) {
            worldVariables[2].push(world.sensors[i].name)
        }
        for (let i=0; i<world.context.length; i++) {
            worldVariables[3].push(world.context[i].name)
        }
        return worldVariables
    }

    render() {

        const children = [];
        for (let i = 0; i < this.state.numChildren; i += 1) {
            children.push(<WorldView key={i} number={i}
                                    title={this.state.info[i].name}
                                    description={this.state.info[i].description}
                                    image={this.state.images[i]}
                                    statIconName={this.props.info.goalComponent.editIconName}
                                    statSecondIconName={this.props.info.goalComponent.deleteIconName}
                                    statIconColor={this.props.info.goalComponent.iconColor}
                                    selected={this.state.worldSelected === i}
                                    onClick={(e) => this.selectWorld(i, e.target.id)}
                                    modify={this.modifyWorld}
                                    delete={this.setModalDeletionConfirmation}
            />);
        }

        return (
            <>
                <SocketIoProjects worlds={this.getWorlds}
                                  deletionIndex={this.state.selectedWorldToDelete}
                                  deletionConfirmation={this.state.deletionConfirmation}
                                  deletionChanger={this.setDeletionConfirmation}
                                  projectAdded={this.props.projectAdded}/>
                <ParentComponent clearWorld={this.clearWorld}>
                    {children}
                </ParentComponent>
                <Modal
                    isOpen={this.state.modalDeletionConfirmation}
                    toggle={() => this.setModalDeletionConfirmation(false)}
                    className={"custom-modal-dialog sm:c-m-w-70"}>
                    <div className="modal-header justify-content-center">
                        <button
                            aria-hidden={true}
                            className="close"
                            onClick={() => this.setModalDeletionConfirmation(false)}
                            type="button"
                        >
                            <i className={this.props.info.modal.close}/>
                        </button>
                        <h4 className="title title-up">{this.props.info.modal.title}</h4>
                    </div>
                    <div className="modal-body justify-content-center text-center">
                        <span>{this.props.info.modal.content}{this.state.info[this.state.selectedWorldToDelete] !== undefined && this.state.info[this.state.selectedWorldToDelete].name}</span>
                    </div>
                    <ModalFooter>
                        <Button color={this.props.info.modal.cancelColor} onClick={() => this.setModalDeletionConfirmation(false)}>
                            {this.props.info.modal.cancelText}
                        </Button>
                        <Button color={this.props.info.modal.confirmColor} onClick={this.deleteWorld}>
                            {this.props.info.modal.confirmText}
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

const ParentComponent = props => (
    <section className="mt-5 mt-xl-2 pt-2 relative">
        <div className="px-4 md:px-10 mx-auto w-full">
            <div>
                <div className="flex justify-center">
                    <div className="w-full lg:w-6/12 xl:w-3/12 mt-8 ml-4 mr-4 px-4 relative flex flex-col min-w-0 break-words bg-lightBlue-600 rounded mb-6 xl:mb-0 shadow-lg opacity-1 transform duration-300 transition-all ease-in-out">
                        <Link to="/world" className="hover-no-underline" onClick={props.clearWorld}><AddButton
                            statText="Build your Environment"
                            statIconName="fas fa-plus-square"
                            statIconColor="text-lightBlue-700"
                        /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {props.children}
                </div>
            </div>
        </div>
    </section>
);

//
// export default class WorldModeling extends React.Component {
//
//     render() {
//
//         return (
//             Time()
//         );
//     }
// }
