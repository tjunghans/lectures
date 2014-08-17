# Unit-Testing
Unit-tests are the most atomic, cheapest and fastest running tests. They should be fast running. If a unit-test doesn't complete within milliseconds then the test or the code being tested needs to be questioned. Another reason for slow performance may be the testing framework (Qunit, Jasmine, Mocha, etc)., but this will only be visible with a very high number of tests.

##  Let's get coding and testing
We will write a simple `Time` library that can take hours and minutes as arguments and perform simple time calculation and formatting actions.

**Testing-Tools**
- Mocha (Node or [in the browser](http://visionmedia.github.io/mocha/#browser-support))
- Assert (Node Assert or [Chai Assert](http://chaijs.com/guide/styles/#assert) in the browser)

To keep the example simple, no other libraries will be used. The `Time` library and tests will be demonstrated with [jsfiddle](http://jsfiddle.net).

**jsFiddle HTML**

This never changes throughout this example.

```html
<div id="mocha"></div>
```

**jsFiddle JavaScript**

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




