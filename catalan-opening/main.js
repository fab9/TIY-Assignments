/** functions/variables I might need:
* startGame
* endGame
* currentTurn
* gameInProgress
* currentBoard
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
  ['r', 'r', 'b', 'q', 'k', 'b', 'n', 'r'] // 7
 // 0,   1,   2,   3,   4,   5,   6,   7
];



// access the button
var startButton = document.getElementById('btn-start');
// add an event listener to the start button
startButton.addEventListener('click', clickHandler, false);
// when the start button is clicked, the event listener runs a fn called clickHandler
function clickHandler() {
	// render board's starting position
	board;
	console.log("Button clicked");

}

// Turn1: move pawn from   board[6][3] => board[4][3]
//                         board[6][3] => empty
// if (confirm('Play turn 1')){
//   board[6][3] = board[4][3];
//   board[6][3];
//   console.log(board);
// };
//
// click Next move button
// Turn2: move knight from board[0][6] => board[2][5]
//                         board[0][6] => empty
// click Next move button
// Turn3: move pawn from board[6][2] => board[6][4]
//                         board[6][2] => empty
// click Next move button
// Turn4: move pawn from board[1][4] => board[2][4]
//                         board[1][4] => empty
// click Next move button
// Turn5: move pawn from board[6][6] => board[4][6]
//                         board[6][6] => empty
// click Next move button
// Turn6: move pawn from board[1][3] => board[3][3]
//                         board[1][3] => empty
// click Next move button
// Turn7: move bishop from board[7][5] => board[6][6]
//                         board[7][5] => empty
// click Next move button
// Turn8: move bishop from board[0][5] => board[1][4]
//                         board[0][5] => empty
// click Next move button
// Turn9: move knight from board[7][6] => board[5][5]
//                         board[7][6] => empty
// game ends


// ------- Tests








