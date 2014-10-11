/** functions/variables I might need:
* startGame
* endGame
* var gameFinished = false
* nextTurn or playGame?
* turnsRemaining - how many turns until the game finishes? Set to 9
* turnsTaken - set to 0
*/

var board = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], // 0
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], // 1
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 2
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 3
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 4
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 5
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], // 6
  ['r', 'r', 'b', 'q', 'k', 'b', 'n', 'r'], // 7
 // 0,   1,   2,   3,   4,   5,   6,   7
];

// render board and chessPieces
// game begins with a confirmation box "Play turn 1?"
// Turn1: move pawn from   board[6][3] => board[4][3]
//                         board[6][3] => empty
// conf box: "Play turn 2?"
// Turn2: move knight from board[0][6] => board[2][5]
//                         board[0][6] => empty
// conf box: "Play turn 3?"
// Turn3: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty
// conf box: "Play turn 4?"
// Turn4: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty
// conf box: "Play turn 5?"
// Turn5: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty
// conf box: "Play turn 6?"
// Turn6: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty
// conf box: "Play turn 7?"
// Turn7: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty
// conf box: "Play turn 8?"
// Turn8: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty
// conf box: "Play turn 9?"
// Turn9: move knight from board[xx][xx] => board[xx][xx]
//                         board[xx][xx] => empty





// ------- Tests

// Test board's starting position
console.log(board )