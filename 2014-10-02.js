var assert = require('assert')

/** === PRODUCTION CODE === **/
/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
var board = [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
    ];

/**
 * Function Definition: conway()
 *
 * @name Identifier conway
 * @param Boolean cell
 * @return Boolean state of cell
 *
 * GIVEN the state of a `cell` and a list of neighboring cells...
 * THEN returns the state of the `cell` with the rules applied.
 *
 */
function conway(cell, neighbors) {
    if (neighbors.length === 3) {
        return true;
    }
    return false;
}

} // END conway

/**
 * Function Definition: neighborsOf()
 *
 * @name neighborsOf Identifier
 * TODO: add all necessary info to this block
 * GIVEN a `board` and `row` and `col` coordinates...
 * THEN returns a list of the neighboring cells.
 *
 */
//  function neighborsOf(board, row, col) {
//   var neighbors = [];
//    if (row === 0 && col === 0) {
//         return [
//           board[0][1], board[1][0], board[1][1]
//         ];
//     }

//     if (row === 0 && col === 1) {
//         return [
//           board[0][0], board[1][0], board[1][1],
//           board[0][2], board[1][2]
//         ];
//     }

//     if (row === 0 && col === 2) {
//         return [
//           board[0][1], board[1][1], board[1][2]
//         ];
//     }

//     if (row === 1 && col === 0) {
//         return [
//           board[0][0], board[0][1], board[1][1],
//           board[2][0], board[2][1]
//         ];
//     }

//     if (row === 1 && col === 1) {
//         return [
//           board[0][0], board[0][1], board[0][2],
//           board[1][0], board[1][2], board[2][0],
//           board[2][1], board[2][2]
//         ];
//     }

//     if (row === 1 && col === 2) {
//         return [
//           board[0][1], board[0][2], board[1][1],
//           board[2][1], board[2][2]
//         ];
//     }

//     if (row === 2 && col === 0) {
//         return [
//           board[1][0], board[1][1], board[2][1]
//         ];
//     }

//     if (row === 2 && col === 1) {
//         return [
//           board[1][0], board[2][0], board[1][1],
//           board[1][2], board[2][2]
//         ];
//     }

//     if (row === 2 && col === 2) {
//         return [
//           board[1][1], board[1][2], board[2][1]
//         ];
//     }
// } // END neighborsOf

 /**
  * Function Definition: tick()
  *
  * @name  tick Identifier
  *
  * GIVEN a `board`...
  * THEN returns a NEW `board` representing the next generation.
  *
  */




/** === TEST CODE === **/
/**
 * Check starting position #1: Empty board
 *
 */
// Concatenate all 3 arrays
// var row0 = board[0]
// var row1 = board[1]
// var row2 = board[2]
// var flatArray = row0.concat(row1, row2);

// Give me the total number of live cells
// function checkForAliveCells(array) {
//   var numberAliveCounter = 0;
//   for (var i = 0; i < array.length; i++) {
//       if (array[i] === true) {
//           numberAliveCounter++
//       };
//   };
//   return numberAliveCounter;
// }

// console.log('it should check that board is empty: ',
//   checkForAliveCells(flatArray) === 0);

// David's rules tests
describe('generation rule', function() {

  it('should NOT generate a new cell if there are fewer than 3 neighbors', function() {
      test(conway(false, []), false);
      test(conway(false,[true]), false);
      test(conway(false, [true, true]), false);
      test(conway(false, [false, false, false]), false);
  });

  it('should generate a new cell if there are exactly 3 neighbors', function() {
    test(conway(false, [true, true, true]), true);
  });
})
















