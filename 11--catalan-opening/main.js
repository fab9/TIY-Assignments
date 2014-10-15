// Note: turns are commands, therefore we're not expecting it to return anything.
var board = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], // 0
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], // 1
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 2
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 3
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 4
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 5
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], // 6
  ['r', 'r', 'b', 'q', 'k', 'b', 'n', 'r'] // 7
 // 0,   1,   2,   3,   4,   5,   6,   7
];

console.log(board.join('\n') + '\n\n');

var moves = {
  // move1
  step1: function(){
    board[4][4] = board[6][4];
    board[6][4] = ' ';
    // console.log(board.join('\n') + '\n\n');

  },


//   // move2
//   step2: function(){
//     board[0][6] = board[2][5];
//     board[0][6] = ' ';
//   },
// //

//   // move3
//   step3: function(){
//     board[6][4] = board[6][2];
//     board[6][2] = ' ';
//   },

//   // move4
//   step4: function(){
//     board[2][4] = board[1][4];
//     board[1][4] = ' ';
//   },

  // // move5
  // step5: function(){
  //   board[4][6] = board[6][6];
  //   board[6][6] = ' ';
  // },

  // // move6
  // step6: function(){
  //   board[3][3] = board[1][3];
  //   board[1][3] = ' ';
  // },

  // // move7
  // step7: function(){
  //   board[6][6] = board[7][5];
  //   board[7][5] = ' ';
  // },

  // // move8
  // step8: function(){
  //   board[1][4] = board[0][5];
  //   board[0][5] = ' ';
  // },

  // // move9
  // step9: function(){
  //   board[5][5] = board[7][6];
  //   board[7][6] = ' ';
  // },
//
// game ends
}

// ------- Tests
var assert = require('chai').assert
var expect = require('chai').expect


describe('Testing the board state', function(){
  it('after Move 1, the board should look like:', function(){
    moves.step1();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    )
  });
  it('after Move 2, the board should look like:', function(){
    moves.step2();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    )
  });
  it('after Move 3, the board should look like:', function(){
    moves.step3();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    )
  });
  it('after Move 4, the board should look like:', function(){
    moves.step4();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    )
  });
  // it('should be a pawn at board[2][4]', function(){
  //   assert.equal(moves.step7, board[2][4]);
  // })
  // it('should be a pawn at board[5][6]', function(){
  //   assert.equal(moves.step9, board[5][6]);
  // })
  // it('should be a bishop at board[1][4]', function(){
  //   assert.equal(moves.step11, board[1][4]);
  // })
  // it('after step 12: board[0][5] to be blank', function(){
  //   expect(board[0][5]).to.equal(' ');
  // })
  // it('should be a pawn at board[4][2]', function(){
  //   assert.equal(moves.step13, board[4][2]);
  // })
  // it('should be a knight at board[2][5]', function(){
  //   assert.equal(moves.step15, board[2][5]);
  // })
  // it('should be a bishop at board[6][6]', function(){
  //   assert.equal(moves.step17, board[6][6]);
  // })
//
 });