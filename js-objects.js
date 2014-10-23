/**
 * Factory `solution`
 * @return Object with method `solveFor`
 */
function solution()
  return {
    solveFor: function(){

  };
}

var a = solution(), b = solution();

var assert = require('chai').assert;

it('should totally pass', function(){
  assert.typeOf(solution, 'function');
  assert.typeOf(a, '????');
  assert.typeOf(b, '???');
});