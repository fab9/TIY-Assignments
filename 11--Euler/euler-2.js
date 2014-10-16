var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

/**
 *
 * Each new term in the Fibonacci sequence is generated by adding
 * the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * exceed four million, find the sum of the even-valued terms.
 *
 *
 */

var sequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function filterEvens(fib) {
  if(fib % 2 === 0) return fib;
};

describe('filterEvens function', function(){
  it('should return even numbers', function(){
      expect(filterEvens(2)).to.equal(2);
  });
});
