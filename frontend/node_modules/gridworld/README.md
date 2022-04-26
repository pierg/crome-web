# gridworld

This is a small module that provides a representation and canvas renderer for 2D "gridworlds". Its intended use is for experimentation with game and AI algorithms such as pathfinding, line-of-sight, plus any number of grid-based board games.

Here's what it looks like:

![Gridworld](https://raw.github.com/jaz303/gridworld/master/screenshot.png)

## Installation

Browserify is recommended.

    $ npm install gridworld

## API

### Creating a world

#### `new GridWorld(canvasEl, width, height, [options])`

Create a new `GridWorld` with a given `width` and `height` (specified in terms of grid cells) that will draw onto `canvas`.

Supported options:

  * `cellSize` size of each cell in pixels. Default: 32.
  * `cellPadding` size between each cell in pixels. Default: 1.
  * `drawBorder` if set, a border will be drawn around the entire world, instead of just between each cell.
  * `borderColor` default: `'black'`.
  * `backgroundColor` default cell background color. Default: `'white'`.
  * `resizeCanvas` if set, canvas element will be resized to fit world's dimensions, including any specified padding.
  * `padding` how much space to leave around the rendered world. Can be specified as a single number or as an object with keys `top`, `right`, `bottom` and `left`. Mostly useful with `resizeCanvas` option. Default: 0.
  * `onclick` click handler for cells. See event handling, below.
  
Example:

    var GridWorld = require('gridworld').GridWorld;
    var world = new GridWorld(canvas, map[0].length, map.length, {
      padding       : {top: 10, left: 10, right: 10, bottom: 60},
      cellSize      : 32,
      cellSpacing   : 1,
      resizeCanvas  : true,
      drawBorder    : true,
      onclick: function(node) {
        console.log("you clicked on node: " + node);
      }
    });

### Drawing the world

#### `world.draw()`

Draws the world on its canvas.

### Accessing nodes directly

#### `world.get(x, y)`

Returns the node object representing cell at (`x`,`y`).

### World attributes

#### `world.getBackgroundColor(x, y)`

Returns the background color of the node at (`x`,`y`).

#### `world.setBackgroundColor(x, y, color)`

Set the background color of the node at (`x`,`y`) to `color`.

#### `world.isBlocked(x, y)`

Returns `true` if the node at (`x`, `y`) is blocked.

#### `world.setBlocked(x, y, blocked)`

Flag the cell at (`x`, `y`) as passable/impassable. A cell's passability does not affect how it is drawn.

#### `world.setAttribute(x, y, attr, value)`

Set arbitrary attribute `attr` on node (`x`,`y`) to `value`.

### Iterating

#### `world.eachNeighbour(x, y, callback)`

Iterate over each non-blocked Manhattan neighbour of node (`x`,`y`). Callback receives neighbour node object and index as a parameter.

#### `world.eachNodeNeighbour(node, callback)`

Iterate over each non-blocked Manhattan neighbour of `node`. Callback receives neighbour node object and index as a parameter.

#### `world.eachNode(callback)`

Iterate over each of the world's `node` objects. Callback receives node object as a parameter.

### Event Handling

#### `world.onclick = function(node) { /* ... */ }`

Function to invoke when user clicks on a node. Receives clicked node as a paremeter.

## TODO

  * Add event handlers for dragging
  * Allow markers to be overlaid on cells
  * Support optional diagonal neighbours
