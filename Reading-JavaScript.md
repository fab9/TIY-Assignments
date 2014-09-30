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


