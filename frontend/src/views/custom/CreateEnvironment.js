import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Modal, PopoverBody, PopoverHeader, UncontrolledPopover, UncontrolledTooltip} from "reactstrap";

import footeradmin from "../../_texts/admin/footers/footeradmin";
import FooterAdmin from "../../components/Footers/Admin/FooterAdmin";
import Button from "../../components/Elements/Button";

import "../../components/Crome/IndexEnvironment";
import GridWorld from "../../components/Crome/IndexEnvironment";
import Location from "../../components/Custom/Location";
import ListBlock from "../../components/Custom/ListBlock";
import ListLine from "../../components/Custom/ListLine";
import WorldEdit from "../../components/Crome/WorldEdit";

import arrayEquals from "../../hooks/arrayEquals";
import deleteSubArrays from "../../hooks/deleteSubArrays";

import createenvironment from "_texts/custom/createenvironment.js";

import SavingEdit from "../../components/Custom/SavingEdit";
import LocationIdEdit from "../../components/Custom/LocationIdEdit";
import {Link} from "react-router-dom";
import CustomDownload from "../../components/Custom/CustomDownload";


export default class CreateEnvironment extends React.Component {

    state = {
        lists: [[], [], [], []],
        editedLists: [[], [], [], []],
        mutexGroups: [[], [], []],
        mutexList: [],
        colors: [],
        numChildren: [0, 0, 0, 0],
        errorMsg: "",
        warningPop: false,
        currentList: 0,
        currentIndex: 0,
        savingInfos: {name: "", description: ""},
        currentIdInput: "",
        modalClassic: false,
        modalSaving: false,
        modalLocationId: false,
        node: false,
        gridJson: null,
        environmentToBeSaved: null,
        myCanvas : null,
        started : false,
        locations : []
    }

    /* GENERAL FUNCTIONS */
    starting() {
        this.setState({
            started : true
        })
        this.map = this.buildMap(this.map, this.size)
        this.deleteAllElements()
        if (this.props.world !== null) {
            this.setState({
                savingInfos: this.props.world.info
            })
            this.generateGridworldWithJSON()
        }
        else {
            this.generateGridworld()
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.myCanvas !== null && !this.state.started) {
            this.starting();
            this.setState({
                started : true
            })
        }
        this.listOfNames = []
        if (this.props.world !== null) {
            this.listOfNames = this.getListWithoutElement(this.props.worldNames, this.props.world.info.name)
        }
        if (this.props.returnedProjectId !== null) {
            this.inputElement.scrollIntoView();
        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
    }

    setModalClassic = (bool) => {
        if (!bool) {
            this.setState({
                editedLists: this.state.lists,
            })
        }

        this.setState({
            modalClassic: bool,
        })
    }

    setModalSaving = (bool) => {
        if (!bool) {
            if (this.props.world === null) {
                this.setState({
                    savingInfos: {name: "", description: ""}
                })
            }
            else {
                this.setState({
                    savingInfos: this.props.world.info
                })
            }
        }
        this.setState({
            modalSaving: bool,
        })
    }

    setModalLocationId = (bool, saved = false) => {
        if (!bool) {
            this.setState({
                currentIdInput: ""
            })
            if (!saved) {
                let nodesTmp = this.world.cancelFirstClick()
                for(let i=0 ; i<this.map.length ; i++) {
                    for(let j=0 ; j<this.map.length ; j++) {
                        this.map[i][j][0] = nodesTmp[i*this.map.length+j].backgroundColor
                    }
                }
                this.world.draw()
            }
        }
        else {
            this.world.setSelectionInGray()
        }
        this.setState({
            modalLocationId: bool,
        })
    }

    callbackMap = (map) => {
        this.map = map
    }

    updateErrorMsg = (msg) => {
        if (msg !== "") {
            this.setState({
                errorMsg: msg,
                warningPop: true
            });
            setTimeout(() => {
                this.setState({warningPop: false});
            }, 4000)
        }
        else {
            this.setState({
                warningPop: false
            })
        }
    }

    editSavingInfos = (element) => {
        this.setState({
            savingInfos: element,
        });
    }

    saveWorld = () => {
        this.setModalSaving(false)
        this.props.saveEnvironment(this.state.savingInfos, this.state.environmentToBeSaved)

        /*this.setState({
            triggerSave: true,
        }/*, () => );*/
    }

    goToIndex = () => {
        this.inputElement.click()
    }

    getListWithoutElement = (array, element) => {
        let arrayCopy = JSON.parse(JSON.stringify(array))
        arrayCopy.splice(arrayCopy.indexOf(element), 1)
        return arrayCopy
    }
    /* GENERAL FUNCTIONS */


    /* LISTS (Locations/Actions/Sensors) FUNCTIONS */
    onAddLocation = (id, color) => {
        let tmpLists = this.state.lists
        let tmpColors = this.state.colors

        if (!tmpLists[0].includes(id)) {
            tmpLists[0].push(id)
            tmpColors.push(color)

            let tmpNumChildren = this.state.numChildren
            tmpNumChildren[0]++

            this.setState({
                lists: tmpLists,
                editedLists: tmpLists,
                colors: tmpColors,
                numChildren: tmpNumChildren
            })
        }
    }

    onAddLine = (index) => {

        let tmpLists = JSON.parse(JSON.stringify(this.state.lists))

        tmpLists[index].push("")

        this.setState({
            editedLists: tmpLists,
        },() => this.editLine(index, this.state.numChildren[index]))

    }

    editLine = (listIndex, elementIndex) => {
        this.setState({
            currentList: listIndex,
            currentIndex: elementIndex,
        },() => this.setState({
            mutexList: this.getMutexElements(this.state.editedLists[listIndex][elementIndex])
        }, () => this.setModalClassic(true)))
    }

    addAllLocations = (locations) => {
        let tmpLists = this.state.lists
        let tmpColors = []

        tmpLists[0] = []

        for (let i=0; i<locations.length; i++) {
            if (!tmpLists[0].includes(locations[i].id)) {
                tmpLists[0].push(locations[i].id)
                tmpColors.push(locations[i].color)
            }
        }

        let tmpNumChildren = this.state.numChildren
        tmpNumChildren[0] = locations.length

        this.setState({
            lists: tmpLists,
            colors: tmpColors,
            numChildren: tmpNumChildren
        })
    }

    addAllElements = (list, index) => {
        let tmpLists = this.state.lists
        let tmpMutex = this.state.mutexGroups

        tmpLists[index] = []
        tmpMutex[index-1] = []

        for (let i=0; i<list.length; i++) {
            tmpLists[index].push(list[i].name)
            if (list[i].mutex_group !== undefined && Array.isArray(list[i].mutex_group)) {
                for (let j=0; j<list[i].mutex_group.length; j++) {
                    if (tmpMutex[index-1][list[i].mutex_group[j]] === undefined) tmpMutex[index-1][list[i].mutex_group[j]] = []
                    tmpMutex[index-1][list[i].mutex_group[j]].push(list[i].name)
                }
            }
        }

        let tmpNumChildren = this.state.numChildren
        tmpNumChildren[index] = list.length

        this.setState({
            lists: tmpLists,
            numChildren: tmpNumChildren,
            mutexGroups: tmpMutex
        })
    }

    editCurrentElement = (newElement) => {
        this.setState( state => {
            const editedLists = state.editedLists.map((list, j) => {
                if (j === this.state.currentList) {
                    return list.map((item, k) => {
                        if (k === this.state.currentIndex) {
                            return newElement
                        } else {
                            return item
                        }
                    })
                } else {
                    return list
                }
            })
            return {
                editedLists,
            }
        })
    }

    saveCurrentElement = (newElement, mutexArray) => {

        if (this.state.currentIndex >= this.state.numChildren[this.state.currentList]) { // Saving after a new element is created, i.e. not an edited existing element
            let tmpLists = this.state.lists
            let tmpNumChildren = this.state.numChildren

            tmpLists[this.state.currentList].push("")
            tmpNumChildren[this.state.currentList]++

            this.setState({
                lists: tmpLists,
                numChildren: tmpNumChildren
            })
        }

        this.setState( state => {
            const lists = state.lists.map((list, j) => {
                if (j === this.state.currentList) {
                    return list.map((item, k) => {
                        if (k === this.state.currentIndex) {
                            this.deleteEveryMutexOccurrenceOf(item) // deleting every occurrence of the old element in mutexGroups before replacing it
                            return newElement
                        } else {
                            return item
                        }
                    })
                } else {
                    return list
                }
            })
            return {
                lists,
            }
        }, () => {this.setState({
            editedLists: this.state.lists,
        }); this.updateMutexArray(newElement, mutexArray)})

        this.setModalClassic(false)
    }

    deleteElement = (listIndex, elementIndex) => {

        let tmpLists = this.state.lists
        let tmpNumChildren = this.state.numChildren

        if (listIndex === 0) {
            let tmpColors = this.state.colors
            tmpColors.splice(elementIndex, 1)
            this.setState({
                colors: tmpColors,
            })
            this.removeId(this.state.lists[listIndex][elementIndex])
            this.state.locations = this.state.locations.filter(item => item[1] !== this.state.lists[listIndex][elementIndex])
        } else {
            this.deleteEveryMutexOccurrenceOf(this.state.lists[listIndex][elementIndex], listIndex)
        }


        this.componentsList[listIndex].content.splice(elementIndex, 1)
        tmpLists[listIndex].splice(elementIndex, 1)
        tmpNumChildren[listIndex]--
        this.setState({
            lists: tmpLists,
            editedLists: tmpLists,
            numChildren: tmpNumChildren,
            currentList: listIndex
        }, () => {if (listIndex !== 0) this.cleanMutexGroups()})

    }

    deleteAllElements = () => {
        let tmpLists = this.state.lists
        let tmpNumChildren = this.state.numChildren

        for (let i=0; i<tmpLists[0].length; i++) {
            this.removeId(tmpLists[0][i])
        }

        for (let i=0; i<tmpLists.length; i++) {
            tmpLists[i] = []
            tmpNumChildren[i] = 0
            this.componentsList[i].content = []
        }

        this.setState({
            lists: tmpLists,
            editedLists: tmpLists,
            mutexGroups: [[], [], []],
            colors: [],
            numChildren: tmpNumChildren
        })
    }

    clearEnvironment = () => {
        this.deleteAllElements()
        this.clearGridworld()
    }

    editCurrentIdInput = (element) => {
        this.setState({
            currentIdInput: element,
        });
    }

    validName = (element, isLocation = false) => { // checking if the given name is valid, i.e. not empty and not already existing in any list
        if (element === "") return false
        let lists = this.state.lists
        let i = isLocation ? 1 : 0 // the list of locations is the only list where we can add an already existing element (to increase the size of a location)
        let currentList = isLocation ? 0 : this.state.currentList
        for (i; i<lists.length; i++) {
            for (let j = 0; j<lists[i].length; j++) {
                if (lists[i][j] === element &&! (i === currentList && j === this.state.currentIndex)) return false
            }
        }
        return true
    }
    /* LISTS (Locations/Actions/Sensors) FUNCTIONS */


    /* MUTEX FUNCTIONS */
    updateMutexArray = (newElement, mutexArray) => {
        this.deleteEveryMutexOccurrenceOf(newElement) // deleting every occurrence of the element before placing it again at the right place
        let flag = true
        let mutexGroup = this.state.mutexGroups[this.state.currentList-1]

        for (let i=0; i<mutexGroup.length; i++) {
            mutexGroup[i].sort()
        	if (arrayEquals(mutexGroup[i], mutexArray)) {
        		mutexGroup[i].push(newElement)
        		flag = false
        		break
        	}
        }
        if (flag) {
            if (mutexArray.length === 0) {
        		mutexGroup.push([newElement]);
        	}
        	else {
                for (let i = 0; i < mutexArray.length; i++) {
                    mutexGroup.push([newElement, mutexArray[i]]);
                }
            }
        }
        this.cleanMutexGroups()
    }

    deleteEveryMutexOccurrenceOf = (element, list = false) => {
        let currentList = list || this.state.currentList
        let mutexGroup = this.state.mutexGroups[currentList-1]
        for (let i=0; i<mutexGroup.length; i++) {
            let index = mutexGroup[i].indexOf(element)
            if (index !== -1) {
                mutexGroup[i].splice(index, 1)
            }
        }
    }

    cleanMutexGroups = () => { // deleting doubles and empty arrays
        let mutexGroups = this.state.mutexGroups
        let mutexGroup = mutexGroups[this.state.currentList-1]
        let newArray = []
        let found = {}
        for (let i=0; i<mutexGroup.length; i++) {
            let jsonArray = JSON.stringify(mutexGroup[i])
            if (found[jsonArray] || jsonArray === "[]") { continue }
            newArray.push(mutexGroup[i])
            found[jsonArray] = true
        }

        newArray = deleteSubArrays(newArray)

        mutexGroups[this.state.currentList-1] = newArray
        this.setState({
            mutexGroups: mutexGroups
        })
    }

    getMutexElements = (element) => { // get every element exclusive to the specified element
        let elements = []
        let mutexGroup = this.state.mutexGroups[this.state.currentList - 1]
        if(this.state.currentList > 0) {
            for (let i = 0; i < mutexGroup.length; i++) {
                if (mutexGroup[i].includes(element)) {
                    for (let j = 0; j < mutexGroup[i].length; j++) {
                        if (!elements.includes(mutexGroup[i][j]) && mutexGroup[i][j] !== element) {
                            elements.push(mutexGroup[i][j])
                        }
                    }
                }
            }
        }
        return elements
    }

    setMutexList = (mutexList) => {
        this.setState({
            mutexList: mutexList
        })
    }

    getEveryIndexOf = (element, currentList) => {
        let elements = []
        let mutexGroup = this.state.mutexGroups[currentList - 1]
        for (let i = 0; i < mutexGroup.length; i++) {
            if (mutexGroup[i].includes(element) && mutexGroup[i].length > 1) {
                elements.push(i)
            }
        }
        return elements
    }
    /* MUTEX FUNCTIONS */


    /* GRID FUNCTIONS */
    constructor(props) {
        super(props);
        this.test = React.createRef();
        this.saveInToJSON = this.saveInToJSON.bind(this);
        this.map = [];
        this.clearGridworld = this.clearGridworld.bind(this);
        this.removeId = this.removeId.bind(this);
        this.world = null;
        this.size = 8;
        this.componentsList = [];
        this.projectId = null;
    }

    generateGridworld() {
        if (this.world !== null) {
            this.world.onclick = null
        }
        this.world = this.buildGrid(this.state.myCanvas, this.size, this.map, this.onAddLocation, this.callbackMap, this.updateErrorMsg, this.setNode)
        this.world.clearAttributeTable();
    }

    setRef = (ref) => {
        this.setState({
            myCanvas : ref.current
        })
    }


    generateGridworldWithJSON() {
        const json = this.props.world.environment

        const locations = json.grid.locations;
        const actions = json.actions;
        const sensors = json.sensors;
        const context = json.context;

        let  x;
        let  y;
        this.map = this.buildMap(this.map, (json.size.width / 2));
        for (let i = 0; i < locations.length; i++) {
            for (let j = 0; j < locations[i].coordinates.length; j++) {
                x = locations[i].coordinates[j].x * 2 - 1;
                y = locations[i].coordinates[j].y * 2 - 1;
                this.map[x][y] = [locations[i].color, true, locations[i].id];

            }
        }

        this.displayWall("horizontal", json);
        this.displayWall("vertical", json);
        let leftColor;
        let aboveColor;

        for (let i = 1; i < json.size.width; i++) {
            for (let j = 1; j < json.size.width; j++) {
                if (i % 2 !== 1 || j % 2 !== 1 ) {
                    this.checkNeighbour(this.map, i, j);
                }
            }
        }
        for (let i = 2; i < json.size.width; i+= 2) {
            for (let j = 2; j < json.size.width; j+= 2) {
                this.checkNeighbour(this.map, i, j);
            }
        }
        for (let i = 2; i < json.size.width; i+= 2) {
            aboveColor = this.map[i - 1][0][0];
            if (aboveColor === this.map[i + 1][0][0] && aboveColor !== "white") {
                this.map[i][0] = this.map[i - 1][0];
            }
        }
        for (let j = 2; j < json.size.width; j+= 2) {
            leftColor = this.map[0][j - 1][0];
            if (leftColor === this.map[0][j+ 1 ][0] && leftColor !== "white") {
                this.map[0][j] = this.map[0][j - 1];
            }
        }
        this.projectId = json.project_id
        this.addAllLocations(locations)
        this.addAllElements(actions, 1)
        this.addAllElements(sensors, 2)
        this.addAllElements(context, 3)
        if (this.world !== null) this.world.onclick = null;
        this.size = (json.size.width / 2);
        this.world = this.buildGrid(this.state.myCanvas, (json.size.width / 2), this.map, this.onAddLocation, this.callbackMap, this.updateErrorMsg, this.setNode);
        this.world.actualiseIsColorTable();
    }

    buildGrid(canvas, size, map, addLocation, callbackMap, updateErrorMsg, setNode) {
        if (map.length === 0) {
            this.map = this.buildMap(map, size);
        }

        let world = new GridWorld(canvas, size, size, {
            padding: {top: 10, left: 10, right: 10, bottom: 60},
            resizeCanvas: true,
            drawBorder: true
        });

        world.clearAttributeTable()

        world.onclick = function (node) {
            /*
            start is an array where the coordinates of the first click are stored if it is a cell
            end is an array where the coordinates of the second click are stored if it is a cell
            startWall is an array where the coordinates of the first click are stored if it is a wall
            endWall is an array where the coordinates of the first click are stored if it is a wall
            previousStartColor is a variable where the colour before the first click is stored if it is a cell
            previousColorWall is a variable where the colour before the first click is stored if it is a wall
            */
            updateErrorMsg("")

            let start = world.getStart();
            let startWall = world.getStartWall();
            let endWall = world.getEndWall();
            let previousStartColor = world.getPreviousStartColor();
            let previousColorWall = world.getPreviousColorWall();

            if (startWall.length !== 0 && start.length !== 0) {
                world.resetCellWall(start, startWall, previousStartColor, previousColorWall);
                return;
            }
            if (node.x % 2 === 1 && node.y % 2 === 1) { // if the user click on a cell
                if (start.length !== 0) { // when it's the second click, open the modal to get the Id entered by the user
                    world.setClickedNode(node.x, node.y)
                    setNode(node)
                } else { // when it's the first click, color the cell with a "light" color so the user know that he needs to click on a other cell
                    if (startWall.length !== 0) {
                        world.resetCellWall(startWall, null, previousColorWall, null);
                        return;
                    }
                    start.push(node.x);
                    start.push(node.y);
                    world.setPreviousStartColor(world.getBackgroundColor(start[0], start[1]));
                    world.setBackgroundColor(node.x, node.y, "lightgray");
                }
            } else if ((node.x % 2 === 0 && node.y % 2 === 1) || (node.x % 2 === 1 && node.y % 2 === 0)) { // when you click on wall cell
                if (startWall.length !== 0) { // when it's the second click
                    endWall.push(node.x);
                    endWall.push(node.y);
                    let min;
                    let max;

                    if (startWall[0] === endWall[0] && startWall[1] === endWall[1]) { // when you double-click on a wall
                        if (previousColorWall === "black") { // if the wall was black the background color will be white
                            world.setColorIdBlocked(startWall[0], startWall[1], "white", false, null);
                            world.reset();
                            world.updateMap(map);
                        } else if (previousColorWall === "white" || previousColorWall === null) { // if the wall was white the background color will be black
                            world.setColorIdBlocked(startWall[0], startWall[1], "black", true, null);
                            world.reset();
                            world.updateMap(map);
                        }
                    } else if (startWall[0] === endWall[0]) { // when the users select a column
                        if (startWall[0] % 2 === 1) { // when he clicks on a case that he can't choose
                            updateErrorMsg(createenvironment.errorMsg.wallLine)
                            world.errorMessage(startWall, previousColorWall);
                            world.resetCellWall(startWall, null, previousColorWall, null);
                            return;
                        } else {
                            min = world.min(startWall[1],endWall[1])[0];
                            max = world.min(startWall[1],endWall[1])[1];
                            for (let i = min; i < max + 1; i += 1) {
                                if ((world.isBlocked(startWall[0], i) && world.getBackgroundColor(startWall[0], i) !== "black") && previousColorWall !== "black") {// if there is a block of colour in the selected column
                                    updateErrorMsg(createenvironment.errorMsg.wallInsideBlock)
                                    world.errorMessage(startWall, previousColorWall);
                                    world.resetCellWall(startWall, null, previousColorWall, null);
                                    return;
                                }
                            }
                            for (let i = min; i < max +1; i+= 1) {
                                world.setBackgroundColorWall(startWall[0], i, previousColorWall);
                            }
                            world.updateMap(map);
                        }
                    } else if (startWall[1] === endWall[1]) { // when the users select a line
                        if (startWall[1] % 2 === 1) { // when he clicks on a case that he can't choose
                            updateErrorMsg(createenvironment.errorMsg.wallLine)
                            world.errorMessage(startWall, previousColorWall);
                            world.resetCellWall(startWall, null, previousColorWall, null);
                            return;
                        } else {
                            min = world.min(startWall[0],endWall[0])[0];
                            max = world.min(startWall[0],endWall[0])[1];

                            for (let i = min; i < max + 1; i += 1) {
                                if ((world.isBlocked(i, startWall[1]) && world.getBackgroundColor(i, startWall[1]) !== "black" ) && previousColorWall !== "black") { // if there is a block of colour in the selected column
                                    updateErrorMsg(createenvironment.errorMsg.wallInsideBlock)
                                    world.errorMessage(startWall, previousColorWall);
                                    world.resetCellWall(startWall, null, previousColorWall, null);
                                    return;
                                }
                            }
                            for (let i = min; i < max +1; i+= 1) {
                                world.setBackgroundColorWall(i, startWall[1], previousColorWall);
                            }
                            world.updateMap(map);
                        }
                    } else {
                        world.setBackgroundColor(startWall[0], startWall[1], "white");
                        updateErrorMsg(createenvironment.errorMsg.wallLine)
                    }
                    world.reset();
                }
                else { // when it's the first click, color the cell with a "light" color so the user know that he needs to click on a other cell
                    if (start.length !== 0) {
                        world.resetCellWall(start, null, previousStartColor, null);
                        return;
                    }
                    startWall.push(node.x);
                    startWall.push(node.y);
                    world.setPreviousColorWall(world.getBackgroundColor(startWall[0], startWall[1]));
                    if (world.getBackgroundColor(node.x, node.y) === "white" || world.getBackgroundColor(node.x, node.y) === "black") {
                        world.setBackgroundColor(node.x, node.y, "lightgray");
                    } else { // when he clicks on a case that he can't choose
                        updateErrorMsg(createenvironment.errorMsg.wallInsideBlock)
                        world.reset();
                        return;
                    }
                }
            }
            world.drawCorner(map);
            callbackMap(map)
            world.updateMap(map);
        }
        updateErrorMsg("")

        for (let i = 0; i < size * 2 + 1; i++) {
            for (let j = 0; j < size * 2 + 1; j++) {
                world.setColorIdBlocked(i, j, map[i][j][0], map[i][j][1], map[i][j][2]);
            }
        }

        return world;
    }

    buildMap(map, size) {
        map = [];
        for (let i = 0; i < size * 2 + 1; i++) {
            map[i] = [];
            for (let j = 0; j < size * 2 + 1; j++) {
                map[i].push(["white", false, null]);
            }
        }
        return map
    }

    drawLocation = () => {

        let limits = this.world.getLimits()
        let previousColorArray = this.world.getPreviousColorArray()
        const answer = this.world.askToColor(this.state.currentIdInput, limits.minX, limits.maxX, limits.maxY, limits.minY, previousColorArray, this.map, this.updateErrorMsg);
        this.world.updateMap(this.map);
        if (answer !== false) {
            const color = answer[0];
            const id = answer[1];
            if (document.getElementById(id) === null || document.getElementById(id).innerHTML === "") {
                this.onAddLocation(id, color)
                const found = this.state.locations.some(item => item[1] === id)
                if (!found) {
                    this.removeCoveredLocations(limits)
                    this.state.locations.push([limits, id])
                }
                else {
                    this.replaceLocation(limits,id)
                }
            }
        }
        this.setModalLocationId(false, true)
    }

    replaceLocation(limits,id) {
        for (const location of this.state.locations) {
            if (id === location[1]) {
                if (limits.minX < location[0].minX || limits.minY < location[0].minY) {
                    location[0].minX = limits.minX
                    location[0].minY = limits.minY
                }

                if (limits.maxX > location[0].maxX || limits.maxY > location[0].maxY) {
                    location[0].maxX = limits.maxX
                    location[0].maxY = limits.maxY
                }
            }
        }
    }

    removeCoveredLocations(limits) {
        for (const location of this.state.locations) {
            if ((limits.minX <= location[0].minX && limits.minY <= location[0].minY ) && (limits.maxX >= location[0].maxX && limits.maxY >= location[0].maxY )) {
                let index = this.state.locations.indexOf(location)
                this.deleteElement(0,index)
            }
        }
    }


    modifyGridSize(increment) {

        this.size += increment

        let oldMap = this.map;
        let maxIdX = 0; // table corresponding to the node with the largest x as abscissa and its colour
        let minIdX = this.map.length; // table corresponding to the node with the smallest x abscissa and its colour
        let minIdY = this.map[0].length; // table corresponding to the node with the smallest y and its colour as ordinates
        let maxIdY = 0; // table corresponding to the node with the largest x and its colour as ordinates
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[0].length; j++) { // if the color of the node is not white check if it is the point corresponding to one of the 4 ends
                if (this.map[i][j][0] !== "white") {
                    minIdX = this.end(minIdX, i, this.map[i][j][0], minIdX >= i);
                    minIdY = this.end(minIdY, j, this.map[i][j][0], minIdY >= j);
                    maxIdX = this.end(maxIdX, i, this.map[i][j][0], maxIdX <= i);
                    maxIdY = this.end(maxIdY, j, this.map[i][j][0], maxIdY <= j);
                }
            }
        }
        let oldSizeX = maxIdX - minIdX + 1;
        let oldSizeY = maxIdY - minIdY + 1;
        let isInX = (this.size * 2 + 1) - oldSizeX;
        let isInY = (this.size * 2 + 1) - oldSizeY;

        if (isInX <= 0 || isInY <= 0) {
            this.updateErrorMsg(createenvironment.errorMsg.gridTooSmall);
            this.size -= increment
        }
        else {
            let leftBorderX = Math.trunc(isInX / 2);
            let topBorderY = Math.trunc(isInY / 2);
            leftBorderX = this.shift(leftBorderX, minIdX);
            topBorderY = this.shift(topBorderY, minIdY);

            this.map = [];

            this.map = this.buildMap(this.map, this.size);

            for (let i = leftBorderX; i < leftBorderX + oldSizeX; i++) {
                for (let j = topBorderY; j < topBorderY + oldSizeY; j++) {
                    this.map[i][j] = oldMap[minIdX + i - leftBorderX][minIdY + j - topBorderY];
                }
            }

            this.world.onclick = null
            this.world = this.buildGrid(this.state.myCanvas, this.size, this.map, this.onAddLocation, this.callbackMap, this.updateErrorMsg, this.setNode)
        }
    }

    end(a, i, color, bool) {
        if (bool && (a !== i || color !== "black")) { // if there are several points corresponding to one end, the one that does not have the colour black is chosen
            a = i;
        }
        return a;
    }

    shift(border, index) {
        if (border % 2 !== index % 2) border++;
        return border;
    }

    checkNeighbour(map, i, j) {
        const aboveColor = this.map[i - 1][j][0];
        const leftColor = this.map[i][j - 1][0];
        if (aboveColor === this.map[i + 1][j][0] && aboveColor !== "white") {
            this.map[i][j] = this.map[i - 1][j];
        } else if (leftColor === this.map[i][j + 1][0] && leftColor !== "white") {
            this.map[i][j] = this.map[i][j - 1];
        }
    }

    displayWall(orientation, json) {
        const wall = json.grid.walls[orientation];
        let x;
        let y;
        let direction1;
        let direction2;
        if (orientation === "horizontal") {
            direction1 = "left";
            direction2 = "right";
        }
        else {
            direction1 = "up";
            direction2 = "down";
        }
        for (let i = 0; i < wall.length; i++) {
            x = ((wall[i][direction1].x * 2 - 1) + (wall[i][direction2].x * 2 - 1)) / 2 ;
            y = ((wall[i][direction1].y * 2 - 1) + (wall[i][direction2].y * 2 - 1)) / 2 ;
            this.map[x][y] = ["black", true, null];
        }
    }

    removeId(idToRemove) {
        this.world.removeAttribute(idToRemove);
        this.world.updateMap(this.map);
        this.world.reset();
    }

    clearGridworld() {
        this.world.clearAttributeTable()
        this.world.resetInColorTable()
        const context = this.state.myCanvas.getContext('2d')
        context.clearRect(0, 0, this.state.myCanvas.width, this.state.myCanvas.height)
        this.map = this.buildMap(this.map, this.size);
        this.world.onclick = null
        this.world = this.buildGrid(this.state.myCanvas, this.size, this.map, this.onAddLocation, this.callbackMap, this.updateErrorMsg, this.setNode)
    }

    saveInToJSON() {
        const idTable = this.world.getIdTable();
        let obj = {filetype: "environment", project_id: this.projectId};
        obj.size = {width: this.size * 2, height: this.size * 2};
        obj.grid = {locations : [], walls : {horizontal : [], vertical : []}};
        for (let i = 0; i < idTable.length; i++) {
            obj.grid.locations.push({coordinates : [], color : idTable[i][1], id : idTable[i][0]});
        }
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[0].length; j++) {
                if (this.map[i][j][0] !== "white" && this.map[i][j][2] !== null && i % 2 === 1 && j % 2 === 1) {
                    const index = this.world.isID(this.map[i][j][2]);
                    obj.grid.locations[index].coordinates.push({x : Math.trunc(i / 2) + 1, y : Math.trunc(j / 2) + 1})
                }
                else if (this.map[i][j][0] === "black") {
                    if (i % 2 === 1 && j % 2 === 0) {
                        obj.grid.walls.vertical.push({
                            up : {x : Math.trunc(i / 2) + 1, y : (j / 2)},
                            down : {x : Math.trunc(i / 2) + 1, y : (j / 2) + 1}
                        });
                    }
                    else if (i % 2 === 0 && j % 2 === 1) {
                        obj.grid.walls.horizontal.push({
                            left: {x: i / 2, y: Math.trunc(j / 2) + 1},
                            right: {x: (i / 2) + 1, y: Math.trunc(j / 2) + 1}
                        });
                    }
                }
            }
        }
        for (let i = 0; i < idTable.length; i++) {
            obj.grid.locations[i].adjacency = this.getAdjacencyTable(obj.grid.locations, i)
        }
        let lists = ["actions", "sensors", "context"]
        for (let i = 1; i < this.state.lists.length; i++) {
            obj[lists[i-1]] = []
            for (let j = 0; j < this.state.lists[i].length; j++) {
                obj[lists[i-1]][j] = {"name": this.state.lists[i][j]}
                let indexArray = this.getEveryIndexOf(this.state.lists[i][j], i)
                if (indexArray.length > 0) {
                    obj[lists[i-1]][j].mutex_group = indexArray
                }
            }
        }

        this.setState({
            environmentToBeSaved: obj,
        }, () => this.setModalSaving(true))
    }

    getAdjacencyTable(adjTable, i) {
        let list_adj = []
        for (let j = 0; j < adjTable.length; j++) {
            if (i !== j) {
                if (this.isAdjacent(adjTable[i]["coordinates"], adjTable[j]["coordinates"])) {
                    list_adj.push(adjTable[j]["id"])
                }
            }
        }
        return list_adj
    }

    isAdjacent(coord_a, coord_b) {
        for (let i = 0; i < coord_a.length; i++) {
            for (let j = 0; j < coord_b.length; j++) {
                if(Math.abs(coord_a[i]["x"] - coord_b[j]["x"]) + Math.abs(coord_a[i]["y"] - coord_b[j]["y"]) === 1) {
                    return true
                }
            }
        }
        return false
    }

    setNode = (node) => {
        this.setState({
            node: node,
        }, () => this.setModalLocationId(true))
    }
    /* GRID FUNCTIONS */

    render() {
        this.componentsList = createenvironment.componentsList

        for (let i = 0; i < this.state.numChildren[0]; i += 1) {
            this.componentsList[0].content[i]=(
                <Location
                    key={i}
                    name={this.state.lists[0][i]}
                    onClick={() => this.deleteElement(0, i)}
                    color={this.state.colors[i]}
                    statIconName={"fas fa-square"}
                    deleteIconName={"now-ui-icons ui-1_simple-remove"}
                />
            );
        }
        for (let k = 1; k < this.state.lists.length; k++) {
            for (let i = 0; i < this.state.numChildren[k]; i += 1) {
                this.componentsList[k].content[i]=(
                    <ListLine
                        key={(k-1)*this.state.numChildren[k] + i}
                        number={(k-1)*this.state.numChildren[k] + i}
                        name={this.state.lists[k][i]}
                        list={k-1}
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
        return (
            <>
                <Link to="/index" ref={input => this.inputElement = input}/>
                <div className="relative pt-32 pb-32 bg-orange-500">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap justify-center">
                                <h1 className="display-3 title-up text-white font-semibold text-center">{createenvironment.mainTitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-6 mx-auto w-full -mt-24">
                    <div className="mt-6 relative">
                        <div className="relative w-full overflow-hidden">
                            <div>
                                <div id="body" className="flex justify-center items-center">
                                    <div className="flex container px-4 justify-center">
                                        <div className="flex justify-center">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full ml-4">
                                                    <Link to="/index" className="hover-no-underline">
                                                        <Button color={createenvironment.buttons.back.color} outline={true}>
                                                            <i className={createenvironment.buttons.back.icon+" mr-2"}/>
                                                            {createenvironment.buttons.back.text}
                                                        </Button>
                                                    </Link>
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
                                                    <PopoverBody>
                                                        {this.state.errorMsg}
                                                    </PopoverBody>
                                                </UncontrolledPopover>
                                                <div className="m-4 px-16 pt-2 pb-2 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
                                                    <span className="font-semibold text-xs mb-1 text-center uppercase text-blueGray-700">
                                                        {createenvironment.gridSize}
                                                    </span>
                                                    <div className="flex pl-2">
                                                        <Button color="red" onClick={() => this.modifyGridSize(-1)}><i className="text-xl fas fa-minus-square"/></Button>
                                                        <Button color="lightBlue" onClick={() => this.modifyGridSize(1)}><i className="text-xl fas fa-plus-square"/></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 xl:w-3/12 flex-col mt-4">
                                            <div id="tooltipHelpBuild" className="m-4 px-4 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex justify-center items-center title-up text-center my-2">
                                                        {createenvironment.help.title}
                                                        <i className="ml-1 text-lightBlue-700 text-lg fas fa-info-circle"/>
                                                    </div>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        placement="right"
                                                        target="tooltipHelpBuild"
                                                    >
                                                        <div className="flex flex-col text-left">
                                                            {createenvironment.help.messages.map((prop, key) => (
                                                                <div className="mb-2" key={key}>
                                                                    <h4 className="font-bold">{prop.title}</h4>
                                                                    <div>{prop.content}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </UncontrolledTooltip>
                                                </div>
                                            </div>
                                            {this.componentsList.map((prop, key) => (
                                                <ListBlock
                                                    key={key}
                                                    displayAddButton={prop.displayAddButton === true}
                                                    addLine={() => this.onAddLine(key)}
                                                    content={prop.content}
                                                    colspan={3}
                                                    title={prop.title}
                                                />
                                            ))}
                                            <div className="m-4 px-4 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
                                                <div className="flex flex-col pl-2 pt-3 pb-3">
                                                    <Button color="amber" onClick={this.clearEnvironment}><i className="text-xl mr-2 fas fa-trash-alt"/>{createenvironment.buttons.clear}</Button>
                                                    <div className="mt-2"/>
                                                    <Button color="emerald" onClick={this.saveInToJSON}><i className="text-xl mr-2 fas fa-check-square"/>{this.projectId === null ? createenvironment.buttons.save : createenvironment.buttons.update}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterAdmin {...footeradmin} />
                </div>
                <Modal
                    isOpen={this.state.modalClassic}
                    autoFocus={false}
                    toggle={() => this.setModalClassic(false)}
                    className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                    <WorldEdit
                        element={this.state.editedLists[this.state.currentList][this.state.currentIndex]}
                        number={this.state.currentIndex}
                        list={this.state.lists[this.state.currentList]}
                        mutexList={this.state.mutexList}
                        editMutex={this.setMutexList}
                        edit={this.editCurrentElement}
                        save={this.saveCurrentElement}
                        close={() => this.setModalClassic(false)}
                        validName={this.validName}
                        info={createenvironment.modal.world}/>
                </Modal>
                <Modal
                    isOpen={this.state.modalSaving}
                    toggle={() => this.setModalSaving(false)}
                    className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                    <SavingEdit
                        element={this.state.savingInfos}
                        listOfNames={this.projectId === null ? this.props.worldNames : this.listOfNames}
                        edit={this.editSavingInfos}
                        save={this.saveWorld}
                        close={() => this.setModalSaving(false)}
                        info={createenvironment.modal.saving}/>
                </Modal>
                <Modal
                    isOpen={this.state.modalLocationId}
                    autoFocus={false}
                    toggle={() => this.setModalLocationId(false)}
                    className={"custom-modal-dialog sm:c-m-w-70 md:c-m-w-60 lg:c-m-w-50 xl:c-m-w-40"}>
                    <LocationIdEdit
                        element={this.state.currentIdInput}
                        edit={this.editCurrentIdInput}
                        save={this.drawLocation}
                        close={() => this.setModalLocationId(false)}
                        validName={this.validName}
                        info={createenvironment.modal.inputId}/>
                </Modal>
            </>
        );
    }
}