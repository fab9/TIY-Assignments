#JavaScript Methods
##Mutators
###`Array.prototype.copyWithin()`  
>copy the elements starting at index 0 of whichever array you give me,
and paste them starting at index 0 of the *new* array.
```javascript
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
```
###`Array.prototype.fill()`  
Fills all the elements of an array from(an optional) start to an end index.
```javascript
[1, 2, 3].fill(4, 1, 2)         // [1, 4, 3]
```
###`Array.prototype.pop()`  
Removes the last element from an array and returns that element.
```javascript
arr.pop()
var x = [1,2,3,4,5];
x.pop() //5
x === [1,2,3,4];
```
###`Array.prototype.push()`  
adds one or more elements to the end of an array and returns the new length of the array.
```javascript
arr.push(element1,element2,...elementX)
var x = [1,2,3,4,5];
x.push(6) // 6
x === [1,2,3,4,5,6];
```
###`Array.prototype.reverse()`  
```javascript
arr.reverse()
var x = [1,2,3,4,5,6];
x.reverse() //6,5,4,3,2,1
x === [6,5,4,3,2,1];
```
###`Array.prototype.shift()`  
removes the first element in the array and returns it, changes the length of the array.
```javascript
arr.shift()
var x = [6,5,4,3,2,1];
x.shift() // takes away first element
x === [5,4,3,2,1];
```

###`Array.prototype.sort()`  
Sorts the elements of an array in place and returns the array. (or: sorts the objects in an array by unicode code points.)
```javascript
arr.sort([compareFunction])
var x = [5,4,3,2,1];
x.sort() // 1-5
x === [1,2,3,4,5];
```
###`Array.prototype.splice()`  
Changes the content of an array adding new elements and removing old elements.
```javascript
array.splice(index, howMany[, element1[, ...[, elementN]]]) array.splice(index)
var x = [1,2,3,4,5];
x.splice(0,2) // 1 and 3
x === [2,4,5];
```
###`Array.prototype.unshift()`  
Adds one or more elements to the front of an array and returns the new length of the array.  
```javascript
arr.unshift([element1[,element2[, element3]]])
var x = [3,4,5];
x.unshift(1,2); // adds to the front
x === [1,2,3,4,5]
```
##Accessor methods
These methods do not modify the array and return some representation of the array.

###`Array.prototype.concat()`  
Given: 2 or more arrays  
Returns: a new array  

Example:
```javascript
var array1 = [1, 2, 3],
    array2 = [4, 5, 6];

var newLongArray = array1.concat(array2);
console.log(newLongArray);
// [1, 2, 3 4, 5, 6]
```

###`Array.prototype.contains()`  
Determines whether an array contains a certain element, returning true or false as appropriate.  
```javascript
arr.contains(searchElement[, fromIndex])
```
###`Array.prototype.join()`  
Given: one arrays  
Returns: all elements of the array into a string  

> The join method is a way to combine all the items in an array quickly with a certain term or separator. [src](http://my.safaribooksonline.com/book/programming/javascript/9780133016321/5dot-storing-data-in-javascript/ch05lev1sec2)

Example:
```javascript
var food = ["apple", "coffee"];
var result = food.join(" ,");
console.log(result);
// apple, coffee
```
### Array.prototype.slice()
returns a portion of an array into a new array object
```javascript
arr.slice([begin[,end]])
var x = [1,2,3,4,5,6];
x.slice(0,2) // 1,2
x === [1,4,5,6];
```

### Array.prototype.toSource()
returns a string representing the source code of the array.
```javascript
arr.toSource
```
###`Array.prototype.toString()`  
Given: an array  
Returns: a string made up of the elements in the array  

Similar to `join` it seems, except with `join` you can specify a separator.

Example:
```javascript
var fruit = ["apple", "orange"];
var result = fruit.toString();
console.log(result);
// apple,orange
```

### Array.prototype.toLocaleString()
returns a string representing the elements of the array using the locale string method.
```javascript
arr.toLocaleString()
```
###`Array.prototype.indexOf()`  
Given: a value, looks for that value inside an array and...  
Returns: the value's index *if* it exists, or -1 if it doesn't exist

> As with the string uses of these functions, you want to perform a comparison against -1 when using one of these functions as the basis of a conditional:
```javascript
if (months.indexOf('February') != -1) {
  ```
  [-src](http://my.safaribooksonline.com/book/programming/javascript/9780132905848/6dot-complex-variable-types/ch06lev1sec2)


Examples:
```javascript
var food = ["apple", "coffee"];
var result = food.indexOf("apple");
console.log(result);
// 0
```

```javascript
var food = [true, false];
var result = food.indexOf(true);
console.log(result);
// 0
```

**Note**: I don't understand examples below:  
```javascript
index = array.indexOf(9, 2);
// index is 2
index = array.indexOf(2, -1);
// index is -1
index = array.indexOf(2, -3);
// index is 0
```
###`Array.prototype.lastIndexOf()`  
Returns the last index at which a given element can be found in the array or -1 if its not in the array.
```javascript
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
var x = ['beer','food','name'];
x.lastIndexOf('name')//2
x === ['beer', 'food', 'name'];
```
#Iterators
###`Array.prototype.forEach()`
Calls a function for each element in the array.
###`Array.prototype.entries()`
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.  
###`Array.prototype.every()`  
Returns true if every element in this array satisfies the provided testing function.  
###`Array.prototype.some()`
Returns true if at least one element in this array satisfies the provided testing function.  
###`Array.prototype.filter()`
Given: an array and a function to test each element in the array  
Returns: a new array with all the elements that pass the test implemented by the given function

Examples:
```javascript
var numbers = [1, 23, 55, 3, 4];

function lessThanTen(numbers) {
  return numbers < 10;
}

var filtered = numbers.filter(lessThanTen);
console.log(filtered);
// [1, 3, 4]
```
###`Array.prototype.find()`
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.  
###`Array.prototype.findIndex()`
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.  
###`Array.prototype.keys()`
Returns a new Array Iterator that contains the keys for each index in the array.  
###`Array.prototype.map()`
Creates a new array with the results of calling a provided function on every element in this array.  
###`Array.prototype.reduce()`
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.  
###`Array.prototype.reduceRight()`
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.  


##Generics

###Array.from()   ??????????????
It creates a new array from an existing array.

Array.from("Friday is a fun day at the Iron Yard.")

Example:

###`Array.isArray()`  
Given: an array
Then: it should return true, if not an array then false.

Example:  
`Array.isArray(true) // false`

`Array.isArray(["apple", "orange"]) // true`
