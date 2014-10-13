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


var letters2Numbers = function (a) {
  if (a === "zero")
    {return 0;}

  if (a === "one")
    {return 1;}

  if (a === "two")
    {return 2;}

  if (a === "three")
    {return 3;}

  if (a === "four")
    {return 4;}

  if (a === "five")
    {return 5;}

  if (a === "six")
    {return 6;}

  if (a === "seven")
    {return 7;}

  if (a === "eight")
    {return 8;}

  if (a === "nine")
    {return 9;}

  if (a === "ten")
    {return 10;}
}

var add = function (a,b){
  a = letters2Numbers (a);
  b = letters2Numbers (b);
  return a + b;
}

var addTest = function (a,b,c) {

console.log('Should add "' + a + '" and "' + b + '": ',
  add(a, b) === c);
}

addTest("zero","zero", 0)
addTest("zero","one", 1)
addTest("zero","two", 2)
addTest("zero","three", 3)
addTest("zero","four", 4)
addTest("zero","five", 5)
addTest("zero","six", 6)
addTest("zero","seven", 7)
addTest("zero","eight", 8)
addTest("zero","nine", 9)
addTest("zero","ten", 10)
addTest("one","zero", 1)
addTest("one","one", 2)
addTest("one","two", 3)
addTest("one","three", 4)
addTest("one","four", 5)
addTest("one","five", 6)
addTest("one","six", 7)
addTest("one","seven", 8)
addTest("one","eight", 9)
addTest("one","nine", 10)
addTest("one","ten", 11)
addTest("two","zero", 2)
addTest("two","one", 3)
addTest("two","two", 4)
addTest("two","three", 5)
addTest("two","four", 6)
addTest("two","five", 7)
addTest("two","six", 8)
addTest("two","seven", 9)
addTest("two","eight", 10)
addTest("two","nine", 11)
addTest("two","ten", 12)
addTest("three","zero", 3)
addTest("three","one", 4)
addTest("three","two", 5)
addTest("three","three", 6)
addTest("three","four", 7)
addTest("three","five", 8)
addTest("three","six", 9)
addTest("three","seven", 10)
addTest("three","eight", 11)
addTest("three","nine", 12)
addTest("three","ten", 13)
addTest("four","zero", 4)
addTest("four","one", 5)
addTest("four","two", 6)
addTest("four","three", 7)
addTest("four","four", 8)
addTest("four","five", 9)
addTest("four","six", 10)
addTest("four","seven", 11)
addTest("four","eight", 12)
addTest("four","nine", 13)
addTest("four","ten", 14)
addTest("five","zero", 5)
addTest("five","one", 6)
addTest("five","two", 7)
addTest("five","three", 8)
addTest("five","four", 9)
addTest("five","five", 10)
addTest("five","six", 11)
addTest("five","seven", 12)
addTest("five","eight", 13)
addTest("five","nine", 14)
addTest("five","ten", 15)
addTest("six","zero", 6)
addTest("six","one", 7)
addTest("six","two", 8)
addTest("six","three", 9)
addTest("six","four", 10)
addTest("six","five", 11)
addTest("six","six", 12)
addTest("six","seven", 13)
addTest("six","eight", 14)
addTest("six","nine", 15)
addTest("six","ten", 16)
addTest("seven","zero", 7)
addTest("seven","one", 8)
addTest("seven","two", 9)
addTest("seven","three", 10)
addTest("seven","four", 11)
addTest("seven","five", 12)
addTest("seven","six", 13)
addTest("seven","seven", 14)
addTest("seven","eight", 15)
addTest("seven","nine", 16)
addTest("seven","ten", 17)
addTest("eight","zero", 8)
addTest("eight","one", 9)
addTest("eight","two", 10)
addTest("eight","three", 11)
addTest("eight","four", 12)
addTest("eight","five", 13)
addTest("eight","six", 14)
addTest("eight","seven", 15)
addTest("eight","eight", 16)
addTest("eight","nine", 17)
addTest("eight","ten", 18)
addTest("nine","zero", 9)
addTest("nine","one", 10)
addTest("nine","two", 11)
addTest("nine","three", 12)
addTest("nine","four", 13)
addTest("nine","five", 14)
addTest("nine","six", 15)
addTest("nine","seven", 16)
addTest("nine","eight", 17)
addTest("nine","nine", 18)
addTest("nine","ten", 19)
addTest("ten","zero", 10)
addTest("ten","one", 11)
addTest("ten","two", 12)
addTest("ten","three", 13)
addTest("ten","four", 14)
addTest("ten","five", 15)
addTest("ten","six", 16)
addTest("ten","seven", 17)
addTest("ten","eight", 18)
addTest("ten","nine", 19)
addTest("ten","ten", 20)
