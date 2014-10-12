#05--Reading-Javascript
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

---

```javascript
var nextStep = this._introItems[--this._currentStep];
    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
      this._introBeforeChangeCallback.call(this, nextStep.element);
    }
```

* Variable: `nextStep`
* Operators:`!==`

---

```javascript
   var helperLayer = targetElement.querySelector('.introjs-helperLayer');
    if (helperLayer) {
      helperLayer.parentNode.removeChild(helperLayer);
    }

```

* Variable: `helperLayer`
* Operators: `=`

---

```javascript
  var fixParents = document.querySelectorAll('.introjs-fixParent');
```

* Variable: `fixParens`
* Operators: `=`

---

```javascript
 if (fixParents && fixParents.length > 0) {
```

* Value: Number 0
* Operators: `>`

---

```javascript
    this._direction = 'forward';
```

* Variable: `this._direction`

---

```javascript
      for (var i = fixParents.length - 1; i >= 0; i--) {
```

* Variable: `i`
* Value: Number 0, 1
* Operators: `=`, `-`,`>`

---

```javascript
        var innerLi    = document.createElement('li');
        var anchorLink = document.createElement('a');
```

* Variable: `innerLi`,`anchorLink`
* Value: Number 0

---

```javascript
      if (top < 0 || targetElement.element.clientHeight > winHeight) {
        window.scrollBy(0, top - 30);
```

* Variable: `clientHeight`, `winHeight`
* Value: Number 0, 30
* Operators: `-`, `||`, `>`, `<`

---

```javascript
 while (parentElm != null) {
```

* Variable: `parentElm`
* Value: null
* Operators: `=`, `!`

#06--Coding-Dojo
You need 10 more (unique) examples and should include conditionals, loops, and lists (arrays).  
##Ex 1
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
##Ex 2
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
##Ex 3
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
##Ex 4
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
##Ex 5
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
      switch (currentTooltipPosition) {
```
##Ex 6
```javascript
      xxxx
```
##Ex 7
```javascript
      xxxx
```
##Ex 8
```javascript
      xxxx
```
##Ex 9
```javascript
      xxxx
```
##Ex 10
```javascript
      xxxx
```
