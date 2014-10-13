#Mutators
`Array.prototype.copyWithin()`  
Copies a sequence of array elements within the array.  
`Array.prototype.fill()`  
Fills all the elements of an array from a start index to an end index with a static value.  
`Array.prototype.pop()`  
Removes the last element from an array and returns that element.  
`Array.prototype.push()`  
Adds one or more elements to the end of an array and returns the new length of the array.  
`Array.prototype.reverse()`  
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.  
`Array.prototype.shift()`  
Removes the first element from an array and returns that element.  
`Array.prototype.sort()`  
Sorts the elements of an array in place and returns the array.  
`Array.prototype.splice()`  
Adds and/or removes elements from an array.  
`Array.prototype.unshift()`  
Adds one or more elements to the front of an array and returns the new length of the array.  

#Accessor methods
These methods do not modify the array and return some representation of the array.

`Array.prototype.concat()`  
Returns a new array comprised of this array joined with other array(s) and/or value(s).  
`Array.prototype.contains()`  
Determines whether an array contains a certain element, returning true or false as appropriate.  
`Array.prototype.join()`  
Joins all elements of an array into a string.  
`Array.prototype.slice()`  
Extracts a section of an array and returns a new array.  
`Array.prototype.toSource()`  
Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource()`   method.  
`Array.prototype.toString()`  
Returns a string representing the array and its elements. Overrides the Object.prototype.toString()`   method.  
`Array.prototype.toLocaleString()`  
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString()`   method.  
`Array.prototype.indexOf()`  
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.  
`Array.prototype.lastIndexOf()`  
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.  

#Iterators
Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.  

`Array.prototype.forEach()`
Calls a function for each element in the array.
`Array.prototype.entries()`
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.  
`Array.prototype.every()`  
Returns true if every element in this array satisfies the provided testing function.  
`Array.prototype.some()`
Returns true if at least one element in this array satisfies the provided testing function.  
`Array.prototype.filter()`
Creates a new array with all of the elements of this array for which the provided filtering function returns true.  
`Array.prototype.find()`
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.  
`Array.prototype.findIndex()`
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.  
`Array.prototype.keys()`
Returns a new Array Iterator that contains the keys for each index in the array.  
`Array.prototype.map()`
Creates a new array with the results of calling a provided function on every element in this array.  
`Array.prototype.reduce()`
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.  
`Array.prototype.reduceRight()`
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.  


#Generics

## Array.from()   ??????????????
It creates a new array from an existing array.

Array.from("Friday is a fun day at the Iron Yard.")

Example:



## Array.isArray()  
Given: an array
Then: it should return true, if not an array then false.



Example:  
`Array.isArray(true) // false`

`Array.isArray(["apple", "orange"]) // true`



## Array.of() ??????????????????????



## concat()
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
---

## join()
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


## toString()
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


##indexOf()
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

## filter()

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

## map()
