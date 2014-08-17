'use strict';

var assert = require("assert");
var observable = require("../src/observable");

describe('Observer', function() {
    beforeEach(function() {
        this.observable = Object.create(observable);
    });

    afterEach(function() {
        this.observable = null;

    });

    // Listing 11.15
    it("test should return true when has observer", function() {
        var observer = function() {};
        this.observable.observe('event', observer);
        assert.equal(this.observable.hasObserver('event', observer), true);
    });

    // Listing 11.21
    it("test should store functions", function() {
        var observers = [

            function() {},
            function() {}
        ];

        this.observable.observe('event', observers[0]);
        this.observable.observe('event', observers[1]);

        assert.equal(this.observable.hasObserver('event', observers[0]), true);
        assert.equal(this.observable.hasObserver('event', observers[1]), true);
    });

    // Listing 11.22
    it("test should call all observers", function() {

        var observer1 = function() {
            observer1.called = true;
        };
        var observer2 = function() {
            observer2.called = true;
        };

        this.observable.observe('event', observer1);
        this.observable.observe('event', observer2);

        this.observable.notify('event');

        assert.equal(observer1.called, true);
        assert.equal(observer2.called, true);

    });

    // Listing 11.24
    it("test should pass through arguments", function() {

        var actual;

        this.observable.observe('event', function() {
            actual = arguments;
        });

        this.observable.notify('event', "String", 1, 32);

        assert.deepEqual(["String", 1, 32], Array.prototype.slice.call(actual));
    });

    // Listing 11.26
    it("test should throw for uncallable observer", function() {
        assert.throws(function() {
            this.observable.observe('event', {});
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
        this.observable.observe('event', observer1);
        this.observable.observe('event', observer2);
        this.observable.notify('event');
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

        this.observable.observe('event', observer1);
        this.observable.observe('event', observer2);
        this.observable.notify('event');

        assert.equal(observer1, calls[0]);
        assert.equal(observer2, calls[1]);
    });

    // Listing 11.33
    it("test should return false when no observers", function() {
        assert.ifError(this.observable.hasObserver('event', function() {}));
    });

    // Listing 11.34
    it("test should not fail if no observers", function() {
        var observable = this.observable;

        assert.doesNotThrow(function() {
            observable.notify('event');
        });
    });

    // Listing 11.45
    it("test should notify relevant observers only", function() {
        var calls = [];
        this.observable.observe("event", function() {
            calls.push("event");
        });
        this.observable.observe("other", function() {
            calls.push("other");
        });
        this.observable.notify("other");
        assert.deepEqual(["other"], calls);
    });
});
