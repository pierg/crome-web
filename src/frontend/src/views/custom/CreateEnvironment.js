import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import "../../components/Crome/IndexEnvironment";
import GridWorld from "../../components/Crome/IndexEnvironment";
import CustomDownload from "../../components/Custom/CustomDownload";
import { Link } from "react-router-dom";
import createenvironment from "../../_texts/createenvironment";
import Button from "../../components/Elements/Button";
import { Modal, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";
import ListBlock from "../../components/Custom/ListBlock";
import Location from "../../components/Custom/Location";
import WorldEdit from "../../components/Crome/WorldEdit";
import arrayEquals from "../../hooks/arrayEquals";
import deleteSubArrays from "../../hooks/deleteSubArrays";
import ListLine from "../../components/Custom/ListLine";
import LocationIdEdit from "../../components/Custom/LocationIdEdit";
import SavingEdit from "../../components/Custom/SavingEdit";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import CustomHeader from "../../components/Crome/CustomHeader";
import customheadercards from "../../_texts/customheadercards";
import customfooter from "../../_texts/customfooter";
import CustomFooter from "../../components/Custom/CustomFooter";

export default class CreateEnvironment2 extends React.Component {
  state = {
    started: false,
    modalClassic: false, //modal for action sensors and context
    lists: [[], [], [], []], //lists component (not location)
    numChildren: [0, 0, 0, 0],
    tmpLists: [[], [], [], []], //temporary list component --> during modal show
    currentList: 0, //when modal appear -> edit right title ...
    currentIndex: 0,
    mutexGroups: [[], [], []],
    mutexList: [],
    modalLocationId: false, //modal for locaiton
    currentIdInput: "",
    myCanvas: null,
    modalSaving: false, //modal for save
    savingInfos: { name: "", description: "" },
    environmentToBeSaved: null,
    errorMsg: "",
    warningPop: false,
  };

  /* GRID FUNCTIONS */
  constructor(props) {
    super(props);
    this.test = React.createRef();
    this.saveInToJSON = this.saveInToJSON.bind(this);
    this.world = null;
    this.size = 8;
    this.componentsList = [];
    this.projectId = null;
  }

  setRef = (ref) => {
    this.setState({
      myCanvas: ref.current,
    });
  };

  goToIndex = () => {
    this.inputElement.click();
  };

  //-------------------------- Start map -------------------------
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.myCanvas !== null && !this.state.started) {
      this.starting();
      this.setState({
        started: true,
      });
    }
  }

  starting() {
    if (this.props.world !== null) {
      this.setState({
        savingInfos: this.props.world.info,
      });
      this.loadGridworld();
    } else {
      this.generateGridworld();
    }
  }

  loadGridworld() {
    const json = this.props.world.environment;
    this.world = new GridWorld(
      this.state.myCanvas,
      json.size.width,
      json.size.height,
      {
        padding: { top: 10, left: 10, right: 10, bottom: 60 },
        resizeCanvas: true,
        drawBorder: true,
      },
      this.setModalLocationId
    );

    this.projectId = json.project_id;

    //load grid with location colors
    const locations = json.grid.locations;
    this.world.loadGrid(locations);

    const actions = json.actions;
    const sensors = json.sensors;
    const context = json.context;
    this.addAllElements(actions, 1);
    this.addAllElements(sensors, 2);
    this.addAllElements(context, 3);

    this.size = json.size.width;
  }

  //-------------------------- CANVAS (LOCATION) ------------------------

  generateGridworld() {
    this.world = new GridWorld(
      this.state.myCanvas,
      this.size,
      this.size,
      {
        padding: { top: 10, left: 10, right: 10, bottom: 60 },
        resizeCanvas: true,
        drawBorder: true,
      },
      this.setModalLocationId
    );
  }

  modifyGridSize(increment) {
    this.size += increment;

    this.world.restoreColorNode();
    this.world.resetNode();
    let oldLocations = this.world.getLocations();
    let oldNodes = this.world.getNodes();
    let maxIdRow = 0; // table corresponding to the node with the largest x as abscissa and its colour
    let minIdRow = oldNodes.length; // table corresponding to the node with the smallest x abscissa and its colour
    let minIdCol = oldNodes[0].length; // table corresponding to the node with the smallest y and its colour as ordinates
    let maxIdCol = 0; // table corresponding to the node with the largest x and its colour as ordinates
    for (let row = 0; row < oldNodes.length; row++) {
      for (let col = 0; col < oldNodes[0].length; col++) {
        // if the color of the node is not white check if it is the point corresponding to one of the 4 ends
        let colorNode = oldNodes[row][col].backgroundColor;
        if (colorNode !== "#FFFFFF") {
          minIdRow = this.end(minIdRow, row, colorNode, minIdRow >= row);
          minIdCol = this.end(minIdCol, col, colorNode, minIdCol >= col);
          maxIdRow = this.end(maxIdRow, row, colorNode, maxIdRow <= row);
          maxIdCol = this.end(maxIdCol, col, colorNode, maxIdCol <= col);
        }
      }
    }

    let oldSizeRow = maxIdRow - minIdRow + 1;
    let oldSizeCol = maxIdCol - minIdCol + 1;

    let isInRow = this.size - oldSizeRow;
    let isInCol = this.size - oldSizeCol;

    if (isInRow < 0 || isInCol < 0) {
      this.updateErrorMsg(createenvironment.errorMsg.gridTooSmall);
      this.size -= increment;
    } else {
      let startRow = Math.trunc(isInRow / 2);
      let startCol = Math.trunc(isInCol / 2);

      let endRow = startRow + oldSizeRow;
      let endCol = startCol + oldSizeCol;

      let shiftRow = minIdRow - startRow;
      let shiftCol = minIdCol - startCol;

      this.world.onclick = null;
      this.world = new GridWorld(
        this.state.myCanvas,
        this.size,
        this.size,
        {
          padding: { top: 10, left: 10, right: 10, bottom: 60 },
          resizeCanvas: true,
          drawBorder: true,
        },
        this.setModalLocationId
      );
      this.world.setLocations(oldLocations);
      this.world.setNodes(
        oldNodes,
        startRow,
        endRow,
        shiftRow,
        startCol,
        endCol,
        shiftCol
      );
      this.world.draw();
    }
  }

  end(minMax, pos, color, bool) {
    if (bool && (minMax !== pos || color !== "black")) {
      // if there are several points corresponding to one end, the one that does not have the colour black is chosen
      minMax = pos;
    }
    return minMax;
  }

  //show/hide modal
  setModalLocationId = (bool, saved = false) => {
    if (!bool) {
      this.setState({
        currentIdInput: "",
      });
      if (!saved) {
        this.world.restoreColorNode();
        this.world.resetNode();
        this.world.draw();
      }
    } else {
      this.world.setZoneColor("#808080");
    }
    this.setState({
      modalLocationId: bool,
    });
  };

  editCurrentIdInput = (element) => {
    this.setState({
      currentIdInput: element,
    });
  };

  saveLocation = () => {
    this.world.addLocation(this.state.currentIdInput);
    this.setModalLocationId(false, true);
  };

  deleteLocation = (indexLocation) => {
    this.world.deleteLocation(indexLocation);
    this.setState({
      currentIdInput: "",
    });
  };

  /*manage wall*/
  onAddWall = () => {
    this.world.triggerWall();
  };

  //-------------------------- ACTIONS / SENSORS / CONTEXT -------------------------
  //show/hide modal
  setModalClassic = (bool) => {
    if (!bool) {
      this.setState({
        tmpLists: this.state.lists,
      });
    }

    this.setState({
      modalClassic: bool,
    });
  };

  onAddLine = (index) => {
    let tmpLists = JSON.parse(JSON.stringify(this.state.lists));

    tmpLists[index].push("");

    this.setState(
      {
        tmpLists: tmpLists,
      },
      () => this.editLine(index, this.state.numChildren[index])
    );
  };

  editLine = (listIndex, elementIndex) => {
    this.setState(
      {
        currentList: listIndex,
        currentIndex: elementIndex,
      },
      () =>
        this.setState(
          {
            mutexList: this.getMutexElements(
              this.state.tmpLists[listIndex][elementIndex]
            ),
          },
          () => this.setModalClassic(true)
        )
    );
  };

  editCurrentElement = (newElement) => {
    this.setState((state) => {
      const tmpLists = state.tmpLists.map((list, j) => {
        if (j === this.state.currentList) {
          return list.map((item, k) => {
            if (k === this.state.currentIndex) {
              return newElement;
            } else {
              return item;
            }
          });
        } else {
          return list;
        }
      });
      return {
        tmpLists,
      };
    });
  };

  saveCurrentElement = (newElement, mutexArray) => {
    if (this.state.currentIndex >= this.state.numChildren[this.state.currentList]) {
      // Saving after a new element is created, i.e. not an edited existing element
      let tmpLists = this.state.lists;
      let tmpNumChildren = this.state.numChildren;

      tmpLists[this.state.currentList].push(newElement);
      tmpNumChildren[this.state.currentList]++;
      this.setState({
        lists: tmpLists,
        numChildren: tmpNumChildren,
      });
    }

    this.setState(
      (state) => {
        const lists = state.lists.map((list, j) => {
          if (j === this.state.currentList) {
            return list.map((item, k) => {
              if (k === this.state.currentIndex) {
                this.deleteEveryMutexOccurrenceOf(item); // deleting every occurrence of the old element in mutexGroups before replacing it
                return newElement;
              } else {
                return item;
              }
            });
          } else {
            return list;
          }
        });
        return {
          lists,
        };
      },
      () => {
        this.setState({
          tmpLists: this.state.lists,
        });
        this.updateMutexArray(newElement, mutexArray);
      }
    );

    this.setModalClassic(false);
  };

  deleteElement = (listIndex, elementIndex) => {
    let tmpLists = this.state.lists;
    let tmpNumChildren = this.state.numChildren;

    this.deleteEveryMutexOccurrenceOf(
      this.state.lists[listIndex][elementIndex],
      listIndex
    );

    this.componentsList[listIndex].content.splice(elementIndex, 1);
    tmpLists[listIndex].splice(elementIndex, 1);
    tmpNumChildren[listIndex]--;
    this.setState(
      {
        lists: tmpLists,
        tmpLists: tmpLists,
        numChildren: tmpNumChildren,
        currentList: listIndex,
      },
      () => {
        if (listIndex !== 0) this.cleanMutexGroups();
      }
    );
  };

  validName = (element, isLocation = false) => {
    // checking if the given name is valid, i.e. not empty and not already existing in any list
    if (element === "") return false;
    let lists = this.state.lists;
    let i = isLocation ? 1 : 0; // the list of locations is the only list where we can add an already existing element (to increase the size of a location)
    let currentList = isLocation ? 0 : this.state.currentList;
    for (i; i < lists.length; i++) {
      for (let j = 0; j < lists[i].length; j++) {
        if (
          lists[i][j] === element &&
          !(i === currentList && j === this.state.currentIndex)
        )
          return false;
      }
    }
    return true;
  };

  addAllElements = (list, index) => {
    let tmpLists = this.state.lists;
    let tmpMutex = this.state.mutexGroups;

    tmpLists[index] = [];
    tmpMutex[index - 1] = [];

    for (let i = 0; i < list.length; i++) {
      tmpLists[index].push(list[i].name);
      if (list[i].mutex_group !== undefined && Array.isArray(list[i].mutex_group)) {
        for (let j = 0; j < list[i].mutex_group.length; j++) {
          if (tmpMutex[index - 1][list[i].mutex_group[j]] === undefined)
            tmpMutex[index - 1][list[i].mutex_group[j]] = [];
          tmpMutex[index - 1][list[i].mutex_group[j]].push(list[i].name);
        }
      }
    }

    let tmpNumChildren = this.state.numChildren;
    tmpNumChildren[index] = list.length;

    this.setState({
      lists: tmpLists,
      numChildren: tmpNumChildren,
      mutexGroups: tmpMutex,
    });
  };

  //----- MUTEX -----
  getMutexElements = (element) => {
    // get every element exclusive to the specified element
    let elements = [];
    let mutexGroup = this.state.mutexGroups[this.state.currentList - 1];
    if (this.state.currentList > 0) {
      for (let i = 0; i < mutexGroup.length; i++) {
        if (mutexGroup[i].includes(element)) {
          for (let j = 0; j < mutexGroup[i].length; j++) {
            if (!elements.includes(mutexGroup[i][j]) && mutexGroup[i][j] !== element) {
              elements.push(mutexGroup[i][j]);
            }
          }
        }
      }
    }
    return elements;
  };

  setMutexList = (mutexList) => {
    this.setState({
      mutexList: mutexList,
    });
  };

  cleanMutexGroups = () => {
    // deleting doubles and empty arrays
    let mutexGroups = this.state.mutexGroups;
    let mutexGroup = mutexGroups[this.state.currentList - 1];
    let newArray = [];
    let found = {};
    for (let i = 0; i < mutexGroup.length; i++) {
      let jsonArray = JSON.stringify(mutexGroup[i]);
      if (found[jsonArray] || jsonArray === "[]") {
        continue;
      }
      newArray.push(mutexGroup[i]);
      found[jsonArray] = true;
    }

    newArray = deleteSubArrays(newArray);

    mutexGroups[this.state.currentList - 1] = newArray;
    this.setState({
      mutexGroups: mutexGroups,
    });
  };

  updateMutexArray = (newElement, mutexArray) => {
    this.deleteEveryMutexOccurrenceOf(newElement); // deleting every occurrence of the element before placing it again at the right place
    let flag = true;
    let mutexGroup = this.state.mutexGroups[this.state.currentList - 1];

    for (let i = 0; i < mutexGroup.length; i++) {
      mutexGroup[i].sort();
      if (arrayEquals(mutexGroup[i], mutexArray)) {
        mutexGroup[i].push(newElement);
        flag = false;
        break;
      }
    }
    if (flag) {
      if (mutexArray.length === 0) {
        mutexGroup.push([newElement]);
      } else {
        for (let i = 0; i < mutexArray.length; i++) {
          mutexGroup.push([newElement, mutexArray[i]]);
        }
      }
    }
    this.cleanMutexGroups();
  };

  deleteEveryMutexOccurrenceOf = (element, list = false) => {
    let currentList = list || this.state.currentList;
    let mutexGroup = this.state.mutexGroups[currentList - 1];
    for (let i = 0; i < mutexGroup.length; i++) {
      let index = mutexGroup[i].indexOf(element);
      if (index !== -1) {
        mutexGroup[i].splice(index, 1);
      }
    }
  };

  getEveryIndexOf = (element, currentList) => {
    let elements = [];
    let mutexGroup = this.state.mutexGroups[currentList - 1];
    for (let i = 0; i < mutexGroup.length; i++) {
      if (mutexGroup[i].includes(element) && mutexGroup[i].length > 1) {
        elements.push(i);
      }
    }
    return elements;
  };

  //-------------------------- ENVIRONMENT ------------------------
  /* clear */
  clearEnvironment = () => {
    this.world.deleteLocations();

    this.setState({
      lists: [[], [], [], []],
      tmpLists: [[], [], [], []],
      mutexGroups: [[], [], []],
      numChildren: [0, 0, 0, 0],
    });
  };

  /* open/close modal */
  setModalSaving = (bool) => {
    if (!bool) {
      if (this.props.world === null) {
        this.setState({
          savingInfos: { name: "", description: "" },
        });
      } else {
        this.setState({
          savingInfos: this.props.world.info,
        });
      }
    }
    this.setState({
      modalSaving: bool,
    });
  };

  /* env title and description */
  editSavingInfos = (element) => {
    this.setState({
      savingInfos: element,
    });
  };

  /* save button */
  saveWorld = () => {
    this.world.clearMsgMode();
    this.world.draw();
    this.setModalSaving(false);
    this.props.saveEnvironment(this.state.savingInfos, this.state.environmentToBeSaved);
  };

  /* save JSON */
  saveInToJSON() {
    let obj = { filetype: "environment", project_id: this.projectId };
    obj.size = { width: this.size, height: this.size };
    obj.grid = { locations: [] };

    //INSERT LOCATIONS
    const locations = this.world.getLocations();
    for (let i = 0; i < locations.length; i++) {
      obj.grid.locations.push({
        coordinates: [],
        color: locations[i].color,
        id: locations[i].id,
        adjacency: [],
      });
      //INSERT NEIGHBOURS OF LOCATIONS
      for (let j = 0; j < locations[i].neighbour.length; j++) {
        obj.grid.locations[i].adjacency.push(locations[i].neighbour[j]);
      }
    }

    //INSERT COORDONATES OF LOCATIONS
    const nodes = this.world.getNodes();
    for (let row = 0; row < nodes.length; row++) {
      for (let col = 0; col < nodes[row].length; col++) {
        if (
          nodes[row][col].backgroundColor !== "#FFFFFF" &&
          nodes[row][col].backgroundColor !== null
        ) {
          for (let i = 0; i < locations.length; i++) {
            if (nodes[row][col].location === locations[i].id) {
              obj.grid.locations[i].coordinates.push({ row: row, col: col });
            }
          }
        }
      }
    }

    let lists = ["actions", "sensors", "context"];
    for (let i = 1; i < this.state.lists.length; i++) {
      obj[lists[i - 1]] = [];
      for (let j = 0; j < this.state.lists[i].length; j++) {
        obj[lists[i - 1]][j] = { name: this.state.lists[i][j] };
        let indexArray = this.getEveryIndexOf(this.state.lists[i][j], i);
        if (indexArray.length > 0) {
          obj[lists[i - 1]][j].mutex_group = indexArray;
        }
      }
    }
    this.setState(
      {
        environmentToBeSaved: obj,
      },
      () => this.setModalSaving(true)
    );
  }

  /* error */
  updateErrorMsg = (msg) => {
    if (msg !== "") {
      this.setState({
        errorMsg: msg,
        warningPop: true,
      });
      setTimeout(() => {
        this.setState({ warningPop: false });
      }, 4000);
    } else {
      this.setState({
        warningPop: false,
      });
    }
  };

  render() {
    this.componentsList = createenvironment.componentsList;

    if (this.world !== null) {
      this.componentsList[0].content = [];
      for (let i = 0; i < this.world.getNbLocations(); i += 1) {
        let answer = this.world.getLocations();
        this.componentsList[0].content[i] = (
          <Location
            key={i}
            name={answer[i].id}
            onClick={() => this.deleteLocation(i)}
            color={answer[i].color}
            statIconName={"fas fa-square"}
            deleteIconName={"now-ui-icons ui-1_simple-remove"}
          />
        );
      }
      this.componentsList[0].displayAddWallButton = this.world.getNbLocations() > 1;
    }

    for (let k = 1; k < this.state.lists.length; k++) {
      this.componentsList[k].content = [];
      for (let i = 0; i < this.state.numChildren[k]; i += 1) {
        this.componentsList[k].content[i] = (
          <ListLine
            key={(k - 1) * this.state.numChildren[k] + i}
            number={(k - 1) * this.state.numChildren[k] + i}
            name={this.state.lists[k][i]}
            list={k - 1}
            onEdit={() => this.editLine(k, i)}
            onDelete={() => this.deleteElement(k, i)}
            colors={this.getEveryIndexOf(this.state.lists[k][i], k)}
            statIconName={"far fa-circle"}
            editIconName={"fas fa-pen"}
            deleteIconName={"now-ui-icons ui-1_simple-remove"}
          />
        );
      }
    }

    const headerStates = [true, false, false, false];

    return (
      <>
        <Link to="/crome" ref={(input) => (this.inputElement = input)} />
        <CustomHeader {...customheadercards} states={headerStates} />
        <div className="px-4 md:px-6 mx-auto w-full -mt-6">
          <div className="relative">
            <div className="relative w-full overflow-hidden">
              <div>
                <div id="body" className="flex justify-center items-center">
                  <div className="flex container px-4 justify-center">
                    <div className="flex justify-center pr-4 mt-5">
                      <Link to="/crome" className="hover-no-underline">
                        <Button
                          color={createenvironment.buttons.back.color}
                          outline={true}
                        >
                          <i
                            className={createenvironment.buttons.back.icon + " mr-2"}
                          />
                          {createenvironment.buttons.back.text}
                        </Button>
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center mb-24">
                        <div className="w-full flex relative h-10">
                          <div className="absolute right-7/100">
                            <Button color="emerald" onClick={this.saveInToJSON}>
                              <i className="mr-2 fas fa-check" />
                              {this.projectId === null
                                ? createenvironment.buttons.save
                                : createenvironment.buttons.update}
                            </Button>
                            <Button color="amber" onClick={this.clearEnvironment}>
                              <i className="mr-2 fas fa-trash" />
                              {createenvironment.buttons.clear}
                            </Button>
                          </div>
                        </div>
                        <div>
                          <CustomDownload
                            currentRef={this.state.myCanvas}
                            session={this.props.session}
                            setRef={this.setRef}
                            project={this.props.returnedProjectId}
                            resetProject={this.props.resetProject}
                            goToIndex={this.goToIndex}
                          />
                        </div>
                        <UncontrolledPopover
                          placement={window.innerWidth > 991 ? "left" : "top"}
                          target="canvas"
                          className="popover-info"
                          isOpen={this.state.warningPop}
                        >
                          <PopoverHeader>Warning!</PopoverHeader>
                          <PopoverBody>{this.state.errorMsg}</PopoverBody>
                        </UncontrolledPopover>
                        <div className="m-4 px-16 pt-2 pb-2 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
                          <span className="font-semibold text-sm mb-1 text-center uppercase text-blueGray-700">
                            {createenvironment.gridSize}
                          </span>
                          <div className="text-center">
                            <Button
                              size="sm"
                              color="red"
                              onClick={() => this.modifyGridSize(-1)}
                            >
                              <i className="fas fa-minus" />
                            </Button>
                            <Button
                              size="sm"
                              color="lightBlue"
                              onClick={() => this.modifyGridSize(1)}
                            >
                              <i className="fas fa-plus" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-3/12 flex-col mt-4 mb-16">
                      <Tooltip
                        html={
                          <div className="flex flex-col text-left">
                            {createenvironment.help.messages.map((prop, key) => (
                              <div className="mb-2" key={key}>
                                <h4 className="font-bold">{prop.title}</h4>
                                <div>{prop.content}</div>
                              </div>
                            ))}
                          </div>
                        }
                        position="right"
                        arrow="true"
                      >
                        <div
                          id="tooltipHelpBuild"
                          className="mx-12 my-3 px-4 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg"
                        >
                          <div className="flex flex-col justify-center">
                            <div className="flex justify-center items-center title-up text-center my-2">
                              {createenvironment.help.title}
                              <i className="ml-1 text-lightBlue-700 text-lg fas fa-info-circle" />
                            </div>
                          </div>
                        </div>
                      </Tooltip>
                      {this.componentsList.map((prop, key) => (
                        <ListBlock
                          key={key}
                          displayAddWallButton={prop.displayAddWallButton === true}
                          addWall={() => this.onAddWall()}
                          displayAddButton={prop.displayAddButton === true}
                          addLine={() => this.onAddLine(key)}
                          content={prop.content}
                          colspan={3}
                          title={prop.title}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalLocationId}
          autoFocus={false}
          toggle={() => this.setModalLocationId(false)}
          className={"custom-modal-dialog sm:c-m-w-70"}
        >
          <LocationIdEdit
            element={this.state.currentIdInput}
            edit={this.editCurrentIdInput}
            save={this.saveLocation}
            close={() => this.setModalLocationId(false)}
            validName={this.validName}
            info={createenvironment.modal.inputId}
          />
        </Modal>
        <Modal
          isOpen={this.state.modalClassic}
          autoFocus={false}
          toggle={() => this.setModalClassic(false)}
          className={"custom-modal-dialog sm:c-m-w-70"}
        >
          <WorldEdit
            element={
              this.state.tmpLists[this.state.currentList][this.state.currentIndex]
            }
            number={this.state.currentIndex}
            list={this.state.lists[this.state.currentList]}
            mutexList={this.state.mutexList}
            editMutex={this.setMutexList}
            edit={this.editCurrentElement}
            save={this.saveCurrentElement}
            close={() => this.setModalClassic(false)}
            validName={this.validName}
            info={createenvironment.modal.world}
          />
        </Modal>
        <Modal
          isOpen={this.state.modalSaving}
          toggle={() => this.setModalSaving(false)}
          className={"custom-modal-dialog sm:c-m-w-70"}
        >
          <SavingEdit
            element={this.state.savingInfos}
            listOfNames={
              this.projectId === null ? this.props.worldNames : this.listOfNames
            }
            edit={this.editSavingInfos}
            save={this.saveWorld}
            close={() => this.setModalSaving(false)}
            info={createenvironment.modal.saving}
          />
        </Modal>
                <CustomFooter {...customfooter} />
      </>

    );
  }
}
