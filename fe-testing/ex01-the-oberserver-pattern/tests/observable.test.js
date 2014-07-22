'use strict';

var assert = require("assert");
var observable = require("../src/observable");

describe('Observer', function() {
    before(function() {
        this.observable = Object.create(observable);
    });

    after(function() {
        this.observable = null;
    });

    it('test should store function', function() {
        var observer = function() {};
        this.observable.addObserver(observer);
        assert.equal(observer, this.observable.observers[0]);
    });

    it("test should return true when has observer", function() {
        var observer = function() {};
        this.observable.addObserver(observer);
        assert.equal(this.observable.hasObserver(observer), true);
    });

    // Listing 11.21
    it("test should store functions", function() {
        var observers = [

            function() {},
            function() {}
        ];

        this.observable.addObserver(observers[0]);
        this.observable.addObserver(observers[1]);

        assert.equal(this.observable.hasObserver(observers[0]), true);
        assert.equal(this.observable.hasObserver(observers[1]), true);
    });

    // Listing 11.22
    it("test should call all observers", function() {

        var observer1 = function() {
            observer1.called = true;
        };
        var observer2 = function() {
            observer2.called = true;
        };

        this.observable.addObserver(observer1);
        this.observable.addObserver(observer2);

        this.observable.notifyObservers();

        assert.equal(observer1.called, true);
        assert.equal(observer2.called, true);

    });

    // Listing 11.24
    it("test should pass through arguments", function() {

        var actual;

        this.observable.addObserver(function() {
            actual = arguments;
        });

        this.observable.notifyObservers("String", 1, 32);

        assert.deepEqual(["String", 1, 32], Array.prototype.slice.call(actual));
    });

    // Listing 11.26
    it("test should throw for uncallable observer", function() {
        assert.throws(function() {
            this.observable.addObserver({});
        }, "TypeError");
    });

    // Listing 11.28
    it("test should notify all even when some fail", function() {
        var observer1 = function() {
            throw new Error("Oops");
        };
        var observer2 = function() {
            observer2.called = true;
        };
        this.observable.addObserver(observer1);
        this.observable.addObserver(observer2);
        this.observable.notifyObservers();
        assert.equal(observer2.called, true);
    });

    // Listing 11.30
    it("test should call observers in the order they were added", function() {
        var calls = [];

        var observer1 = function() {
            calls.push(observer1);
        };

        var observer2 = function() {
            calls.push(observer2);
        };

        this.observable.addObserver(observer1);
        this.observable.addObserver(observer2);
        this.observable.notifyObservers();

        assert.equal(observer1, calls[0]);
        assert.equal(observer2, calls[1]);
    });

    // Listing 11.33
    it("test should return false when no observers", function() {
        assert.ifError(this.observable.hasObserver(function() {}));
    });

    // Listing 11.34
    it("test should not fail if no observers", function() {
        var observable = this.observable;

        assert.doesNotThrow(function() {
            observable.notifyObservers();
        });
    });

});