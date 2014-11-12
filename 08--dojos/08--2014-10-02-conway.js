/**
 * Conway's Game of Life (LITE)
 *
 * @link http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 *
 * Consider a finite 3x3 board of cells:
 *
 *     0   1   2
 *   +---+---+---+
 * 0 |   |   |   |
 *   +---+---+---+
 * 1 |   |   |   |
 *   +---+---+---+
 * 2 |   |   |   |
 *   +---+---+---+
 *
 * Represented as:
 *
 * board = [
 *   [ false, false, false ],
 *   [ false, false, false ],
 *   [ false, false, false ],
 * ]
 *
 * Where each Boolean value represents the state of a `cell`, either
 * alive (`true`) or dead (`false`). Each cell can be accessed with
 * the index operators (`[n]`), e.g. `board[0][1]`, `board[2][2]`.
 *
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
 *
 * Use the provided `board` function to produce the initially empty
 * board, and test the following starting positions:
 *
 * Initially Empty Board
 * =====================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   |   |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Just One Cell
 * =============
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Two Cells in Any Arrangement
 * ============================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X | X | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 | X |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Three Cells in a Line
 * =====================
 *       start              tick 1             tick 2
 *     0   1   2          0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 0 |   | X |   |    0 |   |   |   |    0 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 | X | X | X | >> 1 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 2 |   | X |   |    2 |   |   |   |    2 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 *
 * You may test more starting position, if you like, of course.
 */

/** === PRODUCTION CODE === **/
var assert = require('assert');
/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected){
    assert.strictEqual(actual, expected);
    console.log('success');
}

/**
 * @return Array of Array of Boolean, a nested array representing an initially empty 3x3 board.
 */
function board(){
    return [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];
}

/**
 * Function Definition: conway()
 *
 * @name Identifier conway
 * @param Boolean cell state of cell
 * @param Array neighbors
 * @return Boolean state of cell
 *
 */
function conway(cell, neighbors) {
    var alive = 0;
    neighbors.forEach(function(neighbor) {
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
}// END conway

/**
 * @name neighborsOf Identifier
 * @param a `board`
 * @param Number, `row` coordinate of cell
 * @param Number, `col` coordinate of cell
 * @returns Array of values from `board`, that are neighbors of cell(`row`, `col`)
 */
 function neighborsOf(board, row, col) {
  var neighbors = [];
   if (row === 0 && col === 0) {
        return [
          board[0][1], board[1][0], board[1][1]
        ];
    }

    if (row === 0 && col === 1) {
        return [
          board[0][0], board[1][0], board[1][1],
          board[0][2], board[1][2]
        ];
    }

    if (row === 0 && col === 2) {
        return [
          board[0][1], board[1][1], board[1][2]
        ];
    }

    if (row === 1 && col === 0) {
        return [
          board[0][0], board[0][1], board[1][1],
          board[2][0], board[2][1]
        ];
    }

    if (row === 1 && col === 1) {
        return [
          board[0][0], board[0][1], board[0][2],
          board[1][0], board[1][2], board[2][0],
          board[2][1], board[2][2]
        ];
    }

    if (row === 1 && col === 2) {
        return [
          board[0][1], board[0][2], board[1][1],
          board[2][1], board[2][2]
        ];
    }

    if (row === 2 && col === 0) {
        return [
          board[1][0], board[1][1], board[2][1]
        ];
    }

    if (row === 2 && col === 1) {
        return [
          board[1][0], board[2][0], board[1][1],
          board[1][2], board[2][2]
        ];
    }

    if (row === 2 && col === 2) {
        return [
          board[1][1], board[1][2], board[2][1]
        ];
    }
} // END neighborsOf

 /**
  * Function Definition: tick()
  * @name  tick Identifier
  * @param board
  * @returns a NEW `board` representing the next generation
  */
function tick(board) {
  var newBoard = [];

  for (var i = 0; i < board.length; i++) {
     for (var z = 0; z < board[i].length; z++) {
      newBoard.push(conway(board[i][z], neighborsOf(board, i, z)));
    };
  };
};

/** === TEST CODE === **/
// A. generation rule: should NOT generate a new cell if < 3 neighbors
test(conway(false, [ ]), false);
test(conway(false, [ true ]), false);
test(conway(false, [ true, true ]), false);
test(conway(false, [ false, false, false ]), false);

// B. generation rule: should generate a new cell if there are exactly 3 neighbors
test(conway(false, [ true, true, true ]), true);

// C. generation rule: should NOT generate a new cell if there are MORE than 3 neighbors
test(conway(false, [ true, true, true, true ]), false);
test(conway(false, [ true, true, true, true, true ]), false);

// underpopulation rule
test(conway(true, [ ]), false);
test(conway(true, [ true ]), false);
test(conway(true, [ false, false ]), false);
test(conway(true, [ false, false, false ]), false);

// overpopulation rule
test(conway(true, [ true, true, true, true ]), false);
test(conway(true, [ true, true, true, true, true ]), false);

// starting positions
 var testCases = [
  [
   // Initially Empty Board
   [
     [ false, false, false ],
     [ false, false, false ],
     [ false, false, false ],
   ],
   // Just One Cell
   [
     [ false, false, false ],
     [ false, true, false ],
     [ false, false, false ],
   ],
   // Two Cells in Any Arrangement (Horizontal)
   [
     [ false, false, false ],
     [ false, true, true ],
     [ false, false, false ],
   ],
  ]
] // END testCases

var conwayTestCases = [
  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ], 0, 0, false
  ],

  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ], 1, 0, true
  ],

  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ], 1, 1, true
  ],
]; // END conwayTestCases

console.log('\n\nTests: conway()\n');

for (var index = 0; index < testCases.length; index++ ) {
  test(conway(conwayTestCases[index][0], conwayTestCases[index][1], conwayTestCases[index][2]), conwayTestCases[index][3]);
};