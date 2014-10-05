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

