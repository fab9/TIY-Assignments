module.exports.Chess = Chess;
module.exports.Position = Position;
module.exports.Piece = Piece;
var currentPlayer;
var players = ["white", "black"];
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
  this.currentPlayer = "white";
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