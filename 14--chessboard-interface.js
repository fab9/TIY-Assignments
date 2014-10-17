/** === PRODUCTION CODE === **/
/**
 * Function Definition: Chess()
 * Sets up a board with Pieces representing an initial chessboard.
 * @type constructor
 * @param {[type]} [varname] [description]
 * @method getPlayer
 * @method display
 * @method move(piece, destination)
 * @method opening
 */
function Chess() {
  this.getPlayer = function() {
    // returns String either "white" or "black" representing current player
  };
  this.display = function() {
  // returns String either "white" or "black" representing current player
  };
  this.move = function(piece, destination) {
  // returns String either "white" or "black" representing current player
  };
  this.opening = function() {
  // returns String either "white" or "black" representing current player
  };
}

/**
 * Function Definition: Position(x,y)
 * Represent a position on a chessboard with coordinates.
 * @type constructor
 * @property Number x coordinate
 * @property Number y coordinate
 */
function Position(x, y) {
  this.x = x;
  this.y = y;
}
/**
 * Function Definition: Piece()
 * Represent a chesspiece on the board with name and color and appropriate starting position.
 * @type constructor
 * @param name
 * @param color
 * @method getName
 * @method getColor
 * @method setPosition(position)
 * @method toString
 */
function Piece() {

}

/** === TEST CODE === **/
var assert = require('chai').assert;
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Constructor functions', function () {
  it('should be defined', function () {
    assert.isFunction(Chess);
    assert.isFunction(Piece);
    assert.isFunction(Position);
  });
});