/**
 * Check Writing
 *
 * Given an integer representing money -- $1234.56 -- convert
 * that into it;s string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */

 function toEnglish(value){
   var ones = [ "zero", 'one', 'two', 'three', 'four', 'five', 'six',
                'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen',
                'eighteen', 'nineteen'];

   var tens = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
                'eighty', 'ninety'];

   if (value > 19 ){
     value_ones = value - 20

     value_tens = value/10;

  if (value > 0){
          return tens[value_tens - 1] + ' ' + ones[value_ones];
        }

        return tens[value_tens - 1];
    }
    return ones[value];
  }

  var assert = require('assert');

  function test(actual, expected, success){
      assert(actual === expected) || console.log(success);
  }



var testCases = [

        [0, 'zero']
/*        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [21, 'twenty one'],*/];


 //for ( var index = 0; index < testCases.length; index++ ){
    testCases.forEach(forEachTestCase);

    function forEachTestCase (testCase, index, testCases){
        //console.log('inside forEach: ', testCase, index);
        message = 'should convert ' +
            testCases[index][0] + ' to ' + testCases[index][1];

        it(message, function(){
            //console.log('inside of it(): ', index, testCases[index]);
            test(testCases[index][0], testCases[index][1]);
        });
    };