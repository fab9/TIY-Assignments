Using [the API documentation](https://docs.angularjs.org/api/), document the following parts of the framework; include the **arguments**, the **return value**, and **an example** of each in use.

# Functions

## angular.module
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


## angular.extend
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

## angular.copy
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

## angular.element
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

# Directives
Keep in mind that some directives can only be used on specific HTML elements!

## ngApp
designates the root element of the application and is typically placed near the root element of the page such as `html` or `body` tags.

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngApp   | angular.Module | an optional application module name to load
ngStrictDi  | boolean | if this attribute is present on the app element, the injector will fail to invoke functions which do not use explicit function annotation (and thus unsuitable for minification).


#### Returns
????

#### An example
```
<!DOCTYPE html>
<html ng-app="exampleApp" >
```

## ngBind
Tells Angular to replace the text content of the specified HTML element with the value of a given expression



#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngBind  | expression | Expression to evaluate

#### An example
```
<p>Hell {{ name }}</p>
```

## ngClass
Allows you to dynamically set CSS classes on an HTML element.

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngClass  | expression | Expression to eval. The result of the evaluation can be a string representing space delimited class names, an array, or a map of class names to boolean values.


#### Returns

#### An example
```
<p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax Example</p>
```

## ngClick
Allows you to specify custom behavior when an element is clicked.

```
<button ng-click="count = count + 1" ng-init="count=0">
  Increment
</button>
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngClick  | expression | Expression to evaluate upon click.

#### Returns

#### An example
Source: [Pro AngularJS Book](http://my.safaribooksonline.com/book/programming/javascript/9781430264484/chapter-7-sportsstore-navigation-and-checkout/sec5_9781430264484_ch07_xhtml)

```
<button ng-click="count = count + 1" ng-init="count=0">
  Increment
</button>
```

## ngController
Attaches a controller class to the view.

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngController  | expression | Name of a constructor function registered with the current $controllerProvider or an expression that on the current scope evaluates to a constructor function.

#### Returns
n/a
#### An example
```
<div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
  Name:<input type="text" ng-model="settings.name"/>
  [ <a href="" ng-click="settings.greet()">greet</a> ]
  <br/>
  Contact:
  <ul>
    [....]
```

## ngDblclick
Allows you to specify custom behavior on a dblclick event.

```
usage
```

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngDblclick  | expression | expression to evaluate upon double click.

#### An example
```
<button ng-dblclick="count = count + 1" ng-init="count=0">
  Increment (on double click)
</button>
count: {{count}}
```


## ngForm
Nestable alias of form directive.


#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngForm (optional) | string  | Name of the form

## ngKeyup
Specify custom behavior on keyup event.

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngKeyup  | expression | Expression to evaluate upon keyup

#### An example
```
<p>Typing in the input box below updates the key count</p>
<input ng-keyup="count = count + 1" ng-init="count=0"> key up count: {{count}}
```


## ngModel
Binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

#### An example
```
<script>
 angular.module('inputExample', [])
   .controller('ExampleController', ['$scope', function($scope) {
     $scope.val = '1';
   }]);
</script>
<style>
  .my-input {
    -webkit-transition:all linear 0.5s;
    transition:all linear 0.5s;
    background: transparent;
  }
  .my-input.ng-invalid {
    color:white;
    background: red;
  }
</style>
Update input to see transitions when valid/invalid.
Integer is a valid value.
<form name="testForm" ng-controller="ExampleController">
  <input ng-model="val" ng-pattern="/^\d+$/" name="anim" class="my-input" />
</form>
```

## ngRepeat
Instantiates a template once per item from a collection.

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngRepeat  | repeat_expression | The expression indicating how to enumerate a collection.

#### An example
```
<header ng-repeat-start="item in items">
  Header {{ item }}
</header>
<div class="body">
  Body {{ item }}
</div>
<footer ng-repeat-end>
  Footer {{ item }}
</footer>

```

## ngSubmit
Enables binding angular expressions to onsubmit events.

#### Arguments
Param  | Type | Details
------------- | ------------- | -------------
ngSubmit  | expression | Expression to eval.

#### An example
```
<form ng-submit="submit()" ng-controller="ExampleController">
  Enter text and hit enter:
  <input type="text" ng-model="text" name="text" />
  <input type="submit" id="submit" value="Submit" />
  <pre>list={{list}}</pre>
</form>
```