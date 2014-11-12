 Element - Description  - HTML Example - Type Variant - Event Handler Attributes


##`<button>`
- Represents a clickable button
```
  <button name="button">Click me</button>
```

- Event handler attribute:`on` (`<button onclick="...">`)



##`<fieldset>`
Establishes a group of related form controls and labels.


##`<form>`
*`method="GET/POST"`*
Specifies which HTTP method will be used to submit the form data. With get (the default), the information is appended to and sent along with the URL itself.


##`<input>`
Used to create interactive controls for web-based forms in order to accept data from the user. The semantics of an `<input>` varies considerably depending on the value of its type attribute.
```
<input type="search" placeholder="Search MailChimp" class="form-input" name="q" role="search" aria-label="Search MailChimp" tabindex="1">
```
###[`type` variants](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) (type of control to display)
- button, checkbox, color, date, datetime, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week



##`<label>`
Used to attach information to controls.
```
<label for="lastname">Last Name:</label>
<input type="text" id="lastname" size="32">
```

##`<legend>`
Assigns a caption to a fieldset
```
<fieldset>
  <legend>Mailing List Sign-up</legend>
  <ul>
    <li>
      <label>Add me to your mailing list <input type="radio" name"list"></label>
    </li>
    <li>
      <label>No thanks <input name"list" value="no"></label>
    </li>
  </ul>
</fieldset>
```

##`<meter>`
Represents a fractional value or a scalar measurement within a known range (also known as a gauge).
```
<p>Heat the oven to <meter min="200" max="500" value="350">350 degrees</meter>.</p>
```

##`<select>`
This element represents a control that presents a menu of options. The options within the menu are represented by `<option>` elements, which can be grouped by `<optgroup>` elements.

##`<option>`
Defines an option within a select element (a multiple-choice menu or scrolling list) or a `<datalist>` element (a predefined list of text options for an input element).
```
<p>What are your favorite ice cream flavors?</p>
<select name="ice_cream" size="4" multiple="multiple">
   <option>Vanilla</option>
   <option>Chocolate</option>
   <option>Inside-out Rocky Road</option>
   <option value="pecan">Praline Pecan Smashup</option>
   <option>Mint Chocolate Chip</option>
   <option>Pistachio</option>
</select>
```

##`<output>`
 Represents the result of a calculation or user action.
 ```
 <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```

##`<progress>`
Used to view the completion progress of a task.
`<progress value="70" max="100">70 %</progress>`



##`<textarea>`
This element represents a multi-line plain-text editing control.
`<textarea name="textarea" rows="10" cols="50">Write something here</textarea>`
