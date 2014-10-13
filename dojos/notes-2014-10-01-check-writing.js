var assert = require('assert');

function test(actual, expected, success){
assert(actual === expected) || console.log(success);
}

/*
* Check writing
*
* Given an Number representing money == 1234.56 -- convert that into its string representation
* in English words. For example 1234.56 is " one thousand two hundred thirty four and 56/100s
* just like you would see on a check
*
* In a lot of ways this is the inverse of the "string calculator" problem
* so a lot of what you've learned there will be put into practive here, but backwards.
*
* Sample Data
* 1234.56 == one thousand two hundred thirty four and 56/100s
* 123.45 == one hundred twenty three and 45/100s
* 12.34 tweleve and 34/ 1000s
* 1.23 = "one and 23/100s
*
* EXTRA CREDIT!
* 12,345,678.90 "twelve million three hundred fourty five thousand, six hundred seventy eight and
* 90/100s"
*
* make up your own too"
*/
array1 = [ ]

// split the input into single digits => (33).toString()
// then insert those digits into array 1
// print the number at index[0]


function numbers2Words(num) {
  if(num === 1){
    num = "one";
  }

  if(num === 2){
    num = "two";
  }

  if(num === 3){
    num = "three";
  }
  return num;
}


///// Verbose tests
console.log('Should take 1 and return "one"',
numbers2Words(1) === "one");

console.log('Should take 2 and return "two"',
numbers2Words(2) === "two");

console.log('Should take 3 and return "three"',
numbers2Words(3) === "three");


//
// testNumbers2Words(1,"one")
//
// // Testing cents
// console.log('Should take 1.50 and return "one and 50/100"',
// numbers2Words(1.50) === "one and 50/100");
//
// console.log('Should take 1.75 and return "one and 75/100"',
// numbers2Words(1.75) === "one and 75/100");
//
// / This is the test robot

//////////// ROBOT 1
function testNumToWords(a,b) {
  console.log('Should convert ' + a + ' to ' + b,
  numbers2Words(a)  === b);
  }


/////////// Shorter tests using robot 1
testNumToWords(1,"one");
