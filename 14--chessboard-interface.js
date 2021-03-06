/** === PRODUCTION CODE === **/
var currentPlayer;
var players = ["black", "white"];
var board = [
        ['R','N','B','Q','K','B','N','R'],
        ['P','P','P','P','P','P','P','P'],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ['p','p','p','p','p','p','p','p'],
        ['r','n','b','q','k','b','n','r']
    ];

// game objects
var r = new Piece('Rook', 'black');
var n = new Piece('Knight', 'black');
var b = new Piece('Bishop', 'black');
var q = new Piece('Queen', 'black');
var k = new Piece('King', 'black');
var p = new Piece('Pawn', 'black');
var R = new Piece('Rook', 'white');
var N = new Piece('Knight', 'white');
var B = new Piece('Bishop', 'white');
var Q = new Piece('Queen', 'white');
var K = new Piece('King', 'white');
var P = new Piece('Pawn', 'white');


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
  this.currentPlayer = "black";
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



console.log("-------- display below --------")
var theGame = new Chess(board);
console.log(theGame);

console.log("---------- POSITIONS ------")
console.log("---------- A ------")
theGame.opening()
console.log("---------- B ------")
this.theGame.position(1,2);
console.log("---------- C ------")
this.position(1,2);
console.log("---------- D ------")
board.position(1,2);


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
  describe('', function () {
    it('should have board with pieces in starting positions', function () {
      var chess = new Chess(board);
      console.log(chess);
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
    });//END
  });//END inner describe
});

describe('Piece constructor', function () {
  it('creates a new instance', function () {
    var myPiece = new Piece('Popeye', 'purple');
    assert.instanceOf(myPiece, Piece, "myPiece is an instance of Piece");
    assert.equal(myPiece.name, "Popeye", 'sets its name');
  });

    it('gets piece\'s name and color', function () {
    var greenPiece = new Piece('John', 'green');
    assert.equal(greenPiece.name, 'John');
    assert.equal(greenPiece.color, 'green');
    assert.equal(greenPiece.getName(), 'John');
    assert.equal(greenPiece.getColor(), 'green');
  });

    it('should set a piece\'s position', function () {
    var anotherGame = new Chess(board);
    var z = new Piece('Squirrel', 'brown');
    // z.position = p62;
    z.setPosition(p62);


  });
});