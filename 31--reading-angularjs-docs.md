Using [the API documentation](https://docs.angularjs.org/api/), document the following parts of the framework; include the **arguments**, the **return value**, and **an example** of each in use:

## Functions

### `angular.module`
Returns an instance of _type_ `angular.Module`, which you should also document.

```
angular.module(name, [requires], [configFn]);
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
name  | string | Name of the module to create or retrieve
requires (optional)  | !Array.<string>= | If specified then the new module is being retrieved for further configuration.
configFn (optional)  | Function= | Optional configuration function for the module. Same as Module#config().

#### Returns
module -- new module with the`angular.Module` api.

#### An example
```
// Create a new module
var myModule = angular.module('myModule', []);
```

----

### `angular.extend`
Extends the destination object dst by copying own enumerable properties from the src object(s) to dst.

```
angular.extend(dst, src);
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
dst  | object | Destination object
src  | object | Source object(s)


#### Returns
object -- Reference to dst.

#### Notes + Example
#####Extending Objects
Source: [Pro AngularJS book](http://my.safaribooksonline.com/book/programming/javascript/9781430264484/chapter-5-javascript-primer/sec8_9781430264484_ch05_xhtml)
> AngularJS makes it easy to copy methods and properties from one object to another through the angular.extend method, which I have demonstrated below.

_Extending Objects in the jsdemo.html_
```
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <script type="text/javascript">
        var myData = {
            name: "Adam",
            weather: "sunny",
            printMessages: function () {
                console.log("Hello " + this.name + ". ");
                console.log("Today is " + this.weather + ".");
            }
        };

        var myExtendedObject = {
            city: "London"
        };

        angular.extend(myExtendedObject, myData);

        console.log(myExtendedObject.name);
        console.log(myExtendedObject.city);

    </script>
</head>
<body>
    This is a simple example
</body>
</html>
```

> In this example I create an object with a city property and assign it to the variable called `myExtendedObject`. I then use the `angular.extend` method to copy all of the properties and functions from the `myData` object to `myExtendedObject`.

>Finally, to demonstrate the mix of original and copied properties, I use the console.log method to write out the values of the name and city properties, producing the following console output:

```
Adam
London
```

> **Tip:** The extend method preserves any properties and methods on the target object. If you want to create a copy of an object without this preservation, then you can use the angular.copy method instead.

----

### `angular.copy`
Creates a deep copy of `source`, which should be an object or an array.

```
angular.copy(source, [destination]);
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
source  | `*` | Any type
destination (optional)  | Object, Array | Destination into which the source is copied. If provided, must be of the same type as source.


#### Returns
`*` -- The copy or updated `destination`, if `destination` was specified.

#### An example
```
var myCopy = angular.copy(myObj);
```

----


### `angular.element`
Wraps a raw DOM element or HTML string as a jQuery element.

If jQuery is available, `angular.element` is an alias for the jQuery function. If jQuery is not available, `angular.element` delegates to Angular's built-in subset of jQuery, called "jQuery lite" or "jqLite."

```
angular.element(element);
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
element  | string, DOMElement | HTML string or DOMElement to be wrapped into jQuery.


#### Returns
object -- jQuery object.
#### An example
```
var firstElement = angular.element('<div class="addAnimation">1</div>');
```

----

## Directives
Keep in mind that some directives can only be used on specific HTML elements!

### `ngApp`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngBind`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngClass`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngClick`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngController`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngDblclick`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngForm`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngKeyup`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngModel`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngRepeat`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----

### `ngSubmit`
Definition xxxx

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
xxxx  | xxxx | xxxx
xxxx  | xxxx | xxxxx


#### Returns

#### An example

----