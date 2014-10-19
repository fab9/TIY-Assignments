### Chessboard Interface

* `@constructor Chess`: Setup a `board` with `Pieces` representing an initial chessboard.
    * `@method getPlayer()`
        * `@return String either "white" or "black" representing current player`
    * `@method display()`
        * `@return String representation of board`
    * `@method move(piece, destination)`: Move `piece` to `destination` and...?
       * `@param Piece piece to move`
       * `@param Position destination to move piece to`
    * `@method opening()`: Advance the `board` to [Catalan Opening, Closed Variation](http://j.mp/1BSJj9W)




* `@constructor Position(x,y)`: Represent a position on a chessboard with coordinates
    * usage: `new Position(1,1)`
    * `@property Number x coordinate`
    * `@property Number y coordinate`



* `@constructor Piece(name, color)`: Represent a chesspiece on the `board` with `name` and `color` and appropriate starting position
    * usage: `new Piece('Queen', 'black')`
    * `@method getName()`
        * `@return String name of Piece, e.g. 'Queen', 'Pawn'`
    * `@method getColor()`:
        * `@return String player 'black' or 'white'`
    * `@method setPosition(position)`: Set `Piece` to `position` on board
        * `@param Position position`
    * `@method toString()`
        * `@return String representation of Piece`
        * example: `"Q" === String(new Piece("Queen", "white"))`
        * example: `"r" === String(new Piece("Rook", "black"))`
