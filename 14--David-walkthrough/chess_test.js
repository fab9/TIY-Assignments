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
        console.log(horsePiece);
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
        assert.isTrue(chess.currentPlayer === "wPlayer");
    });

    it('should contain 1 piece', function () {
        var board = new Chess(board);
        var piecexx = new Piece('pieceOne', 'white');
        console.log("---Below is piecexx: ");
        console.log(piecexx);
        assert.instanceOf(piecexx, Piece, "piecexx is an instance of Piece");

    });

     it('piece should have position 2,1', function () {
        var pieceWithPos = new Piece('nameOfPieceWithPosition', 'white'); // create new Piece called `pieceWithPos`
        console.log("----Below is pieceWithPos: ");
        console.log(pieceWithPos); // output: { name: 'nameOfPieceWithPosition', color: 'white' }
        var coords = new Position(2,1); // create new Position called `coords`
        console.log("----Below are coords: ");
        console.log(coords); // output: { x: 2, y: 1 }
        pieceWithPos.setPosition(coords); // give `pieceWithPos` the position of `coords`
        console.log("----Below is pieceWithPos.position: ");
        console.log(pieceWithPos.position); // output: { x: 2, y: 1 }
        console.log("----Below is pieceWithPos.position[0]: ");
        console.log(pieceWithPos.position[coords.x]); // output: undefined   :(  :(
        console.log("----Below is coords.x: ");
        console.log(coords.x); // output: 2
        assert.strictEqual(coords.x,2);
        console.log("-------Below is pieceWithPos");
        console.log(pieceWithPos); // output: { name: 'nameOfPieceWithPosition', color: 'white', position: { x: 2, y: 1 } }
        // console.log(pieceWithPos.position[0]); how do I assert that pieceWithPosition has an x coordinate of 2?

    });
});
