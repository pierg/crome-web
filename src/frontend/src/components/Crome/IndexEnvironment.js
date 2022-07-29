import gridcolors from "../../_texts/gridcolors";

function isObjEmpty(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

const floor = Math.floor;

function Location(id, color) {
  this.id = id;
  this.color = color;
  this.neighbour = [];
  this.selected = false;
}

function Node(row, col, backgroundColor) {
  this.row = row;
  this.col = col;
  this.backgroundColor = backgroundColor || "#FFFFFF";
  this.location = null;
}

Node.prototype = {
  toString: function () {
    return "<node x=" + this.x + " y=" + this.y + " location='" + this.location + "'>";
  },
};

function GridWorld(canvas, width, height, options, setModalLocationId) {
  options = options || {};

  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.width = floor(width);
  this.height = floor(height);
  this.setModalLocationId = setModalLocationId;

  let padding = options.padding;

  if (typeof padding === "undefined") {
    padding = 0;
  }

  if (typeof padding === "number") {
    this.padding = {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding,
    };
  } else {
    this.padding = padding;
  }

  this.cellSize = 50;
  this.cellSpacing = 2;
  this.drawBorder = options.drawBorder;
  this.borderColor = options.borderColor || "#D3D3D3";
  this.backgroundColor = options.backgroundColor || "#FFFFFF";

  if (options.resizeCanvas) {
    let cw = this.padding.left + this.padding.right,
      ch = this.padding.top + this.padding.bottom;

    cw += this.width * (this.cellSize + this.cellSpacing);
    ch += this.height * (this.cellSize + this.cellSpacing);

    if (this.drawBorder) {
      cw += this.cellSpacing * 2;
      ch += this.cellSpacing * 2;
    }

    this.canvas.width = cw;
    this.canvas.height = ch;
  }

  this.nodes = [];
  for (let row = 0; row < this.height; ++row) {
    this.nodes[row] = [];
    for (let col = 0; col < this.width; ++col) {
      this.nodes[row][col] = new Node(row, col, "#FFFFFF");
    }
  }

  this.locations = [];
  this.colorTable = gridcolors.colors;
  this.isColorTable = new Array(this.colorTable.length).fill(false);

  this.countClick = 0;

  this.boolLocWall = true;

  // Event handling
  const self = this;

  function p2n(x, y) {
    x -= self.padding.left;
    y -= self.padding.top;

    if (self.drawBorder) {
      x -= self.cellSpacing;
      y -= self.cellSpacing;
    }

    x = floor((x - (x / self.cellSize) * self.cellSpacing) / self.cellSize);
    y = floor((y - (y / self.cellSize) * self.cellSpacing) / self.cellSize);

    if (x >= 0 && x < self.width && y >= 0 && y < self.height) {
      return self.nodes[y][x];
    } else {
      return null;
    }
  }

  canvas.addEventListener("mousedown", function (evt) {
    if (self.boolLocWall) {
      //manage location
      if (!self.onclick) {
        return;
      }

      const node = p2n(evt.offsetX, evt.offsetY);

      if (node) {
        // check if click in on the map
        if (!isObjEmpty(self.getStart())) {
          //zone complete with 2 clicks
          self.countClick = 0;
        } else {
          //first click
          self.countClick = 1;
        }
        self.onclick(node);
      }
    }
  });

  canvas.addEventListener("mouseup", function (evt) {
    if (self.boolLocWall) {
      //manage location
      if (!self.onclick) {
        return;
      }

      const node = p2n(evt.offsetX, evt.offsetY);

      if (node && !isObjEmpty(self.getStart())) {
        // check if click in on the map
        let start = self.getStart();
        if (
          self.countClick > 0 &&
          !(start.row === node.row && start.col === node.col)
        ) {
          //zone complete with drag and drop
          self.countClick = 0;
          self.onclick(node);
        } else {
          //first click on the same bloc
          self.countClick = 2;
        }
      }
    }
  });

  canvas.addEventListener("mousemove", function (evt) {
    if (self.boolLocWall) {
      //manage location
      if (self.countClick === 1) {
        const node = p2n(evt.offsetX, evt.offsetY);

        if (node) {
          self.restoreColorNode();

          self.setEndNode(node.row, node.col);
          self.setZoneColor("#D3D3D3");
        }
      }
    }
  });

  canvas.addEventListener("click", function (evt) {
    if (!self.boolLocWall) {
      //manage wall
      const node = p2n(evt.offsetX, evt.offsetY);

      if (node) {
        // check if click in on the map
        if (node.location !== null) {
          self.selectLocation(node);
        }
      }
    }
  });

  this.draw();
}

let startNode = {};
let endNode = {};

GridWorld.prototype = {
  loadGrid: function (loadLocations) {
    for (let i = 0; i < loadLocations.length; i++) {
      //add location (id and color)
      this.locations.push(new Location(loadLocations[i].id, loadLocations[i].color));
      this.checkColor(loadLocations[i].color);

      //add neighbour of a location
      for (let j = 0; j < loadLocations[i].adjacency.length; j++) {
        this.locations[i].neighbour.push(loadLocations[i].adjacency[j]);
      }

      //add location in the grid
      for (let j = 0; j < loadLocations[i].coordinates.length; j++) {
        this.nodes[loadLocations[i].coordinates[j].row][
          loadLocations[i].coordinates[j].col
        ].backgroundColor = this.locations[i].color;
        this.nodes[loadLocations[i].coordinates[j].row][
          loadLocations[i].coordinates[j].col
        ].location = this.locations[i].id;
      }
    }
    this.draw();
  },

  getNodes: function () {
    return this.nodes;
  },

  setNodes: function (
    oldNodes,
    startRow,
    endRow,
    shiftRow,
    startCol,
    endCol,
    shiftCol
  ) {
    for (let row = startRow; row < endRow; row++) {
      for (let col = startCol; col < endCol; col++) {
        this.nodes[row][col].backgroundColor =
          oldNodes[shiftRow + row][shiftCol + col].backgroundColor;
        this.nodes[row][col].location =
          oldNodes[shiftRow + row][shiftCol + col].location;
      }
    }
  },

  getStart: function () {
    return startNode;
  },

  setStartNode: function (row, col) {
    startNode.row = row;
    startNode.col = col;
  },

  setEndNode: function (row, col) {
    endNode.row = row;
    endNode.col = col;
  },

  resetNode: function () {
    startNode = {};
    endNode = {};
  },

  setBackgroundColor: function (row, col, color) {
    this.nodes[row][col].backgroundColor = color;
  },

  setZoneColor: function (color) {
    let rowMinMax = this.minMax(startNode.row, endNode.row);
    let colMinMax = this.minMax(startNode.col, endNode.col);
    for (let row = rowMinMax[0]; row <= rowMinMax[1]; row++) {
      for (let col = colMinMax[0]; col <= colMinMax[1]; col++) {
        this.setBackgroundColor(row, col, color);
      }
    }
    this.draw();
  },

  //if color is light gray or gray, restore previous color
  restoreColorNode: function () {
    for (let row = 0; row < this.height; ++row) {
      for (let col = 0; col < this.width; ++col) {
        if (
          this.nodes[row][col].backgroundColor === "#D3D3D3" ||
          this.nodes[row][col].backgroundColor === "#808080"
        ) {
          if (this.nodes[row][col].location === null) {
            //if no location -> white
            this.setBackgroundColor(row, col, "#FFFFFF");
          } else {
            //else bring color location in array locations
            let index = this.getIndexLocation(this.nodes[row][col].location);
            if (index !== -1) {
              this.setBackgroundColor(row, col, this.locations[index].color);
            }
          }
        }
      }
    }
    this.draw();
  },

  setLocation: function (row, col, location) {
    let tmpLocation = this.nodes[row][col].location;
    this.nodes[row][col].location = location;
    if (tmpLocation !== null) {
      this.checkPresentLocation(tmpLocation);
    }
  },

  getNbLocations: function () {
    return this.locations.length;
  },

  setZoneLocation: function (location) {
    let rowMinMax = this.minMax(startNode.row, endNode.row);
    let colMinMax = this.minMax(startNode.col, endNode.col);
    for (let row = rowMinMax[0]; row <= rowMinMax[1]; row++) {
      for (let col = colMinMax[0]; col <= colMinMax[1]; col++) {
        this.setLocation(row, col, location.id);
        this.setBackgroundColor(row, col, location.color);
      }
    }
    this.draw();
  },

  getLocations: function () {
    return this.locations;
  },

  getLocationsSelected: function () {
    let locations = [];
    for (let i = 0; i < this.getNbLocations(); i++) {
      if (this.locations[i].selected) {
        locations.push(this.locations[i]);
      }
    }
    return locations;
  },

  setLocations: function (locations) {
    for (let i = 0; i < locations.length; i++) {
      this.locations.push(locations[i]);
      this.checkColor(locations[i].color);
    }
  },

  checkPresentLocation: function (location) {
    let cpt = 0;
    //check if the parameter location is already in the map
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.nodes[row][col].location === location) {
          cpt++;
        }
      }
    }
    if (cpt === 0) {
      //if location isn't in the map, delete it
      let index = this.getIndexLocation(location);
      if (index !== -1) {
        this.deleteLocationInArray(index);
      }
    }
  },

  addLocation: function (id) {
    let color = this.askToColor(id);
    if (color) {
      if (color[0] < 0) {
        //if new location, add it in the list
        this.locations.push(new Location(id, color[1]));
        color[0] = this.getNbLocations() - 1;
      }
      this.setZoneLocation(this.locations[color[0]]);
      color[0] = this.getIndexLocation(id);
      this.addLocationNeighbour(this.locations[color[0]]);
    }
    this.restoreColorNode();
    this.resetNode();
  },

  deleteLocation: function (indexLocation) {
    let id = this.locations[indexLocation].id;
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.nodes[row][col].location === id) {
          this.setBackgroundColor(row, col, "#FFFFFF");
          this.setLocation(row, col, null);
        }
      }
    }
    this.draw();
  },

  deleteLocationInArray: function (indexLocation) {
    if (this.locations[indexLocation] !== undefined) {
      for (let i = 0; i < this.colorTable.length; i++) {
        if (this.colorTable[i] === this.locations[indexLocation].color) {
          this.isColorTable[i] = false;
        }
      }
      this.deleteLocationNeighbour(this.locations[indexLocation]);
      for (let i = indexLocation; i < this.locations.length - 1; i++) {
        this.locations[i] = this.locations[i + 1];
      }
      this.locations.pop();
    }
  },

  deleteLocations() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        this.setBackgroundColor(row, col, "#FFFFFF");
        this.setLocation(row, col, null);
      }
    }
    this.draw();

    this.resetBackgroundColor();
    this.resetNode();
    this.locations = [];
  },

  getIndexLocation: function (idLocation) {
    for (let i = 0; i < this.getNbLocations(); i++) {
      if (this.locations[i].id === idLocation) {
        return i;
      }
    }
    return -1;
  },

  checkNeighbour: function (locationA, locationB) {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.nodes[row][col].location === locationA.id) {
          if (row - 1 >= 0) {
            if (this.nodes[row - 1][col].location === locationB.id) {
              return true;
            }
          }
          if (col - 1 >= 0) {
            if (this.nodes[row][col - 1].location === locationB.id) {
              return true;
            }
          }
          if (row + 1 < this.height) {
            if (this.nodes[row + 1][col].location === locationB.id) {
              return true;
            }
          }
          if (col + 1 < this.width) {
            if (this.nodes[row][col + 1].location === locationB.id) {
              return true;
            }
          }
        }
      }
    }
    return false;
  },

  isNeighbour: function (location, neighbour) {
    for (let i = 0; i < location.neighbour.length; i++) {
      if (location.neighbour[i] === neighbour) {
        return true;
      }
    }
    return false;
  },

  addLocationNeighbour: function (location) {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        //if the location is in the node here
        if (this.nodes[row][col].location === location.id) {
          if (row - 1 >= 0) {
            //check if current nodes has neighbour on the top
            if (
              this.nodes[row - 1][col].location !== location.id &&
              this.nodes[row - 1][col].location !== null
            ) {
              //check if the neighbour is already in the list
              if (!this.isNeighbour(location, this.nodes[row - 1][col].location)) {
                //if not, add neighbour for the current node
                location.neighbour.push(this.nodes[row - 1][col].location);
                //and add the current node as a neighbour for the other node
                this.locations[
                  this.getIndexLocation(this.nodes[row - 1][col].location)
                ].neighbour.push(location.id);
              }
            }
          }
          if (col - 1 >= 0) {
            //check if current nodes has neighbour on the left
            if (
              this.nodes[row][col - 1].location !== location.id &&
              this.nodes[row][col - 1].location !== null
            ) {
              //check if the neighbour is already in the list
              if (!this.isNeighbour(location, this.nodes[row][col - 1].location)) {
                //if not, add neighbour
                location.neighbour.push(this.nodes[row][col - 1].location);
                //and add the current node as a neighbour for the other node
                this.locations[
                  this.getIndexLocation(this.nodes[row][col - 1].location)
                ].neighbour.push(location.id);
              }
            }
          }
          if (row + 1 < this.height) {
            //check if current nodes has neighbour on the bot
            if (
              this.nodes[row + 1][col].location !== location.id &&
              this.nodes[row + 1][col].location !== null
            ) {
              //check if the neighbour is already in the list
              if (!this.isNeighbour(location, this.nodes[row + 1][col].location)) {
                //if not, add neighbour
                location.neighbour.push(this.nodes[row + 1][col].location);
                //and add the current node as a neighbour for the other node
                this.locations[
                  this.getIndexLocation(this.nodes[row + 1][col].location)
                ].neighbour.push(location.id);
              }
            }
          }
          if (col + 1 < this.width) {
            //check if current nodes has neighbour on the right
            if (
              this.nodes[row][col + 1].location !== location.id &&
              this.nodes[row][col + 1].location !== null
            ) {
              //check if the neighbour is already in the list
              if (!this.isNeighbour(location, this.nodes[row][col + 1].location)) {
                //if not, add neighbour
                location.neighbour.push(this.nodes[row][col + 1].location);
                //and add the current node as a neighbour for the other node
                this.locations[
                  this.getIndexLocation(this.nodes[row][col + 1].location)
                ].neighbour.push(location.id);
              }
            }
          }
        }
      }
    }
  },

  deleteNeighbour: function (location, neighbour) {
    let bool = false;
    for (let i = 0; i < location.neighbour.length; i++) {
      if (location.neighbour[i] === neighbour.id) {
        bool = true;
      }
      if (bool) {
        location.neighbour[i] = location.neighbour[i + 1];
      }
    }
    location.neighbour.pop();
  },

  deleteLocationNeighbour: function (location) {
    for (let i = 0; i < location.neighbour.length; i++) {
      let bool = false;
      let neighbourLoc = this.locations[this.getIndexLocation(location.neighbour[i])];
      for (let j = 0; j < neighbourLoc.neighbour.length - 1; j++) {
        if (neighbourLoc.neighbour[j] === location.id) {
          bool = true;
        }
        if (bool) {
          neighbourLoc.neighbour[j] = neighbourLoc.neighbour[j + 1];
        }
      }
      neighbourLoc.neighbour.pop();
    }
  },

  resetBackgroundColor: function () {
    for (let i = 0; i < this.isColorTable.length; i++) {
      this.isColorTable[i] = false;
    }
  },

  checkColor: function (color) {
    for (let i = 0; i < this.colorTable.length; i++) {
      if (this.colorTable[i] === color) {
        this.isColorTable[i] = true;
      }
    }
  },

  chooseBackgroundColor: function () {
    for (let i = 0; i < this.isColorTable.length; i++) {
      if (this.isColorTable[i] === false) {
        this.isColorTable[i] = true;
        return this.colorTable[i];
      }
    }
    return false;
  },

  checkSameNeighbour: function (id) {
    let rowMinMax = this.minMax(startNode.row, endNode.row);
    let colMinMax = this.minMax(startNode.col, endNode.col);
    for (let row = rowMinMax[0]; row <= rowMinMax[1]; row++) {
      for (let col = colMinMax[0]; col <= colMinMax[1]; col++) {
        // lets try all position around the selected zone
        if (this.nodes[row][col].location === id) {
          return true;
        }
        if (row - 1 >= 0) {
          if (this.nodes[row - 1][col].location === id) {
            return true;
          }
        }
        if (col - 1 >= 0) {
          if (this.nodes[row][col - 1].location === id) {
            return true;
          }
        }
        if (row + 1 < this.height) {
          if (this.nodes[row + 1][col].location === id) {
            return true;
          }
        }
        if (col + 1 < this.width) {
          if (this.nodes[row][col + 1].location === id) {
            return true;
          }
        }
      }
    }
    return false;
  },

  askToColor(id) {
    if (id === null || id === "") {
      this.restoreColorNode();
      this.resetNode();
      return false;
    } else {
      let color;
      let index = -1;
      for (let i = 0; i < this.getNbLocations(); i++) {
        if (this.locations[i].id === id) {
          if (this.checkSameNeighbour(id)) {
            index = i;
          } else {
            index = -2;
          }
        }
      }
      if (index === -1) {
        //new location
        color = this.chooseBackgroundColor();
      } else if (index >= 0) {
        //next to a location who have same name
        color = this.locations[index].color;
      } else {
        //error -> same location name but not near
        return false;
      }
      return [index, color];
    }
  },

  minMax: function (x, y) {
    let min;
    let max;
    let answer = [];
    if (x < y) {
      min = x;
      max = y;
    } else {
      min = y;
      max = x;
    }
    answer.push(min);
    answer.push(max);
    return answer;
  },

  onclick: function (node) {
    let start = this.getStart();
    if (!isObjEmpty(start)) {
      this.setEndNode(node.row, node.col);
      this.setZoneColor("#808080");
      this.setModalLocationId(true);
    } else {
      this.setStartNode(node.row, node.col);
      this.setBackgroundColor(node.row, node.col, "#D3D3D3");
      this.draw();
    }
  },

  triggerWall: function () {
    this.restoreColorNode();
    this.resetNode();
    this.boolLocWall = !this.boolLocWall;
    this.draw();
  },

  selectLocation: function (node) {
    let indexLocation = this.getIndexLocation(node.location);
    this.locations[indexLocation].selected = !this.locations[indexLocation].selected;
    let locationsSelected = this.getLocationsSelected();
    if (locationsSelected.length > 1) {
      if (this.checkNeighbour(locationsSelected[0], locationsSelected[1])) {
        //if locations are near
        if (this.isNeighbour(locationsSelected[0], locationsSelected[1].id)) {
          //if neighbour delete
          this.deleteNeighbour(locationsSelected[0], locationsSelected[1]);
          this.deleteNeighbour(locationsSelected[1], locationsSelected[0]);
        } else {
          //if not neighbour, add
          locationsSelected[0].neighbour.push(locationsSelected[1].id);
          locationsSelected[1].neighbour.push(locationsSelected[0].id);
        }
      }
      locationsSelected[0].selected = !locationsSelected[0].selected;
      locationsSelected[1].selected = !locationsSelected[1].selected;
      this.boolLocWall = !this.boolLocWall;
    }
    this.draw();
  },

  clearMsgMode() {
    this.boolLocWall = 1;
  },

  draw: function () {
    let ctx = this.ctx;
    let csz = this.cellSize;
    let csp = this.cellSpacing;

    const bAdj = this.drawBorder ? this.cellSpacing : -this.cellSpacing,
      cAdj = this.drawBorder ? this.cellSpacing : 0;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();
    ctx.fillStyle = this.borderColor;
    ctx.fillRect(
      this.padding.left,
      this.padding.top,
      (csz + csp) * this.width + bAdj,
      (csz + csp) * this.height + bAdj
    );

    let cy = this.padding.top + cAdj;
    for (let row = 0; row < this.height; ++row) {
      let cx = this.padding.left + cAdj;
      for (let col = 0; col < this.width; ++col) {
        // draw a cell (size times) each cell represent one node
        ctx.filter = "brightness(100%)";
        ctx.fillStyle = this.nodes[row][col].backgroundColor || this.backgroundColor;
        if (ctx.fillStyle !== "#ffffff") {
          //change luminosity if location is selected (for wall)
          if (this.nodes[row][col].location !== null) {
            if (
              this.locations[this.getIndexLocation(this.nodes[row][col].location)]
                .selected
            ) {
              ctx.filter = "brightness(50%)";
            }
            //draw wall between cells
            this.drawWall(ctx, cx, cy, csz, csp, row, col);
          }
          //draw border and corner between cells (same location)
          this.drawBorderLocation(ctx, cx, cy, csz, csp, row, col);
        }
        this.drawNode(ctx, cx, cy, csz);
        cx += csz + csp;
      }
      cy += csz + csp;
    }

    //draw name location
    for (let i = 0; i < this.getNbLocations(); i++) {
      let tmpArea = [];
      let maxArea = [-1, -1, -1];
      for (let row = 0; row < this.height; ++row) {
        for (let col = 0; col < this.width; ++col) {
          if (this.nodes[row][col].location === this.locations[i].id) {
            tmpArea = this.getAreaFromACell(row, col);
            if (tmpArea[2] > maxArea[2]) {
              maxArea = tmpArea;
            }
          }
        }
      }
      ctx.font = "30px Arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#000000";
      let x = csp + this.padding.left;
      let y = csp + this.padding.top;
      x += maxArea[1] * (csp + csz);
      y += maxArea[0] * (csp + csz);
      x += (maxArea[3] * (csp + csz)) / 2;
      y += (maxArea[4] * (csp + csz)) / 2;
      ctx.fillText(this.locations[i].id, x, y);
    }

    //write mode (location or wall)
    if (this.boolLocWall !== 1) {
      //display msg only if we don't want to take a screenshot
      let x = csp + this.padding.left;
      let y = csp + this.padding.top;
      x += (this.width * (csp + csz)) / 2;
      y += this.height * (csp + csz) + 10;
      ctx.font = "20px Arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#000000";
      if (this.boolLocWall) {
        ctx.fillText("Location mode", x, y);
      } else {
        ctx.fillText("Wall mode", x, y);
      }
      ctx.font = "12px Arial";
      if (this.boolLocWall) {
        ctx.fillText("Click on a first cell, then click on", x, y + 17);
        ctx.fillText("the opposite corner of the location you want.", x, y + 29);
        ctx.fillText("You can also drag and drop", x, y + 42);
      } else {
        ctx.fillText(
          "Click on a first location, then click on the second location.",
          x,
          y + 17
        );
        ctx.fillText("A wall will appear", x, y + 32);
      }
    }
  },

  drawNode(ctx, cx, cy, size) {
    ctx.fillRect(cx, cy, size, size);
  },

  drawBorderLocation(ctx, cx, cy, size, csp, row, col) {
    let cpt = 0;
    if (row - 1 >= 0) {
      //border top
      if (this.nodes[row - 1][col].backgroundColor === ctx.fillStyle.toUpperCase()) {
        ctx.fillRect(cx, cy - csp, size, csp);
        cpt++;
      }
    }
    if (col - 1 >= 0) {
      //border left
      if (this.nodes[row][col - 1].backgroundColor === ctx.fillStyle.toUpperCase()) {
        ctx.fillRect(cx - csp, cy, csp, size);
        cpt++;
      }
    }
    if (cpt === 2) {
      //corner top left if node top left has same color
      if (
        this.nodes[row - 1][col - 1].backgroundColor === ctx.fillStyle.toUpperCase()
      ) {
        ctx.fillRect(cx - csp, cy - csp, csp, csp);
      }
    }
    cpt = 0;
  },

  drawWall(ctx, cx, cy, size, csp, row, col) {
    ctx.fillStyle = "#000000";
    let currentLocation;
    let cpt = 0;
    if (row - 1 >= 0) {
      //wall top
      if (this.nodes[row - 1][col].location !== null) {
        //if there is a location on top
        if (this.nodes[row][col].location !== this.nodes[row - 1][col].location) {
          //if it's a different location
          currentLocation =
            this.locations[this.getIndexLocation(this.nodes[row][col].location)];
          if (!this.isNeighbour(currentLocation, this.nodes[row - 1][col].location)) {
            //if they are not neighbour
            ctx.fillRect(cx, cy - csp - csp / 2, size, csp + csp / 2); //print a wall
            cpt++;
          }
        } else {
          cpt++;
        }
      }
    }
    if (col - 1 >= 0) {
      //wall left
      if (this.nodes[row][col - 1].location !== null) {
        //if there is a location on left
        if (this.nodes[row][col].location !== this.nodes[row][col - 1].location) {
          //if it's a different location
          currentLocation =
            this.locations[this.getIndexLocation(this.nodes[row][col].location)];
          if (!this.isNeighbour(currentLocation, this.nodes[row][col - 1].location)) {
            //if they are not neighbour
            ctx.fillRect(cx - csp - csp / 2, cy, csp + csp / 2, size); //print a wall
            cpt++;
          }
        } else {
          cpt++;
        }
      }
    }
    if (cpt === 2) {
      //corner top left
      if (this.nodes[row - 1][col - 1].location !== null) {
        if (this.nodes[row][col].location !== this.nodes[row - 1][col - 1].location) {
          currentLocation =
            this.locations[this.getIndexLocation(this.nodes[row][col].location)];
          if (
            !this.isNeighbour(currentLocation, this.nodes[row - 1][col - 1].location)
          ) {
            ctx.fillRect(
              cx - csp - csp / 2,
              cy - csp - csp / 2,
              csp + csp / 2,
              csp + csp / 2
            ); //print a wall
          }
        }
      }
    }
    cpt = 0;
    ctx.fillStyle = this.nodes[row][col].backgroundColor;
  },

  getAreaFromACell(startRow, startCol) {
    let limitCol = this.width;
    let maxArea = -1;
    let maxHeight = -1;
    let maxWidth = -1;
    for (let row = startRow; row < this.height; row++) {
      if (
        this.nodes[startRow][startCol].location === this.nodes[row][startCol].location
      ) {
        for (let col = startCol; col < limitCol; col++) {
          if (this.nodes[row][startCol].location === this.nodes[row][col].location) {
            if (maxArea < (row - startRow + 1) * (col - startCol + 1)) {
              maxArea = (row - startRow + 1) * (col - startCol + 1);
              maxHeight = row - startRow + 1;
              maxWidth = col - startCol + 1;
            }
          } else {
            limitCol = col;
            col = this.width;
          }
        }
      } else {
        row = this.height;
      }
    }

    return [startRow, startCol, maxArea, maxWidth, maxHeight];
  },
};

export default GridWorld;
