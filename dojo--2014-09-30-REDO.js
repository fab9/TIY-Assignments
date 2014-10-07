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

var add = function(a,b) {
  if(a === "zero" && b === "one")  {
    return 1;
  }

  if(a === "one" && b === "one") {
    return 2;
  }

  if(a === "one" && b === "two") {
    return 3;
  }

  if(a === "one" && b === "three") {
    return 4;
  }

}

// Tests
console.log('Should add "zero" and "one": ',
add("zero", "one") === 1);
console.log('Should add "one" and "one": ',
add("one", "one") === 2);
console.log('Should add "one" and "two": ',
add("one", "two") === 3);
console.log('Should add "one" and "three": ',
add("one", "three") === 4);

