var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
/**
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * Input:
 * Output: Number, sum of all the multiples of 3 or 5 or below.
 */

 // threeArray = multiples of 3
 // fiveArray = multiples of 5
 // results = holds the multples of both arays - any duplicates,
 //           then sum
 //
 // forEach element of 3-array, loop through the 5-array elements
 //
 //
 //
 //
var threeArray = [ ];

function multiplyByThree() {
  return 3;
};

describe('Function multiplyByThree', function(){
  it('should be a function', function(){
      assert.typeOf(multiplyByThree, 'function');
  });
});