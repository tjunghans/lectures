## Writing testable JavaScript
Writing tests at any level - unit, component or ui - can be very difficult when the JavaScript ist not written testable. Testable JavaScript can be enforced by writing tests first, which is one of the advantages of tdd. Testable JavaScript consists of many small methods or functions instead of one large one. Testable JavaScript tends to have a higher readability and is easier to understand. It is easier to read and understand a method, that has less then 10 lines of code and you don't have to scroll.
Testable JavaScript embraces [separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns) with code for model, view and controller. It is easier to write tests for controllers containing business logic than tests for the view, with DOM interaction.

Here is a JavaScript snippet that smells ([JsFiddle](http://jsfiddle.net/tangibleJ/x8gsc34j/#base)):

```javascript
function $(selector) {
    return document.querySelector(selector);
}

var btn = $('button.add');
var addend1 = $('input.addend1');
var addend2 = $('input.addend2');
var sum = $('span.sum');

btn.addEventListener('click', function () {
    sum.textContent = Number(addend1.value) + Number(addend2.value);
});

```
In the above snippet the part that smells the most is the event listener:
- Tight coupling between DOM and logic. Writing a unit test depends on the DOM.
- The addition logic cannot be reused.

Here is a better example that is easier to test ([JsFiddle](http://jsfiddle.net/tangibleJ/x8gsc34j/5/)):

```javascript
...
function add(a, b) {
	return Number(a) + Number(b);
}

btn.addEventListener('click', function () {
    sum.textContent = add(addend1.value, addend2.value);
});
```
In the above snippet, the addition logic has been moved to its own function `add` with two arguments. The function `add` can be reused and tested.

```javascript
assert.equal(add(1, 2), 3); // true
assert.equal(add("1", "2"), 3); // true
``
Of course the above is a very simple example and more assertions could be added to test against the number of arguments suplied or argument types. The second snippet shows how code becomes testable through separation of concerns and also improving the readability and usability.


### References
- <http://alistapart.com/article/writing-testable-javascript/>
