module.exports.Chess = Chess;
module.exports.Position = Position;
module.exports.Piece = Piece;

var SQUARES = {
  a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
  a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
  a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
  a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
  a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
  a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
  a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
  a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
};


var currentPlayer;
var players = ["wPlayer", "bPlayer"];
/**
 * To build Chess:
 * - Pieces x 32
 *   - ~Position
 * - Position x 32
 *
 * To build Piece:
 * - ~Position
 * - String: 'white', 'black', list of piece names
 *
 * To build Position:
 * - Numbers: x, y
 *
 * Takeaway: Build Position, then Piece, then Chess

/**
 * @constructor Position
 *
 * @param Number x coordinate
 * @param Number y coordinate
 *
 * @property Number x coordinate
 * @property Number y coordinate
 */
function Position(x, y){
    this.x = x;
    this.y = y;

    return { "x":x , "y":y };
}
/**
 * @constructor Piece
 *
 * @param String name
 * @param String color
 *
 * @method getName
 * @method getColor
 * @method setPosition
 * @method toString
 */
function Piece(name, color){
  this.name = name;
  this.color = color;
}

Piece.prototype = {
  constructor: Piece,

  getName: function() {
    return this.name;
  },

  getColor: function() {
    return this.color;
  },

  setPosition: function(position) {
    this.position = position;
  },

  toString: function() {
    // body...
  }
}// END Piece.prototype methods

/**
 * @constructor Chess
 *
 * @method getPlayer
 * @method move
 * @method opening
 * @method display
 */
function Chess(board) {
  this.board = board;
  this.currentPlayer = players[0];
}

Chess.prototype = {
  constructor: Chess,

  getPlayer: function() {
    return currentPlayer;
  },

  display: function() {
    var spacer = '+---+---+---+\n';

    return spacer +
        // Apply `renderRow` to each `row` in `board`...
        this.board.map(function renderRow(row){
            return '| ' +
                // Apply `renderCell` to each `cell` in `row`...
                row.map(function renderCell(cell){
                    // return 'X' if `cell` is TRUTHY otherwise return ' '
                    return cell && 'X' || ' ';
                }).join(' | ') // Place ' | ' between each `cell`...
            + ' |\n';
        }).join(spacer) // Place `spacer` between each `row`...
    + spacer;
  },

  move: function(piece, destination) {
    // body...
  },

  opening: function() {
    console.log(board);
  }
};

// Create 36 pieces
var K = new Piece('King', 'black');
var Q = new Piece('Queen', 'black');
var B = new Piece('Bishop', 'black'); // * 2
var N = new Piece('Knight', 'black'); // * 2
var R = new Piece('Rook', 'black'); // * 2
var P = new Piece('Pawn', 'black'); // * 8

var k = new Piece('King', 'white');
var q = new Piece('Queen', 'white');
var b = new Piece('Bishop', 'white');
var n = new Piece('Knight', 'white');
var r = new Piece('Rook', 'white');
var p = new Piece('Pawn', 'white');





