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

