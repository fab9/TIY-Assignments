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
    return this.board[x][y] === true;
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
  freshBoard = new board();
  // Apply `rules` to each cell in the current board...

  // Record the result of `rules` in the new board...
  // Update the current board to match the new board.
}

/**
 * What goes here?
 */
Game.prototype.rules = function(){

/** ---------------
 * @param Boolean cell
 * @param Array neighbors
 * @return Boolean state of cell
 */
function conway(cell, neighbors){
    var alive = 0;
    neighbors.forEach(function(neighbor){
        if ( neighbor ){
            alive++;
        }
    });

    if ( cell && alive === 2 ){
        return true;
    }
    if ( alive === 3 ){
        return true;
    }
    return false;
}
// -----------------
 /**
 * @param Array board of Array of Boolean (except for testing)
 * @param Number x coordinate of cell
 * @param Number y coordinate of cell
 * @return Array of values from `board` that are neighbors of cell(`x`, `y`)
 */
function neighborsOf(board, x, y){
    var diffs = [ -1, 0, +1 ],
        neighbors = [ ];

    // Apply each `diff` to the `x` coordinate...
    diffs.forEach(function(dX){
        // If no element exists, skip...
        if ( !board[x + dX] ) return;

        // Apply the `diff` to the `y` coordinate...
        diffs.forEach(function(dY){
            // skip yourself...
            if ( dX === 0 && dY === 0 ) return;

            // If no element exists, skip...
            if ( !board[x + dX][y + dY] ) return;

            neighbors.push(board[x + dX][y + dY]);
        });
    });

    return neighbors;
}


}// rules

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