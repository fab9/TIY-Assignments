/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */
var letters2Numbers = function(letters) {
 if (letters ==  "zero") {
    letters = 0;
 }

 if (letters == "one") {
    letters = 1;
 }

  if (letters == "two") {
    letters = 2;
 }

  if (letters == "three") {
    letters = 3;
 }

  if (letters == "four") {
    letters = 4;
 }

   if (letters == "five") {
    letters = 5;
 }

   if (letters == "six") {
    letters = 6;
 }

   if (letters == "seven") {
    letters = 7;
 }

   if (letters == "eight") {
    letters = 8;
 }

   if (letters == "nine") {
    letters = 9;
 }

   if (letters == "ten") {
    letters = 10;
 }

 return letters;
}

var add = function(a,b) {
  a = letters2Numbers(a);
  b = letters2Numbers(b);
  return a + b;
}
// var add = function(a,b) {
//   if(a === "zero" && b === "one")  {
//     return 1;
//   }

//   if(a === "one" && b === "one") {
//     return 2;
//   }

//   if(a === "two" && b === "one") {
//     return 3;
//   }

//   if(a === "three" && b === "one") {
//     return 4;
//   }

//   if(a === "four" && b === "one") {
//     return 5;
//   }

//   if(a === "five" && b === "one") {
//     return 6;
//   }

//   if(a === "six" && b === "one") {
//     return 7;
//   }

//   if(a === "seven" && b === "one") {
//     return 8;
//   }

//   if(a === "eight" && b === "one") {
//     return 9;
//   }

//   if(a === "nine" && b === "one") {
//     return 10;
//   }
// }

// ------------ Tests

function testLetters2Numbers(a, b){
  console.log('It should convert "' + a + '" to ' + b + ':',
        letters2Numbers(a) === b);
}

testLetters2Numbers("one", 1);
testLetters2Numbers("two", 2);
testLetters2Numbers("three", 3);
testLetters2Numbers("four", 4);
testLetters2Numbers("five", 5);
testLetters2Numbers("six", 6);
testLetters2Numbers("seven", 7);
testLetters2Numbers("eight", 8);
testLetters2Numbers("nine", 9);
testLetters2Numbers("ten", 10);
// -----
// function addTest (a,b,c) {
//   console.log('Should add ' + a + " and " + b + " to equal " + c + " => ",
//   add(a,b) ==c);
// }

// addTest("zero", "one", 1);
// addTest("one" , "one", 2);
// addTest("two", "one", 3);
// addTest("three", "one", 4);
// addTest("four", "one", 5);
// addTest("five", "one", 6);
// addTest("six", "one", 7);
// addTest("seven", "one", 8);
// addTest("eight", "one", 9);
// addTest("nine", "one", 10);
// ---------
// console.log('Should add "zero" and "one": ',
// add("zero", "one") === 1);
// console.log('Should add "one" and "one": ',
// add("one", "one") === 2);
// console.log('Should add "one" and "two": ',
// add("one", "two") === 3);
// console.log('Should add "one" and "three": ',
// add("one", "three") === 4);
