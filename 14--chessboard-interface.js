/** === PRODUCTION CODE === **/
var currentPlayer;
var players = ["black", "white"];
var board = [
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ']
    ];

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
function Chess(board) {
  this.board = board;
  this.currentPlayer = currentPlayer;
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

  // move: function(piece, destination) {
  //   // body...
  // },

  // opening: function() {
  //   // body...
  // }
};




// /**
//  * Function Definition: Position(x,y)
//  * Represent a position on a chessboard with coordinates.
//  * @type constructor
//  * @property Number x coordinate
//  * @property Number y coordinate
//  */
function Position(x, y) {
  this.x = x;
  this.y = y;
}

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
function Piece(name, color) {
  this.name = name;
  this.color = color;
}

Piece.prototype = {
  constructor: Piece,

  getName:  function() {
    return name;
  },

  getColor: function() {
    return color;
  },

  setPosition: function(position) {

  },

  toString: function() {
    // body...
  }

}// END Piece.prototype methods

// game objects
var rB = new Piece('Rook', 'black');

var nB = new Piece('Knight', 'black');
var bB = new Piece('Bishop', 'black');
var qB = new Piece('Queen', 'black');
var kB = new Piece('King', 'black');
var pB = new Piece('Pawn', 'black');

var rW = new Piece('Rook', 'white');
var nW = new Piece('Knight', 'white');
var bW = new Piece('Bishop', 'white');
var qW = new Piece('Queen', 'white');
var kW = new Piece('King', 'white');
var pW = new Piece('Pawn', 'white');

function startingPositions() {
  rB.setPosition(0, 0);
  console.log(rB);
}


/** === TEST CODE === **/
var assert = require('chai').assert;
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Constructor functions', function () {
  it('should be defined', function () {
    assert.isDefined(Chess);
    assert.isDefined(Piece);
    assert.isDefined(Position);
  });
});

// test suite for Chess object constructor
describe('New game', function () {
  describe(' ', function () {
    it('should have board with pieces in starting positions', function () {
      var chess = new Chess();
      assert.deepEqual(board, [
        ['R','N','B','Q','K','B','N','R'],
        ['P','P','P','P','P','P','P','P'],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ['p','p','p','p','p','p','p','p'],
        ['r','n','b','q','k','b','n','r'] ]
      );
    });

    it('should have 2 players', function () {
      assert.equal(players.length, 2);
    });

    it('black player goes first', function () {
       var chess = new Chess();
      assert.isTrue(chess.currentPlayer === "black");

    });
  });
});

