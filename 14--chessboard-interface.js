/** === PRODUCTION CODE === **/
/**
 * Function Definition: Chess()
 * Sets up a board with Pieces representing an initial chessboard.
 * @type constructor
 * @param board [varname] [description]
 * @method getPlayer
 * @method display
 * @method move(piece, destination)
 * @method opening
 */
function Chess(board, startingPosition) {
  this.board = board || "Default board";
}

Chess.prototype = {
  constructor: Chess,

  getPlayer: function(argument) {
    // return ???
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
    // body...
  }
};




// /**
//  * Function Definition: Position(x,y)
//  * Represent a position on a chessboard with coordinates.
//  * @type constructor
//  * @property Number x coordinate
//  * @property Number y coordinate
//  */
// function Position(x, y) {
//   this.x = x;
//   this.y = y;
// }



// *
//  * Function Definition: Piece()
//  * Represent a chesspiece on the board with name and color and appropriate starting position.
//  * @type constructor
//  * @param name
//  * @param color
//  * @method getName
//  * @method getColor
//  * @method setPosition(position)
//  * @method toString

// function Piece() {

// }





/** === TEST CODE === **/
var assert = require('chai').assert;
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

// describe('Constructor functions', function () {
//   it('should be defined', function () {
//     assert.isDefined(Chess);
//     assert.isDefined(Piece);
//     assert.isDefined(Position);
//   });
// });

// test suite for Chess object constructor
describe('Chess', function () {
  describe('constructor', function () {
    it('should have a default board', function () {
      var chess = new Chess();
      expect(chess.board).to.equal("Default board");
    });
  });
});

