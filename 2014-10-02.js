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


var flatArray = row0.concat(row1, row2);


/** === TEST CODE === **/
// this function finds out how many cells are alive
var numberAliveCounter = 0;

function checkForAliveCells(array) {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === true) {
          numberAliveCounter++
      };
  };
  // console.log('Cell(s) alive: ' + numberAliveCounter)
  return numberAliveCounter;
}

/** === TEST CODE === **/
// Check that board is empty
console.log('it should check that board is empty: ',
  checkForAliveCells(flatArray) === 0);
