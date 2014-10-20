var Chess = require('./chess.js').Chess;
var Position = require("./chess.js").Position;
var Piece = require("./chess.js").Piece;

var assert = require('chai').assert;
/** === Position === **/
describe('Position', function(){
    it('should have a function Position()', function(){
        assert.isFunction(Position, "STEPID!!");
    });
    it('should have an x and y coordinates', function(){
        var aPosition = new Position(2,3);
        assert.strictEqual(aPosition.x, 2);
    });

});

/** === Piece === **/
describe('Piece', function(){
    it('should have a function Piece()', function(){
        assert.isFunction(Piece, "NOOOOOOOO!!!!");
    });

    it('should create a new instance', function () {
        var myPiece = new Piece('Popeye', 'purple');
        assert.instanceOf(myPiece, Piece, "myPiece is an instance of Piece");
    });

    it('should have a name and color', function () {
        var horsePiece = new Piece('Horse', 'green');
        assert.equal(horsePiece.name, 'Horse');
        assert.equal(horsePiece.color, 'green');
        assert.equal(horsePiece.getName(), 'Horse');
        assert.equal(horsePiece.getColor(), 'green');
    });

    it('should set a position', function () {
        var hasPosition = new Position(2,3);
        assert.strictEqual(hasPosition.x, 2);
        assert.strictEqual(hasPosition.y, 3);
    });

});// END Piece

/** === Chess === **/
describe('Chess', function(){
    it('should have a function Chess()', function(){
        assert.isFunction(Chess, 'Maybe?');
    });

    it('white player goes first', function () {
        var chess = new Chess();
        assert.isTrue(chess.currentPlayer === "white");
    });

    it('should contain 1 piece with position 1,1', function () {
        var board = new Chess(board);
        var piece1 = new Piece('pieceOne', 'white');
        var piece1Pos = new Position(1,1);
        piece1.setPosition(piece1Pos);
        assert.instanceOf(piece1, Piece, "piece1 is an instance of Piece");
        assert.strictEqual(piece1.x, 1);
        // assert.strictEqual(piece1.x, 1);


    });
});
