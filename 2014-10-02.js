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

var row0 = board[0]
var row1 = board[1]
var row2 = board[2]

console.log('---\nboard length is:  ' + board.length)
var flatArray = row0.concat(row1, row2);
console.log('flatArray length is:  ' + flatArray.length)

/** === TEST CODE === **/
// Check that board is empty
console.log(board[0][0] === false)
console.log(board[0][1] === false)
console.log(board[0][2] === false)
console.log(board[1][0] === false)
console.log(board[1][1] === false)
console.log(board[1][2] === false)
console.log(board[2][0] === false)
console.log(board[2][1] === false)
console.log(board[2][2] === false)


function oneCellAlive (board) {
    board[1][1] = true;
}

oneCellAlive(board);

/** === TEST CODE === **/
// Test starting position of oneCellAlive
console.log(board[0][0] === false)
console.log(board[0][1] === false)
console.log(board[0][2] === false)
console.log(board[1][0] === false)
console.log(board[1][1] === true)
console.log(board[1][2] === false)
console.log(board[2][0] === false)
console.log(board[2][1] === false)
console.log(board[2][2] === false)

// Refactor test code above
// Function should iterate through all cells and
// tell me how many are alive
// * INPUT: board - array of arrays
// * OUTPUT: String?

function checkForAliveCells(array) {
  var numberAliveCounter = 0;

  for (var i = 0; i < array.length; i++) {
      if (array[i] === true) {
          numberAliveCounter++
      };
  };
  console.log('Cell(s) alive: ' + numberAliveCounter)
}

checkForAliveCells(flatArray);

