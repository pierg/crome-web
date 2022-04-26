import gridcolors from "_texts/custom/gridcolors.js";
import createenvironment from "_texts/custom/createenvironment.js";


function _n(val, def) {
  return (typeof val === 'number') ? val : def;
}

const floor = Math.floor;
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function Node(x, y, backgroundColor) {
  this.x = x;
  this.y = y;
  this.backgroundColor = backgroundColor || null;
  this.blocked = false;
}

Node.prototype = {
  toString: function() {
    return "<node x=" + this.x + " y=" + this.y + " blocked=" + this.blocked + ">";
  }
}

function GridWorld(canvas, width, height, options) {

  options = options || {};

  this.canvas  = canvas;
  this.ctx     = canvas.getContext('2d');
  this.width   = floor(width) * 2 ;
  this.height  = floor(height) * 2 ;

  let padding = options.padding;

  if (typeof padding === 'undefined') {
    padding = 0;
  }

  if (typeof padding === 'number') {
    this.padding = {
      top     : padding,
      right   : padding,
      bottom  : padding,
      left    : padding
    };
  } else {
    this.padding = padding;
  }

  this.cellSize = _n(options.cellSize, 25);
  this.cellSizeWall = _n(options.cellSize, 5);
  this.cellSpacing = _n(options.cellSpacing, 2);
  this.drawBorder = !!options.drawBorder;
  this.borderColor = options.borderColor || 'lightgrey';
  this.backgroundColor = options.backgroundColor || 'white';

  if (options.resizeCanvas) {
    let cw = this.padding.left + this.padding.right,
        ch = this.padding.top + this.padding.bottom;
    cw += ((this.width) * (this.cellSize +  this.cellSizeWall + this.cellSpacing));
    ch += ((this.height) * (this.cellSize + this.cellSizeWall + this.cellSpacing)) -  2 * this.cellSize;

    if (this.drawBorder) {
      cw += (this.cellSpacing * 2);
      ch += (this.cellSpacing * 2);
    }
    this.canvas.width = cw;
    this.canvas.height = ch;
  }
  this.nodes = [];

  for (let j = 0; j < this.height + 1; ++j) {
    for (let i = 0; i < this.width + 1; ++i) {
      this.nodes.push(new Node( i,j, null));
    }
  }

  //
  // Event handling
  // TODO: support dragging

  const self = this;

  this.onclick = options.onclick;

  function p2n(x, y) {
    x -= self.padding.left;
    y -= self.padding.top;

    if (self.drawBorder) {
      x -= (self.cellSpacing * 2);
      y -= (self.cellSpacing * 2);
    }
    let a = 2 * self.cellSpacing + 2 * self.cellSizeWall;
    const tabX = [a]; // array that gives the pixel from which we change nodes from the x-coordinate
    const tabY = [a]; // array that gives the pixel from which we change nodes from the y-coordinate

    for (let i = 0; i < self.width; i += 2) {
      a += 2 * self.cellSize;
      tabX.push(a);
      tabY.push(a);
      a += 2 * self.cellSizeWall + self.cellSpacing;
      tabX.push(a);
      tabY.push(a);
      a += self.cellSpacing;
    }
    let indexX = 0;
    if (x > tabX[0]) {
      indexX = 1;
    }
    while (x >= tabX[indexX] ) { // find out in which interval the clicked pixel is located from the x-coordinate
      indexX++;
    }
    let indexY = 0;
    if (y > tabY[0]) {
      indexY = 1;
    }
    while (y >= tabY[indexY] ) { // find out in which interval the clicked pixel is located from the y-coordinate
      indexY++;
    }
    if (indexX >= 0 && indexX < self.width + 3 * self.cellSizeWall && indexY >= 0 && indexY < self.height + 3 * self.cellSizeWall) { // associates the clicked pixel with a node
      return self.nodes[(indexY * (self.width + 1)) + indexX];
    }
    else {
      return null;
    }
  }

  canvas.addEventListener('click', function(evt) {
    if (!self.onclick)
      return;

    const node = p2n(evt.offsetX, evt.offsetY);

    if (node) {
      self.onclick(node);
      }
  });
}

let idTable = []
let colorTable = gridcolors.colors
let isColorTable = new Array(colorTable.length).fill(false)
let start =[]
let end =[]
let startWall =[]
let endWall =[]
let previousColorWall
let previousStartColor
let clickedNode = {x: false, y: false}
let previousColorArray = [];

GridWorld.prototype = {
  draw: function() {
    let csz = this.cellSize,
        csz2 = this.cellSizeWall,
        csp = this.cellSpacing,
        ctx = this.ctx,
        ix = 0;

    const bAdj = this.drawBorder ? this.cellSpacing : -this.cellSpacing,
        cAdj = this.drawBorder ? this.cellSpacing : 0;

    ctx.save();
    ctx.fillStyle = this.borderColor;
    ctx.fillRect(this.padding.left,
        this.padding.top,
        (( csz + csz2 + csp) * this.width) + 2 *csz2 + 2 * csp + bAdj,
        ((csz + csz2 + csp) * this.height) + 2 *csz2 + 2 * csp + bAdj);

    let cy = this.padding.top + cAdj;
    for (let j = 0; j < this.height + 1; ++j) {
      let cx = this.padding.left + cAdj;
      for (let i = 0; i < this.width + 1; ++i) { // draw a wall and then a cell (size times) each wall or cell represent one node
        const n = this.nodes[ix++];
        ctx.fillStyle = n.backgroundColor || this.backgroundColor;
        if ( j % 2 === 1 ) {
          cx = this.drawNode(i, ctx, cx, cy, csp, 2 * csz, 2 * csz, 2 * csz2, 2 * csz);
        }
        else {
          cx = this.drawNode(i, ctx, cx, cy, csp, 2 * csz, 2 * csz2, 2 * csz2, 2 * csz2);
        }
      }
      if (j % 2 === 1) {
        cy += 2 * csz + csp;
      }
      else {
        cy += 2 * csz2 + csp;
      }
    }

  },

  drawNode(i, ctx, cx, cy, csp, w1, h1, w2, h2) {
    if (i % 2 === 1) {
      ctx.fillRect(cx, cy, w1, h1);
      cx += w1 + csp;
    }
    else  {
      ctx.fillRect(cx, cy,w2, h2);
      cx += w2 + csp;
    }
    return cx;
  },

  get: function(x, y) {
    return this.nodes[(y * (this.width + 1)) + x];
  },

  getStart: function () {
    return start;
  },
  getStartWall: function () {
    return startWall;
  },
  getEnd: function () {
    return end;
  },
  getEndWall: function () {
    return endWall;
  },

  getPreviousStartColor :function () {
    return previousStartColor;
  },

  getPreviousColorWall :function () {
    return previousColorWall;
  },

  getBackgroundColor: function(x, y) {
    return this.nodes[(y *  (this.width + 1)) + x].backgroundColor;
  },

  getIdTable : function () {
    return idTable;
  },

  setPreviousStartColor: function (color) {
    previousStartColor = color;
  },

  setPreviousColorWall: function (color) {
    previousColorWall = color;
  },

  setBackgroundColor: function(x, y, color) {
    this.nodes[(y *  (this.width + 1)) + x].backgroundColor = color;
    this.draw();
  },

  setBackgroundColorWall: function(x, y, previousColorWall) {
    if (previousColorWall === "black") {
      this.setColorIdBlocked(x, y, "white", false, null);
    } else {
      this.setColorIdBlocked(x, y, "black", true, null);
    }
  },

  setClickedNode: function(x, y) {
    clickedNode.x = x
    clickedNode.y = y
  },

  chooseBackgroundColor: function () {
    for (let i = 0; i < isColorTable.length; i++) {
      if (isColorTable[i] === false) {
        isColorTable[i] = true;
        return colorTable[i];
      }
    }
    return false;
  },

  resetInColorTable() {
    for (let i = 0; i < isColorTable.length; i++) {
      isColorTable[i] = false;
    }
  },

  setInColorTable(color, bool) {
    for (let i = 0; i < isColorTable.length; i++) {
      if (colorTable[i] === color) {
        isColorTable[i] = bool;
      }
    }
  },

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },

  cancelFirstClick() {
    let limits = this.getLimits()

    for (let i = limits.minX; i < limits.maxX + 1; i += 1) {
      for (let j = limits.minY; j < limits.maxY + 1; j += 1) {
        this.setBackgroundColor(i, j, previousColorArray[i][j - limits.minY]);
      }
    }
    this.setBackgroundColor(start[0],start[1], previousStartColor)

    this.reset()
  },

  getLimits(push = true) {
    let start = this.getStart();
    let end = this.getEnd();

    if (push) {
      end.push(clickedNode.x)
      end.push(clickedNode.y)
    }

    return {minX: this.min(start[0], end[0])[0],
            maxX: this.min(start[0], end[0])[1],
            minY: this.min(start[1], end[1])[0],
            maxY: this.min(start[1], end[1])[1]}
  },

  getPreviousColorArray(push = true) {
    let previousColorArray = [];
    let limits = this.getLimits(push)
    let start = this.getStart();

    for (let i = limits.minX; i < limits.maxX + 1; i += 1) {
      previousColorArray[i] = [];
      for (let j = limits.minY; j < limits.maxY + 1; j += 1) {
        previousColorArray[i].push(this.getBackgroundColor(i, j));
      }
    }
    previousColorArray[start[0]][start[1] - limits.minY] = previousStartColor;
    return previousColorArray
  },

  setSelectionInGray() {
    let limits = this.getLimits(true)

    for (let i = limits.minX; i < limits.maxX + 1; i += 1) {
      previousColorArray[i] = [];
      for (let j = limits.minY; j < limits.maxY + 1; j += 1) {
        previousColorArray[i].push(this.getBackgroundColor(i, j))
        this.setBackgroundColor(i, j, "#9b9b9b");
      }
    }
  },

  askToColor(id, minX, maxX, maxY, minY, previousColorArray, map, callbackError) {
    if (id === null || id === "") {
      this.cancelFirstClick()
      this.reset();
      return false;
    }
    else {
      let color;
      let index = this.isID(id);
      if (index !== false) {
        color = idTable[index][1];
      } else {
        color = this.chooseBackgroundColor();
      }
      let newBlock = [];
      for (let i = minX; i < maxX + 1; i += 1) {
        for (let j = minY; j < maxY + 1; j += 1) {
          newBlock.push([id, i, j]);
        }
      }
      if (this.validMap(map, newBlock, color)) {
        for (let i = minX; i < maxX + 1; i += 1) {
          for (let j = minY; j < maxY + 1; j += 1) {
            this.checkNeighbour(i, j, color); //if the cell has already a color, color his neighbors in white except if there is a wall
            this.setColorIdBlocked(i, j, color, true, id);
          }
        }
        this.reset();
        return [color, id];
      }

      else {
        this.cancelFirstClick();
        callbackError(createenvironment.errorMsg.splitLocations)
        this.reset();
        return false;
      }
    }
  },

  isBlocked: function(x, y) {
    return this.nodes[(y *  (this.width + 1)) + x].blocked;
  },

  setBlocked: function(x, y, blocked) {
    this.nodes[(y *  (this.width + 1)) + x].blocked = !!blocked;
  },


  setAttribute: function(x, y, key, value) {
    this.nodes[(y * (this.width + 1)) + x][key] = value;
    if (this.isID(value) === false && this.getBackgroundColor(x,y) !== "white" && this.getBackgroundColor(x,y) !== "black") { // if the value entered by the user has not already been selected, this value is added to the array :idTable
      idTable.push([value,this.getBackgroundColor(x,y)]);
    }
  },

  removeAttribute: function(value) {
    if (this.isID(value) !== false) {
      const index = this.isID(value);
      const color = idTable[index][1];
      this.setInColorTable(color, false);
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          if (this.getAttribute(i, j, "id") === value) {
            this.setColorIdBlocked(i, j, "white", false, null);
          }
        }
      }
      this.clearAttribute(value);
      this.draw();
      return true;
    }
    return false;
  },

  isID : function(value) { // checks if an id is in the array : idTable
       for (let i = 0; i < idTable.length ; i++) {
          if (idTable[i][0] === value) {
            return i;
          }
       }
       return false;
  },

  clearAttribute: function(value) {
      let index = -1;
      for (let i = 0; i < idTable.length; i++) {
        if (idTable[i][0] === value) {
          index = i;
        }
      }
      let a = idTable[index];
      idTable[index] = idTable[idTable.length - 1];
      idTable[idTable.length - 1] = a;
      idTable.pop();
  },

  getAttribute: function(x, y, key) {
     return this.nodes[(y * (this.width + 1)) + x][key];
  },

  clearAttributeTable: function () {
    idTable = [];
    isColorTable = new Array(colorTable.length).fill(false)
  },

  checkNeighbour: function (i, j, color) {
    let corner = [];
    if (this.getBackgroundColor(i, j) !== color) {
      if (this.getBackgroundColor(i + 1, j) !== color && this.getBackgroundColor(i + 1, j) !== "black" && this.getBackgroundColor(i + 1, j) !== "white") {
        this.setColorIdBlocked(i + 1, j, "white", false, null);
        corner.push(i+1);

      }
      if (this.getBackgroundColor(i - 1, j) !== color && this.getBackgroundColor(i - 1, j) !== "black" && this.getBackgroundColor(i - 1, j) !== "white") {
        this.setColorIdBlocked(i - 1, j, "white", false, null);
        corner.push(i-1);

      }
      if (this.getBackgroundColor(i, j - 1) !== color && this.getBackgroundColor(i, j - 1) !== "black" && this.getBackgroundColor(i, j - 1) !== "white") {
        this.setColorIdBlocked(i, j - 1, "white", false, null);
        corner.push(j-1);

      }
      if (this.getBackgroundColor(i, j + 1) !== color && this.getBackgroundColor(i, j + 1) !== "black" && this.getBackgroundColor(i, j + 1) !== "white") {
        this.setColorIdBlocked(i, j + 1, "white", false, null);
        corner.push(j+1);
      }
      if (corner.length === 2) {
        this.setColorIdBlocked(corner[0], corner[1], "white", false, null);
      }
      if (corner.length === 4) {
        this.setColorIdBlocked(corner[0], corner[2], "white", false, null);
        this.setColorIdBlocked(corner[1], corner[3], "white", false, null);
        this.setColorIdBlocked(corner[0], corner[3], "white", false, null);
        this.setColorIdBlocked(corner[1], corner[2], "white", false, null);
      }
    }
  },

  setColorIdBlocked :function(i, j, color, blocked, id) {
    this.setBackgroundColor(i, j, color); // color the cell with the color choose by the user
    this.setBlocked(i, j, blocked);
    if (id !== null) {
      this.setAttribute(i, j, "id", id); // the cell has a attribute id which have a value of the input of the user
    }
    else {
      this.setAttribute(i, j, "id", "");
    }
    this.draw();
  },

  errorMessage: function(start, previousColor) {
    this.setBackgroundColor(start[0], start[1], previousColor);
  },

  min :function(x, y) {
    let min;
    let max;
    let answer = [];
    if (x < y) {
      min = x;
      max = y
    }
    else {
      min = y;
      max = x;
    }
    answer.push(min);
    answer.push(max);
    return answer;
  },

  resetCellWall: function(x1, x2, color1, color2) {
    this.setBackgroundColor(x1[0], x1[1], color1);
    if (x2 !== null) {
      this.setBackgroundColor(x2[0], x2[1], color2);
    }
    this.draw();
    this.reset();
  },

  reset : function () {
    start = [];
    end = [];
    startWall = [];
    endWall = [];
  },

  getListColor: function(map, id) {  // Print the list of cells of a specified id (only cells, not walls)
    let list = []
     for (let i = 1; i < map.length; i += 2) {
      for (let j = 1; j < map[0].length; j += 2) {
        if (map[i][j][2] === id) {
          list.push([i, j]);
        }
      }
    }
    return list
  },

  coordInArray: function(list, coord) {
    for (let i = 0; i < list.length; i++) {
      if (equals(list[i] , coord)) {
        return true;
      }
    }
    return false
  },

  validColor: function(map, id, newBlock) {
    let list = this.getListColor(map, id);
    if (list.length !== 0) {
      for (let i = 0; i < newBlock.length; i++) {
        if (this.coordInArray(list, [newBlock[i][1], newBlock[i][2]])) {
          return true;
        }
      }
      return false;
    }
    return true;
  },

  valid: function(list, coord) {
    if (equals(list[list.length - 1], coord)) {
      return 1;
    }
    else if (this.coordInArray(list, coord)) {
      return this.valid(list, [coord[0] + 2, coord[1]]) + this.valid(list, [coord[0], coord[1] + 2]);
    }
    else {
      return 0;
    }
  },

  validColorSplit: function(map, id) {
    let list = this.getListColor(map, id);
    return this.valid(list, list[0]) >= 1;
  },

  validMap: function(map, newBlock, color) {
    if (!this.validColor(map, newBlock[0][0], newBlock)) {
      return false;
    }
    let map2 = []
    for(let i = 0; i < map.length; ++i) {
      map2[i] = [];
      for(let j = 0; j < map[0].length; ++j) {
        map2[i].push([map[i][j][0],map[i][j][1], map[i][j][2]]);
      }
    }

    for (let i = 0; i < newBlock.length; i++) {
      map2[newBlock[i][1]][newBlock[i][2]] = [color, true, newBlock[i][0]];
    }
    for (let i = 0; i < idTable.length; i++) {
      if (!this.validColorSplit(map2, idTable[i][0])) {
        return false;
      }
    }
    return true;
  },

  actualiseIsColorTable : function () {
    for (let i = 0; i < idTable.length; i++) {
      const color = idTable[i][1];
      const index = colorTable.indexOf(color);
      isColorTable[index] = true;
    }
  },

  drawCorner : function(map) {
    for (let i = 2; i < map.length - 1; i+= 2) {
      for (let j= 2; j < map.length - 1; j+= 2) {
        if ((map[i - 1][j][0] === "black" || map[i + 1][j][0] === "black") && (map[i][j - 1][0] === "black" || map[i][j + 1][0] === "black")) {
          this.setColorIdBlocked(i, j, "black", true, null);
        }
      }
    }
  },

  updateMap : function(map) {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        map[i][j] = [this.getBackgroundColor(i, j), this.isBlocked(i, j), this.getAttribute(i, j, "id")];
      }
    }
  },

};

export default GridWorld;