var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}

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



/** === TEST CODE === **/
// Flatten board
var row0 = board[0]
var row1 = board[1]
var row2 = board[2]

var flatArray = row0.concat(row1, row2);

/**
* Function Definition: neighborsOf()
*
* this function finds out how many cells are alive
*
*
*
*/
function checkForAliveCells(array) {
  var numberAliveCounter = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === true) {
          numberAliveCounter++
      };
  };
  // console.log('Cell(s) alive: ' + numberAliveCounter)
  return numberAliveCounter;
}

// ----------- Check starting positions
console.log('it should check that board is empty: ',
  checkForAliveCells(flatArray) === 0);

/**
 * Function Definition: neighborsOf()
 *
 * @name neighborsOf Identifier
 * TODO: add all necessary info to this block
 * GIVEN a `board` and `row` and `col` coordinates...
 * THEN returns a list of the neighboring cells.
 *
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
          board[1][0], board[1][1],board[2][1]
        ];
    }
    if (row === 2 && col === 1) {
        return [
          board[1][0],board[2][0],board[1][1],
          board[1][2],board[2][2]
        ];
    }
    if (row === 2 && col === 2) {
        return [
          board[1][1], board[1][2], board[2][1]
        ];
    }
}


 }















