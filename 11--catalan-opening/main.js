var moves = [
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
}

// Note: turns are commands, therefore we're not expecting it to return anything.
// Turn1: move pawn from   board[6][3] => board[4][3]
//                         board[6][3] => ' ',
//
var moves = {
  // move1
  step1: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  },

};

  // move2
  step2: function(){
    board[0][6] = board[2][5];
    board[0][6] = ' ';
  },
//

  // move3
  step3: function(){
    board[6][4] = board[6][2];
    board[6][2] = ' ';
  },
// Turn3: move pawn from board[6][2] => board[6][4]
//                         board[6][2] => ' ',
//
  // move4
  step4: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  },
// Turn4: move pawn from board[1][4] => board[2][4]
//                         board[1][4] => ' ',

  // move5
  step5: function(){
    board[4][6] = board[6][6];
    board[6][6] = ' ';
  },
// Turn5: move pawn from board[6][6] => board[4][6]
//                         board[6][6] => ' ',

  // move6
  step6: function(){
    board[3][3] = board[1][3];
    board[1][3] = ' ';
  },
// Turn6: move pawn from board[1][3] => board[3][3]
//                         board[1][3] => ' ',

  // move7
  step7: function(){
    board[6][6] = board[7][5];
    board[7][5] = ' ';
  },
// Turn7: move bishop from board[7][5] => board[6][6]
//                         board[7][5] => ' ',

  // move8
  step8: function(){
    board[1][4] = board[0][5];
    board[0][5] = ' ';
  },
// Turn8: move bishop from board[0][5] => board[1][4]
//                         board[0][5] => ' ',

  // move9
  step9: function(){
    board[5][5] = board[7][6];
    board[7][6] = ' ';
  },
// Turn9: move knight from board[7][6] => board[5][5]
//                         board[7][6] => ' ',
//
// game ends


// ------- Tests
describe('Testing the board state', function(){
  it('Move 1', function(){

  })
})







