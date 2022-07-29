import "@fortawesome/fontawesome-free/css/all.css";
import "../../assets/styles/tailwind.css";
import React from "react";
import WorldView from "../../components/Custom/WorldView";
import { Link } from "react-router-dom";
import SocketIoProjects from "../../components/Custom/Socket/GetProjects";
import { Button, Modal, ModalFooter } from "reactstrap";
import ElementsButton from "../../components/Elements/Button";
import createenvironment from "../../_texts/createenvironment";
import { saveAs } from "file-saver";
import UploadButton from "../../components/Custom/UploadButton";
import SocketSaveEnvironment from "../../components/Custom/Socket/SaveEnvironment";

export default class WorldModeling extends React.Component {
  state = {
    worlds: [],
    info: [],
    images: [],
    selectedWorldIndex: 0,
    selectedWorldToDelete: 0,
    numChildren: 0,
    modalDeletionConfirmation: false,
    deletionConfirmation: false,
    uploadConfirmation: false,
    worldSelected: null,
    uploadedWorld: null,
    triggerSave: false,
    projectID: null,
  };

  setUploadedWorld = (world) => {
    this.setState({
      uploadedWorld: world,
    });
  };

  setProjectID = (id) => {
    this.setState({
      projectID: id,
    });
  };

  setTriggerSave = (bool) => {
    this.setState({
      triggerSave: bool,
    });
  };

  setUploadConfirmation = (bool) => {
    this.setState({
      uploadConfirmation: bool,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.project !== this.props.project) {
      this.setState({
        worldSelected: this.getIndexOfProjectId(this.props.project),
      });
    }
  }

  getWorlds = (list) => {
    let worlds = [];
    let info = [];
    let names = [];
    let images = [];

    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        if (list[i][j]["title"] === "environment") {
          worlds.push(JSON.parse(list[i][j]["content"]));
        } else if (list[i][j]["title"] === "info") {
          info.push(JSON.parse(list[i][j]["content"]));
          names.push(JSON.parse(list[i][j]["content"]).name);
        } else if (list[i][j]["title"] === "image") {
          images.push(list[i][j]["content"]);
        }
      }
    }

    this.props.setListOfWorldNames(names);

    this.setState({
      worlds: worlds,
      info: info,
      images: images,
      numChildren: worlds.length,
    });
  };

  selectWorld = (index, eventId) => {
    if (eventId !== "deleteButton" && eventId !== "deleteIcon") {
      if (index === this.state.worldSelected) {
        this.setState({
          worldSelected: null,
        });
        this.props.setProject(0);
      } else {
        this.props.setListOfWorldVariables(
          this.getListOfWorldVariables(this.state.worlds[index])
        );
        this.setState({
          worldSelected: index,
        });
        this.props.setProject(this.state.worlds[index].project_id);
        this.props.setWorld({
          environment: this.state.worlds[index],
          info: this.state.info[index],
        });
      }
    }
  };

  modifyWorld = (index) => {
    this.props.setWorld({
      environment: this.state.worlds[index],
      info: this.state.info[index],
    });
  };

  downloadWorld = (index) => {
    const environment = {
      environment: this.state.worlds[index],
      info: this.state.info[index],
      image: this.state.images[index],
    };
    const json = JSON.stringify(environment, null, "\t");
    const blob = new Blob([json], { type: "text/json;charset=utf-8" });
    const file = new File([blob], this.state.worlds[index].project_id + ".json");
    saveAs(file);
  };

  isJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  uploadWorld = (json) => {
    if (this.isJsonString(json)) {
      const environment = JSON.parse(json);
      if (
        environment.hasOwnProperty("environment") &&
        environment.hasOwnProperty("info")
      ) {
        this.setUploadedWorld(environment);
        this.setTriggerSave(true);
        this.setUploadConfirmation(true);
      }
      /*console.log(environment)
            this.props.setWorld(environment)*/
    }
  };

  clearWorld = () => {
    this.props.setWorld(null);
  };

  setModalDeletionConfirmation = (bool, key = null) => {
    if (bool && key !== null) {
      this.setState({
        selectedWorldToDelete: key,
      });
    }
    this.setState({
      modalDeletionConfirmation: bool,
    });
  };

  setDeletionConfirmation = (bool) => {
    this.setState({
      deletionConfirmation: bool,
    });
  };

  deleteWorld = () => {
    if (this.state.selectedWorldToDelete < this.state.worldSelected) {
      this.setState({
        worldSelected: this.state.worldSelected - 1,
      });
    }
    this.setModalDeletionConfirmation(false);
    this.setDeletionConfirmation(true);
  };

  getIndexOfProjectId(projectId) {
    if (projectId === 0) return null;
    for (let i = 0; i < this.state.worlds.length; i++) {
      if (this.state.worlds[i].project_id === projectId) {
        return i;
      }
    }
    return this.state.worlds.length;
  }

  getListOfWorldVariables(world) {
    let worldVariables = [[], [], [], []];
    for (let i = 0; i < world.grid.locations.length; i++) {
      worldVariables[0].push(world.grid.locations[i].id);
    }
    for (let i = 0; i < world.actions.length; i++) {
      worldVariables[1].push(world.actions[i].name);
    }
    for (let i = 0; i < world.sensors.length; i++) {
      worldVariables[2].push(world.sensors[i].name);
    }
    for (let i = 0; i < world.context.length; i++) {
      worldVariables[3].push(world.context[i].name);
    }
    return worldVariables;
  }

  render() {
    const children = [];
    for (let i = 0; i < this.state.numChildren; i += 1) {
      children.push(
        <WorldView
          key={i}
          number={i}
          title={this.state.info[i].name}
          description={this.state.info[i].description}
          image={this.state.images[i]}
          statIconName={this.props.info.goalComponent.editIconName}
          statSecondIconName={this.props.info.goalComponent.deleteIconName}
          statDownloadIconName={this.props.info.goalComponent.downloadIconName}
          statIconColor={this.props.info.goalComponent.iconColor}
          selected={this.state.worldSelected === i}
          onClick={(e) => this.selectWorld(i, e.target.id)}
          modify={this.modifyWorld}
          download={this.downloadWorld}
          delete={this.setModalDeletionConfirmation}
        />
      );
    }

    return (
      <>
        <SocketIoProjects
          worlds={this.getWorlds}
          listOfWorlds={this.state.worlds}
          deletionIndex={this.state.selectedWorldToDelete}
          deletionConfirmation={this.state.deletionConfirmation}
          uploadConfirmation={this.state.uploadConfirmation}
          uploadChange={this.setUploadConfirmation}
          deletionChanger={this.setDeletionConfirmation}
          projectAdded={this.props.projectAdded}
        />
        <SocketSaveEnvironment
          session={this.props.id}
          world={this.state.uploadedWorld}
          trigger={this.state.triggerSave}
          returnProjectId={this.setProjectID}
          setTrigger={this.setTriggerSave}
          uploadImage={this.state.triggerSave}
        />

        <ParentComponent uploadWorld={this.uploadWorld} clearWorld={this.clearWorld}>
          {children}
        </ParentComponent>
        <Modal
          isOpen={this.state.modalDeletionConfirmation}
          toggle={() => this.setModalDeletionConfirmation(false)}
          className={"custom-modal-dialog sm:c-m-w-70"}
        >
          <div className="modal-header justify-content-center">
            <button
              aria-hidden={true}
              className="close"
              onClick={() => this.setModalDeletionConfirmation(false)}
              type="button"
            >
              <i className={this.props.info.modal.close} />
            </button>
            <h4 className="title title-up">{this.props.info.modal.title}</h4>
          </div>
          <div className="modal-body justify-content-center text-center">
            <span>
              {this.props.info.modal.content}
              {this.state.info[this.state.selectedWorldToDelete] !== undefined &&
                this.state.info[this.state.selectedWorldToDelete].name}
            </span>
          </div>
          <ModalFooter>
            <Button
              color={this.props.info.modal.cancelColor}
              onClick={() => this.setModalDeletionConfirmation(false)}
            >
              {this.props.info.modal.cancelText}
            </Button>
            <Button
              color={this.props.info.modal.confirmColor}
              onClick={this.deleteWorld}
            >
              {this.props.info.modal.confirmText}
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const ParentComponent = (props) => (
  <section className="relative">
    <div className="flex flex-col">
      <UploadButton
        upload={props.uploadWorld}
        size={createenvironment.buttons.uploadWorld.size}
        color={createenvironment.buttons.uploadWorld.color}
        text={createenvironment.buttons.uploadWorld.text}
        icon={createenvironment.buttons.uploadWorld.icon}
      />
      <Link to="/world" className="mt-2 hover-no-underline" onClick={props.clearWorld}>
        <ElementsButton
          size={createenvironment.buttons.buildYourEnvironment.size}
          color={createenvironment.buttons.buildYourEnvironment.color}
          outline={true}
        >
          <i
            className={createenvironment.buttons.buildYourEnvironment.icon + " mr-2"}
          />
          {createenvironment.buttons.buildYourEnvironment.text}
        </ElementsButton>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center">{props.children}</div>
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
