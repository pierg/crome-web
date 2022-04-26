function _n(val, def) {
  return (typeof val === 'number') ? val : def;
}

var floor = Math.floor;

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
  this.width   = floor(width);
  this.height  = floor(height);

  var padding = options.padding;
  
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

  this.cellSize = _n(options.cellSize, 32);
  this.cellSpacing = _n(options.cellSpacing, 1);
  this.drawBorder = !!options.drawBorder;
  this.borderColor = options.borderColor || 'black';
  this.backgroundColor = options.backgroundColor || 'white';

  if (options.resizeCanvas) {
    var cw = this.padding.left + this.padding.right,
        ch = this.padding.top + this.padding.bottom;

    cw += (this.width * (this.cellSize + this.cellSpacing)) - this.cellSpacing;
    ch += (this.height * (this.cellSize + this.cellSpacing)) - this.cellSpacing;

    if (this.drawBorder) {
      cw += (this.cellSpacing * 2);
      ch += (this.cellSpacing * 2);
    }

    this.canvas.width = cw;
    this.canvas.height = ch;
  }

  this.nodes = [];
  for (var j = 0; j < this.height; ++j) {
    for (var i = 0; i < this.width; ++i) {
      this.nodes.push(new Node(i, j, null));
    }
  }

  //
  // Event handling
  // TODO: support dragging

  var self = this;

  this.onclick = options.onclick;

  function p2n(x, y) {
    
    x -= self.padding.left;
    y -= self.padding.top;
    
    if (self.drawBorder) {
      x -= (self.cellSpacing * 2);
      y -= (self.cellSpacing * 2);
    }

    x = floor(x / (self.cellSize + self.cellSpacing));
    y = floor(y / (self.cellSize + self.cellSpacing));

    if (x >= 0 && x < self.width && y >= 0 && y < self.height) {
      return self.nodes[(y * self.width) + x];
    } else {
      return null;
    }
  }

  canvas.addEventListener('click', function(evt) {
    
    if (!self.onclick)
      return;
    
    var node = p2n(evt.offsetX, evt.offsetY);
    
    if (node)
      self.onclick(node);
  
  });

}

GridWorld.prototype = {
  draw: function() {

    var csz   = this.cellSize,
        csp   = this.cellSpacing
        ctx   = this.ctx,
        w     = this.width,
        h     = this.height,
        ix    = 0;

    var badj  = this.drawBorder ? this.cellSpacing : -this.cellSpacing,
        cadj  = this.drawBorder ? this.cellSpacing : 0;

    ctx.save();

    ctx.fillStyle = this.borderColor;
    ctx.fillRect(this.padding.left,
                 this.padding.top,
                 ((csz + csp) * this.width) + badj,
                 ((csz + csp) * this.height) + badj);

    var cy = this.padding.top + cadj;
    for (var j = 0; j < this.height; ++j) {
      var cx = this.padding.left + cadj;
      for (var i = 0; i < this.width; ++i) {
        var n = this.nodes[ix++];
        ctx.fillStyle = n.backgroundColor || this.backgroundColor;
        ctx.fillRect(cx, cy, csz, csz);
        cx += csz + csp;
      }
      cy += csz + csp;
    }

    ctx.restore();

  },

  get: function(x, y) {
    return this.nodes[(y * this.width) + x];
  },

  getBackgroundColor: function(x, y) {
    return this.nodes[(y * this.width) + x].backgroundColor;
  },

  setBackgroundColor: function(x, y, color) {
    this.nodes[(y * this.width) + x].backgroundColor = color || null;
  },

  isBlocked: function(x, y) {
    return this.nodes[(y * this.width) + x].blocked;
  },

  setBlocked: function(x, y, blocked) {
    this.nodes[(y * this.width) + x].blocked = !!blocked;
  },

  setAttribute: function(x, y, key, value) {
    this.nodes[(y * this.width) + x][key] = value;
  },

  eachNeighbour: function(x, y, callback) {
    return this.eachNodeNeighbour(this.nodes[(y * this.width) + x], callback);
  },

  eachNodeNeighbour: function(node, callback) {

    var x   = node.x,
        y   = node.y,
        w   = this.width,
        h   = this.height,
        ns  = this.nodes,
        ix  = (y * w) + x,
        nix = 0;

    if (x > 0   && !ns[ix-1].blocked) callback(ns[ix-1], nix++);
    if (x < w-1 && !ns[ix+1].blocked) callback(ns[ix+1], nix++);
    if (y > 0   && !ns[ix-w].blocked) callback(ns[ix-w], nix++);
    if (y < h-1 && !ns[ix+w].blocked) callback(ns[ix+w], nix++);
  
  },

  eachNode: function(callback) {
    this.nodes.forEach(callback);
  }

};

module.exports = GridWorld;