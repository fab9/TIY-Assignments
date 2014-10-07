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
var num2Words = function(num) {
  if (num === 1) {
    return "one";
  }

  if (num === 2) {
    return "two";
  }

  if (num === 3) {
    return "three";
  }

  if (num === 4) {
    return "four";
  }

  if (num === 5) {
    return "five";
  }

  if (num === 6) {
    return "six";
  }

  if (num === 7) {
    return "seven";
  }

  if (num === 8) {
    return "eight";
  }

  if (num === 9) {
    return "nine";
  }

  if (num === 10) {
    return "ten";
  }
}

// Tests
console.log('it should convert ' + 1 + ' to "one": ',
num2Words(1) === "one");

console.log('it should convert ' + 2 + ' to "two": ',
num2Words(2) === "two");

console.log('it should convert ' + 3 + ' to "three": ',
num2Words(3) === "three");

console.log('it should convert ' + 4 + ' to "four": ',
num2Words(4) === "four");

console.log('it should convert ' + 5 + ' to "five": ',
num2Words(5) === "five");

console.log('it should convert ' + 6 + ' to "six": ',
num2Words(6) === "six");

console.log('it should convert ' + 7 + ' to "seven": ',
num2Words(7) === "seven");

console.log('it should convert ' + 8 + ' to "eight": ',
num2Words(8) === "eight");

console.log('it should convert ' + 9 + ' to "nine": ',
num2Words(9) === "nine");

console.log('it should convert ' + 10 + ' to "ten": ',
num2Words(10) === "ten");





