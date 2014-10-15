module.exports = Game;

function board(){
  return [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
  ];
}

function Game(){
  this.board = board();
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x, y){
    // return this.board[x][y] === true;  mine
    return this.board[x][y]; //David's
}

/**
 * Make the cell at {x,y} "alive", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x, y){
    this.board[x][y] = true;
}

/**
 * Make the cell at {x,y} "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){
    this.board[x][y] = false;
}

/**
 * Update the `board` by applying the `rules` to each cell.
 */
Game.prototype.tick = function(){
  // Start with a fresh board...
  // board = new board(); mine
  var newBoard = board(); //David's
  var self = _self = that = this; //David's

  // Apply `rules` to each cell in the current board...
  this.board.forEach(function(row, x){   //David's
    row.forEach(function(cell, y)){


      var newCell = self.rules(cell, self.neighborsOf(x, y)); // cell comes from line above, David's


      // Record the result of `rules` in the new board...
      newBoard[x][y] = newCell; //D's
    });
  });

  // Update the current board to match the new board.
  this.board = newBoard;
}

// -----------------
 /** David's docblock and fn `rules`
 * @param Boolean cell
 * @param Array of Boolean representing neighbors of `cell`
 * @return Boolean
 */
Game.prototype.rules = function(cell. neighbors){
  // Survival rule
  if( cell && neighbors > 1 && neighbors < 4){
    return true;

  // Reproduction rule
  if( !cell && neighbors == 3){
    return true;
  }

  return false; // EVERYTHING ELSE IS DEATH!

  }
}// END rules

// -----------------
 /** David's docblock and fn neighborsOf
 * @param Number x coor of a cell
 * @param Number y coord of a cell
 * @return Array of Boolean representing LIVE neighbors
 */
Game.prototype.neighborsOf = function(x, y){
    var neighbors = [ ], diffs = [ -1, 0, +1 ];

    diffs.forEach(function(dX){
        diffs.forEach(function(dY){
            if ( dX == 0 && dY == 0 ) return;

            if ( this.board[x + dX] && this.board[x + dX][y + dY] ){
                neighbors.push(true);
            }
        });
    });

    return neighbors;
}



/**
 * WARNING: This is VOODOO MAGIC...
 *
 * GIVEN:
 *   this.board === [
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *   ];
 *
 * EXPECT:
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 */
Game.prototype.display = function(){
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
} // END display

/** Notes
* not optimal the way we're representing cells
* it's representing 5,000 dead cells
* we need a way of mapping the representation of the board to a display of the board
* <<Separations of concerns:>>
* the game needs to display the board
* at the end of every tick it redraws the board.
*
* the game obj gives us an interface for examining the contents of the board
* , but even inside of our gme we create a board that's inside of the game,
* but is separate in the sense that it could have methods, or we can interrogate
* the board and it not be connected to the game in any way.
*
* the game is separate from the representation of the board.
*
* If i had a diff way ofrepresenting  a cell, i wouldn't need a false
* to represent a cell. based on this implementation, anything that comes back
* falsey could be taken/treated as an empty. eg, empty string, undfined, 0, null
*
