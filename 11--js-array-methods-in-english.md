## Array.from() ??????????????
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
