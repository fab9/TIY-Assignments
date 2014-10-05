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
function board(){
    return [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];
}


/** === TEST CODE === **/
// test that the board starts off empty?

//

