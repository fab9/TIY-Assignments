var assert = require('assert');

function test(actual, expected, success){
    success = success || 'pass!';

    assert(actual === expected) || console.log(success);
}

/**
 * Check Writing
 *
 * Given an Number representing money -- $1234.56 -- convert
 * that into it's string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways, this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */

/**
 * Sample Data:
 *
 * $ 1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * $ 123.45  => "one hundred twenty three and 45/100s"
 * $ 12.34   => "twleve and 34/100s"
 * $ 1.23    => "one and 23/100s"
 *
 * EXTRA CREDIT!
 *
 * $ 12,345,678.90 =>
 * "twelve million, three hundred fourty five thousand, six hundred
 *   seventy eight and 90/100s"
 *
 * Make up your own, too.
 */

var ones = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9:"nine"};
var tens = {10: "ten", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninety"};

var num2Words = function(num) {
  // if number has 1 digit
  if (num < 10) {
    // iterate through tens array until you find a match and exit
    return ones[num];
  }
  // if num is 2 digits and starts with a 3
  if (num > 29) {
    // grab the integer (ignore decimals)
    var resultOfDividingByTen = num / 10;
    var firstDigit = Math.floor(resultOfDividingByTen) * 10;
    // lookup first digit in tens dict and
    var wordBeginning = tens[firstDigit];
    // lookup second digit in ones dict
    var wordEnd = num % 10;

    // check the second digit, if it's 0 then
    if (wordEnd === 0) {
    // lookup first digit in tens dictionary and return its match
     return tens[firstDigit];
    }
  // return its match
  return wordBeginning + " " + ones[wordEnd];
  }
}

  // if (num === 1) {
  //   return "one";
  // }
  // if (num === 2) {
  //   return "two";
  // }

  // if (num === 3) {
  //   return "three";
  // }

  // if (num === 4) {
  //   return "four";
  // }

  // if (num === 5) {
  //   return "five";
  // }

  // if (num === 6) {
  //   return "six";
  // }

  // if (num === 7) {
  //   return "seven";
  // }

  // if (num === 8) {
  //   return "eight";
  // }

  // if (num === 9) {
  //   return "nine";
  // }

  // if (num === 10) {
  //   return "ten";
  // }


// ------------ Tests
// First refactor
function testNum2Words(a,b) {
  console.log('it should convert ' + a + ' to "' + b + '" :' ,
  num2Words(a) === b);
}
// commenting out temporarily
// testNum2Words(1, "one");
// testNum2Words(2, "two");
// testNum2Words(3, "three");
// testNum2Words(4, "four");
// testNum2Words(5, "five");
// testNum2Words(6, "six");
// testNum2Words(7, "seven");
// testNum2Words(8, "eight");
// testNum2Words(9, "nine");
testNum2Words(10, "ten");
testNum2Words(20, "twenty");
testNum2Words(30, "thirty");
testNum2Words(33, "thirty three");
testNum2Words(89, "eighty nine");
testNum2Words(100, "one hundred");
testNum2Words(212, "two hundred twelve");

// Original (not refactored)
// console.log('it should convert ' + 1 + ' to "one": ',
// num2Words(1) === "one");

// console.log('it should convert ' + 2 + ' to "two": ',
// num2Words(2) === "two");

// console.log('it should convert ' + 3 + ' to "three": ',
// num2Words(3) === "three");

// console.log('it should convert ' + 4 + ' to "four": ',
// num2Words(4) === "four");

// console.log('it should convert ' + 5 + ' to "five": ',
// num2Words(5) === "five");

// console.log('it should convert ' + 6 + ' to "six": ',
// num2Words(6) === "six");

// console.log('it should convert ' + 7 + ' to "seven": ',
// num2Words(7) === "seven");

// console.log('it should convert ' + 8 + ' to "eight": ',
// num2Words(8) === "eight");

// console.log('it should convert ' + 9 + ' to "nine": ',
// num2Words(9) === "nine");

// console.log('it should convert ' + 10 + ' to "ten": ',
// num2Words(10) === "ten");





