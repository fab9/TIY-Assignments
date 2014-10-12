var assert = require('assert');
// we start with completely empty grid bc it's the
// simplest thing.


///////////////////////////
function conway(cell, neighbors) {    // first
  var liveNeighbors = NumberOfLiveNeighbors(neighbors);
      if (liveNeighbors > 2).......
    return false;
}

function numberOfLiveNeighbors() {
 // simplest way to get to each neighbor: call by their index
    if (neighbors[0] === true) {
      return 1;
    }

    // with each neighbor
        // if neighbor is true
            // add 1 live neighbor
    // return live neighbors
    return 0;
}


var cell = false,
    neighbors = [
        false, false, false, false,
        false, false, false, false,
    ];

////////////// TESTS
assert.equal(conway(cell, neighbors), false,
      'an empty board should remain empty'
  ) || console.log('PASS!');


// more proper way than plain `assert`
assert.equal(conway(true, neighbors), false,
      'a cell with no neighbors dies'
  ) || console.log('PASS!');


// give cell some neighbors
assert.equal(conway(true, neighbors), false,
      'a cell with no neighbors dies'
  ) || console.log('PASS!');

  assert.equal(conway(true, neighbors), true,
        'should survuve'
    ) || console.log('PASS!');
