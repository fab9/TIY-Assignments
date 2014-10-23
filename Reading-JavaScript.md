#05--Reading-Javascript
##Ex 1
```javascript
function _previousStep() {
    this._direction = 'backward';

    if (this._currentStep === 0) {
      return false;
    }
```

* Variable:`this._direction `
* Operators: `===`
* Booleans: `false`

##Ex 2
```javascript
var nextStep = this._introItems[--this._currentStep];
    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
      this._introBeforeChangeCallback.call(this, nextStep.element);
    }
```

* Variable: `nextStep`
* Operators:`!==`

##Ex 3
```javascript
   var helperLayer = targetElement.querySelector('.introjs-helperLayer');
    if (helperLayer) {
      helperLayer.parentNode.removeChild(helperLayer);
    }

```

* Variable: `helperLayer`
* Operators: `=`

##Ex 4
```javascript
  var fixParents = document.querySelectorAll('.introjs-fixParent');
```

* Variable: `fixParens`
* Operators: `=`

##Ex 5
```javascript
 if (fixParents && fixParents.length > 0) {
```

* Value: Number 0
* Operators: `>`

##Ex 6
```javascript
    this._direction = 'forward';
```

* Variable: `this._direction`

##Ex 7
```javascript
      for (var i = fixParents.length - 1; i >= 0; i--) {
```

* Variable: `i`
* Value: Number 0, 1
* Operators: `=`, `-`,`>`

##Ex 8
```javascript
        var innerLi    = document.createElement('li');
        var anchorLink = document.createElement('a');
```

* Variable: `innerLi`,`anchorLink`
* Value: Number 0

##Ex 9
```javascript
      if (top < 0 || targetElement.element.clientHeight > winHeight) {
        window.scrollBy(0, top - 30);
```

* Variable: `clientHeight`, `winHeight`
* Value: Number 0, 30
* Operators: `-`, `||`, `>`, `<`

##Ex 10
```javascript
 while (parentElm != null) {
```

* Variable: `parentElm`
* Value: null
* Operators: `=`, `!`

#06--Coding-Dojo
You need 10 more (unique) examples and should include conditionals, loops, and lists (arrays).
##Ex 11
```javascript
 /**
   * Keyword
   * =======
   * name: Conditional
   * symbol: if
   *
   * Operator
   * ========
   * name: Conditional
   * symbol: () parentheses
   *
   * Identifier?
   * ==========
   * name: Parameter (Special Variable)
   * symbol?: typeof
   *
   * Identifier
   * ==========
   * name: Parameter (Special Variable)
   * symbol: exports
   *
   * Operator
   * ========
   * name: Triple Equal, Strictly Equal
   * symbol: ===
   * operands:
   * - typeof exports
   * - 'object'
   *
   * Type Literal
   * ============
   * name: String
   * symbol: 'object'
   *
   * Operator
   * ========
   * name: Block
   * nickname: Moustache
   * symbol: { }
   */
    // if ( condition ) expression;
    if (typeof exports === 'object') {
```
##Ex 12
```javascript
/**
  * Keyword
  * =======
  * name: Loop
  * symbol: for
  *
  * Operator
  * ========
  * name: Conditional
  * symbol: () parentheses
  *
  * Keyword
  * =======
  * name: Variable declaration
  * symbol: var
  *
  * Identifier
  * ========
  * name: Variable
  * symbol: z
  *
  * Operator
  * ========
  * name: Assignment
  * symbol: =
  * operands:
  * - Variable: z
  * - Number
  *
  * Operator
  * ============
  * name: Greater Than
  * symbol: >
  * operands:
  * - z
  * - introItems.length
  *
  * Identifier
  * ==========
  * name: Variable
  * symbol: z
  *
  * Operator
  * ========
  * name: Plus
  * symbol: +
  * operands:
  * - z
  *
  * Operator
  * ========
  * name: Block
  * nickname: Moustache
  * symbol: { }
  */
   // for ([initialization]; [condition]; [final-expression])
   // statement
    for (var z = 0; z < introItems.length; z++) {
```
##Ex 13
```javascript
 /**
   * Variable
   * ========
   * symbol: tempIntroItems
   * value: Array
   *
   * Operator:
   * =========
   * name: Assignment
   * symbol: =
   * operands:
   * - Variable: tempIntroItems
   * - Array
   *
   * Type Literal
   * ============
   * name: Array
   * symbol: [ ]
   *
   * Keyword
   * =======
   * name: Variable Declaration
   * symbol: var
   */
   var tempIntroItems = [
```
##Ex 14
```javascript
  /**
    * Variable
    * ========
    * symbol: fixParents
    * value: Array
    *
    * Operator:
    * =========
    * name: Assignment
    * symbol: =
    * operands:
    * - Variable: fixParents
    * - Array
    *
    * Type Literal
    * ============
    * name: Array
    * symbol: [ ]
    *
    * Keyword
    * =======
    * name: Variable Declaration
    * symbol: var
    */
    var fixParents = [
```
##Ex 15
```javascript
  /**
    * Keyword
    * =======
    * name: Loop
    * symbol: switch
    *
    * Operator
    * ========
    * name: Conditional
    * symbol: () parentheses
    *
    * Identifier
    * =======
    * name: Variable
    * symbol: currentTooltipPosition
    *
    */
    // switch (expression) {
    switch (currentTooltipPosition) {
```
##Ex 16
```javascript
  /**
    * Variable
    * ========
    * symbol: allIntroSteps
    * value: Array
    *
    * Operator:
    * =========
    * name: Assignment
    * symbol: =
    * operands:
    * - Variable: allIntroSteps
    * - Array
    *
    * Type Literal
    * ============
    * name: Array
    * symbol: [ ]
    *
    * Keyword
    * =======
    * name: Variable Declaration
    * symbol: var
    */
      var allIntroSteps = [
```
##Ex 17
```javascript
  /**
    * Variable
    * ========
    * symbol: finishedSteps
    * value: Array
    *
    * Operator:
    * =========
    * name: Assignment
    * symbol: =
    * operands:
    * - Variable: finishedSteps
    * - Array
    *
    * Type Literal
    * ============
    * name: Array
    * symbol: [ ]
    *
    * Keyword
    * =======
    * name: Variable Declaration
    * symbol: var
    */
    var finishedSteps = [
```
##Ex 18
```javascript
  /**
    * Variable
    * ========
    * symbol: stepsRemaining
    * value: Array
    *
    * Operator:
    * =========
    * name: Assignment
    * symbol: =
    * operands:
    * - Variable: stepsRemaining
    * - Array
    *
    * Type Literal
    * ============
    * name: Array
    * symbol: [ ]
    *
    * Keyword
    * =======
    * name: Variable Declaration
    * symbol: var
    */
    var stepsRemaining = [
```
##Ex 19
```javascript
/**
  * Keyword
  * =======
  * name: Conditional
  * symbol: if
  *
  * Operator
  * ========
  * name: Conditional
  * symbol: () parentheses
  *
  * Identifier
  * ==========
  * name: Parameter (Special Variable)
  * symbol: step
  *
  * Operator
  * ========
  * name: Greater Than
  * symbol: >
  * operands:
  * - step
  * - 0
  *
  * Operator
  * ========
  * name: Block
  * nickname: Moustache
  * symbol: { }
  */
  // if ( condition ) expression;
  if (step > 0) {
```
##Ex 20
```javascript
/**
  * Keyword
  * =======
  * name: Loop
  * symbol: while
  *
  * Operator
  * ========
  * name: Conditional
  * symbol: () parentheses
  *
  * Identifier
  * ==========
  * name: Boolean
  * symbol: true
  *
  * Operator
  * ========
  * name: Block
  * nickname: Moustache
  * symbol: { }
  */
  //while (condition) {
      while (true) {
```
##Ex 21
```javascript
// Variable Storing a Function
  name: Calculator
  Value: Function
  Operands:  ()
```
##Ex 22
```javascript
// Variable
  Name: self
  Value: this
  Symbol: =
  Keyword: this
```
##Ex 23
```javascript
// Variable storing a Function
  Name: number
  Value: function
  Operands: ( )
  Value: item and event
  Symbol: =
  Keyword: self
```
##Ex 25
```javascript
// if statement
  Name: isShowingResult
  Value: none
  Operands: ( )
  Keyword: self
```
##Ex 26
```javascript
// if statement
  Name: button
  Value: equals to decimalMark and display
  Symbol: ==
  Keywords: self
```
##Ex 27
```javascript
// Variable storing a Function
  Name: negate
  Value: function
  Operands: ( )
  Symbol: =
  Keyword: self
```
##Ex 28
```javascript
// Variable storing a Function
  Name: backspace
  Value: function
  Operands: ( )
  Symbol: =
  Keyword: self
```
##Ex 29
```javascript
// Variable storing a Function
  Name: clearDisplay
  Value: function
  Operands: ( )
  Symbol: =
  Keyword: self
```
##Ex 30
```javascript
// Variable storing a function
  Name: keycallback
  Value: function
  Parameter: e
  Operands: ( )
  Keyword: var
```
#14-Die-Another-Day
10 examples of JavaScript Objects, [source repo.](https://github.com/TheIronYard--Orlando/FEE--2014--FALL/issues/212)
##Ex 31
```javascript
var Progress = function(container, opts) { // where do I put that it's a constructor?
* Symbol: `var`
  * Type: Keyword
  * Name: "var"
  * Meaning: Create an identifier
  * Operands: `Progress`
* Symbol: `Progress`
  * Type: Constructor Identifier
  * Name: "variable Progress"
  * Meaning: Variable (bucket) to hold a value. In this case, the constructor function.
* Symbol: `=`
  * Type: Operator
  * Name: "is assigned"
  * Meaning: Store the value to the right in the identifier on the left
  * Operands: `Progress`, `function(container, opts){...}`
```
##Ex 32
// why not set
[Line#](https://github.com/kimmobrunfeldt/progressbar.js/blob/master/dist/progressbar.js#L44)
```javascript
Progress.prototype.animate = function animate(progress, opts, cb) {
// defines the method `animate` on the prototype
// isn't it unnecessary to include the fn's name to the right of the `=`
// since it's already specified on the left of the `=`?
* Symbol: `Progress`
  * Type: Constructor Identifier
  * Name: "constructor Progress"
  * Meaning: references the name of the constructor
* Symbol: `Progress.prototype`
  * Type: Property
  * Name: "Progress dot prototype"
  * Meaning: the Progress.prototype property represents the prototype for the `Progress` constructor.
* Symbol: `animate`
  * Type: method
  * Name: "animate"
  * Meaning: `animate`
```  
##Ex 33
```javascript
Progress.prototype.stop = function stop() {
* Symbol: `Progress`
    * Type: Constructor Identifier
    * Name: "constructor Progress"
    * Meaning: references the name of the constructor
  * Symbol: `Progress.prototype`
    * Type: Property
    * Name: "Progress dot prototype"
    * Meaning: the Progress.prototype property represents the prototype for the `Progress` constructor.
    * Symbol: `stop`
      * Type: method
      * Name: "stop"
      * Meaning: `stop`
```  
##Ex 34
```javascript
Progress.prototype.set = function set(progress) {
* Symbol: `Progress`
    * Type: Constructor Identifier
    * Name: "constructor Progress"
    * Meaning: references the name of the constructor
  * Symbol: `Progress.prototype`
    * Type: Property
    * Name: "Progress dot prototype"
    * Meaning: the Progress.prototype property represents the prototype for the `Progress` constructor.
    * Symbol: `set`
      * Type: method
      * Name: "set"
      * Meaning: `set`
```
##Ex 35
```javascript
Progress.prototype.set = function set(progress) {
  * Symbol: `Progress`
      * Type: Constructor Identifier
      * Name: "constructor Progress"
      * Meaning: references the name of the constructor
    * Symbol: `Progress.prototype`
      * Type: Property
      * Name: "Progress dot prototype"
      * Meaning: the Progress.prototype property represents the prototype for the `Progress` constructor.
      * Symbol: `set`
        * Type: method
        * Name: "set"
        * Meaning: `set`
```  
##Ex 36
[Line#](https://github.com/kimmobrunfeldt/progressbar.js/blob/master/dist/progressbar.js#L44)
```javascript
Progress.prototype._createSvgView = function _createSvgView(opts) { // why the underscore?
* Symbol: `Progress`
      * Type: Constructor Identifier
      * Name: "constructor Progress"
      * Meaning: references the name of the constructor
    * Symbol: `Progress.prototype`
      * Type: Property
      * Name: "Progress dot prototype"
      * Meaning: the Progress.prototype property represents the prototype for the `Progress` constructor.
      * Symbol: `_createSvgView`
        * Type: method
        * Name: "_createSvgView"
        * Meaning: `_createSvgView`
```  
##Ex 37
[Line#](https://github.com/kimmobrunfeldt/progressbar.js/blob/master/dist/progressbar.js#L88)
```javascript
Progress.prototype._initializeSvg = function _initializeSvg(svg, opts) { // why the underscore?
* Symbol: `Progress`
      * Type: Constructor Identifier
      * Name: "constructor Progress"
      * Meaning: references the name of the constructor
    * Symbol: `Progress.prototype`
      * Type: Property
      * Name: "Progress dot prototype"
      * Meaning: the Progress.prototype property represents the prototype for the `Progress` constructor.
      * Symbol: `_initializeSvg`
        * Type: method
        * Name: "_initializeSvg"
        * Meaning: `_initializeSvg`
```  
##Ex 38
```javascript
    var Line = function(container, options) {
* Symbol: `var`
  * Type: Keyword
  * Name: "var"
  * Meaning: Create an identifier
  * Operands: `Line`
* Symbol: `Line`
  * Type: Constructor Identifier
  * Name: "variable Line"
  * Meaning: Variable (bucket) to hold a value. In this case, the constructor function.
* Symbol: `=`
  * Type: Operator
  * Name: "is assigned"
  * Meaning: Store the value to the right in the identifier on the left
  * Operands: `Line`, `function(container, options) {...}`
```  
##Ex 39
```javascript
Line.prototype = new Progress();
// Line is a sub-class of a Progress instance. So a line instance's prototype
// is inherited from Progress
* Symbol: `Line`
  * Type: Constructor Identifier
  * Name: "Line"
  * Meaning: Name of constructor
```  
##Ex 40
```javascript
Circle.prototype = new Progress();
// Circle is a sub-class of a Progress instance. So a circle instance's prototype
// is inherited from Progress
* Symbol: `Circle`
  * Type: Constructor Identifier
  * Name: "Circle"
  * Meaning: Name of constructor
```  
