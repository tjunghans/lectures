## Writing testable JavaScript
Writing tests at any level - unit, component or ui - can be very difficult when the JavaScript ist not written testable. Testable JavaScript can be enforced by writing tests first, which is one of the advantages of tdd. Testable JavaScript consists rather of many small methods or functions instead of one large one.

> "If you ever find yourself retrofitting a test suite onto an existing application that was not written with testing in mind, you’ll invariably discover that parts of the application will be challenging, if not impossible, to test."

Source: http://tddjs.com

Testable JavaScript is...
- loosely coupled
- tends to have a higher readability
- tends to be easier to understand
- embraces [separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns) (applies MVC)

Here is a JavaScript snippet that smells ([JsFiddle](http://jsfiddle.net/tangibleJ/x8gsc34j/#base)):

```javascript
// Alias
function $(selector) {
    return document.querySelector(selector);
}

var btn = $('button.add');

btn.addEventListener('click', function () {
	var addend1 = $('input.addend1');
	var addend2 = $('input.addend2');
	var sum = $('span.sum');
	sum.textContent = Number(addend1.value) + Number(addend2.value);
});

```
The above code smells:
- There is no way to test the addition logic without the DOM
- The addition logic cannot be reused (tight coupling)
- The event handler does more than one thing:
	+ Reads data from inputs
	+ executes addition
	+ saves data to sum input

Here is a better example that is easier to test ([JsFiddle](http://jsfiddle.net/tangibleJ/x8gsc34j/5/)):

```javascript
...
function add(a, b) {
	return Number(a) + Number(b);
}

var addend1 = $('input.addend1');
var addend2 = $('input.addend2');
var sum = $('span.sum');

btn.addEventListener('click', function () {
    sum.textContent = add(addend1.value, addend2.value);
});
```
The following changes were made above:
- the DOM access has been moved out of the handler
- the addition logic has been moved out of the listener and into its own function `add`

The function `add` can be reused and tested:

```javascript
assert.equal(add(1, 2), 3); // true
assert.equal(add("1", "2"), 3); // true
```
Notice how the readability of the listener has been improved as well.

The above is a simple example. The handler could be decoupled even more.
More assertions could be added to test against the number of arguments suplied or argument types.

### References
- <http://alistapart.com/article/writing-testable-javascript/>
- <http://qunitjs.com/intro/#make-things-testable>
