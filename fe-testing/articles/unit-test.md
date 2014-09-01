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

## Tips when testing frontend
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

There is an example below.

**HTML**

(Yes, just one tag)

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

    function roundTwoDecimals(num) {
        return Math.round(num * 100) / 100;
    }

    function secondsToHoursAndMinutes(seconds) {
        var hours = (seconds / 3600);
        var fullHours = Math.floor(hours);
        var minutes = Math.round((hours - fullHours) * 60);
        return {
            hours: fullHours,
            minutes: minutes
        };
    }

    // Constructor
    function Time(h, m) {
        this.hours = Math.floor(h);

        if (arguments.length === 1) {
            this.minutes = roundTwoDecimals((h - this.hours) * 60);
        } else {
            this.minutes = m;
        }
    }

    // Methods
    Time.prototype = {
        constructor: Time,
        toSeconds: function () {
            return this.hours * 3600 + this.minutes * 60;
        },
        toDays: function () {
            return this.toSeconds() / 86400;
        },
        toWorkDays: function (workDayInHours) {
            return roundTwoDecimals(this.toSeconds() / hoursToSeconds(workDayInHours));
        },
        add: function (time) {
            var hoursAndMinutes = secondsToHoursAndMinutes(this.toSeconds() + time.toSeconds());

            this.hours = hoursAndMinutes.hours;
            this.minutes = hoursAndMinutes.minutes;

            return this;
        }
    };

    namespace.Time = Time;
}(window));


// Tests
mocha.setup('bdd');
var assert = chai.assert;

describe('Time', function () {
    var t;

    afterEach(function () {
        t = null;
    });

    it('has a constructor', function () {
        assert(new Time());
    });

    it('takes hours as argument', function () {
        t = new Time(8.5);

        assert.equal(t.hours, 8);
        assert.equal(t.minutes, 30);

        t = new Time(8.25);
        assert.equal(t.hours, 8);
        assert.equal(t.minutes, 15);
    });

    it('takes hours and optionally minutes as arguments', function () {
        // Setup
        var hours = 20;
        var minutes = 30;

        // Exercise
        var t = new Time(hours, minutes);

        // Verify
        assert.equal(t.hours, hours);
        assert.equal(t.minutes, minutes);
    });

    it('can return time in seconds', function () {
        var t = new Time(20, 30);

        assert.equal(t.toSeconds(), 73800);

        t = new Time(1, 1);
        assert.equal(t.toSeconds(), 3660);
    });

    it('can return time in days', function () {
        var t = new Time(24, 0);

        assert.equal(t.toDays(), 1);

        t = new Time(12, 0);
        assert.equal(t.toDays(), 0.5);

        t = new Time(36, 0);
        assert.equal(t.toDays(), 1.5);

        t = new Time(5, 60);
        assert.equal(t.toDays(), 0.25);

    });

    it('can return time in work days', function () {
        var t = new Time(8.4);

        assert.equal(t.toWorkDays(8.4), 1);

        t = new Time(12);
        assert.equal(t.toWorkDays(8.4), 1.43);

        t = new Time(42);
        assert.equal(t.toWorkDays(8.4), 5);
    });

    it('can add time', function () {
        var t1 = new Time(8.4);
        var t2 = new Time(8.4);
        var t3 = new Time(12);

        assert.equal(t1.add(t2).toWorkDays(8.4), 2);
        assert.equal(t3.add(new Time(24)).toDays(), 1.5);
    });
});

mocha.run();
```

## Done and tested
There is a [fiddle](http://jsfiddle.net/tangibleJ/t1qmgp1m/6/) with the `Time` library and the unit tests.






