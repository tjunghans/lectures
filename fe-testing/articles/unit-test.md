# Unit-Testing
Unit-tests are the most atomic tests. Unit tests are there to test functions, methods and states of a class.

Unit tests should be...

**...easy to write**. If not, then the function that the tests are for is probably too big, to complex or not written in a testable manner.

**...fast running**. All unit tests should run within milliseconds. If this is not the case or a unit test takes longer, it is either doing too much, the
the production code being tested is too complex or large.

**...easy too understand**. A unit test suite (collection of unit tests) should act as a documentation for the class being tested and easy to understand.

## When to write unit tests
- Write tests for a function before implementing it (tdd).
- Write tests before refactoring a function. Refactoring is a lot easier when there are tests to back you up. Writing tests can be hard when dealing with old code or code that wasn't written in a testable way.

## Tipps when testing frontend
- Keep things small and granular. This goes for functions/methods and tests.
- Limit DOM access in your unit tests. DOM access is relatively slow and modifying html is a pain.
- Avoid fixtures. They are a pain.
- Don't test code that has already been tested. Don't test `$.ajax` or `$('button').on('click')` . This goes for any popular library, not just jQuery. If you are using a third party that doesn't have tests, well - then you maybe souldn't be using it.

##Unit test structure
Divide a unit test into three blocks to improve readability:
1. Setup
2. Exercise
3. Verify

Here is a simple example:
```javascript
it('can add to numbers together', function () {
	// Setup
	var calc = new Calculator();
	var a = 2;
	var b = 3;

	// Exercise
	var result = calc.add(a, b);

	// Verify
	assert.equal(result, 5);
});
```


##  Let's get coding and testing
We will write a simple `Time` library that can take hours and minutes as arguments and perform simple time calculation and formatting actions.

**Testing-Tools**
- Mocha (Node or [in the browser](http://visionmedia.github.io/mocha/#browser-support))
- Assert (Node Assert or [Chai Assert](http://chaijs.com/guide/styles/#assert) in the browser)

To keep the example simple, no other libraries will be used.

**HTML**

(Yup, that's it!)

```html
<div id="mocha"></div>
```

**JavaScript**

```javascript
// Library
(function (namespace) {
    'use strict';

    // Private helpers
    function hoursToSeconds(hours) {
        return hours * 3600;
    }

    // Constructor
    function Time() {

    }

    // Methods
    Time.prototype = {
        constructor: Time
    };

    namespace.Time = Time;
}(window));


// Tests
mocha.setup('bdd');
var assert = chai.assert;

describe('Time', function () {

    it('has a constructor', function () {
    	// assert.equal(true, true);
    });

    it('takes hours as argument', function () {

    });

    it('takes hours and optionally minutes as arguments', function () {

    });

    it('can return time in seconds', function () {

    });

    it('can return time in days', function () {

    });

    it('can return time in work days', function () {

    });

    it('can add time', function () {

    });
});

mocha.run();
```




## Done and tested
There is a [fiddle](http://jsfiddle.net/tangibleJ/t1qmgp1m/6/) with the `Time` library and the unit tests.






