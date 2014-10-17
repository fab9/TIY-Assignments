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
  });
});