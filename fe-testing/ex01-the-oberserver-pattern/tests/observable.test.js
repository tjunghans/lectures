'use strict';

var assert = require("assert");
var Observable = require("../src/observable");

describe('Observer', function() {
    describe('ObservableAddObserverTest', function() {

        it('test should store function', function() {
            var observable = new Observable();
            var observer = function() {};
            observable.addObserver(observer);
            assert.equal(observer, observable.observers[0]);
        });

        it("test should return true when has observer", function() {
            var observable = new Observable();
            var observer = function() {};
            observable.addObserver(observer);
            assert.equal(observable.hasObserver(observer), true);
        });

        // Listing 11.21
        it("test should store functions", function() {
            var observable = new Observable();
            var observers = [

                function() {},
                function() {}
            ];

            observable.addObserver(observers[0]);
            observable.addObserver(observers[1]);

            assert.equal(observable.hasObserver(observers[0]), true);
            assert.equal(observable.hasObserver(observers[1]), true);
        });

        // Listing 11.22
        it("test should call all observers", function() {
            var observable = new Observable();
            var observer1 = function() {
                observer1.called = true;
            };
            var observer2 = function() {
                observer2.called = true;
            };

            observable.addObserver(observer1);
            observable.addObserver(observer2);

            observable.notifyObservers();

            assert.equal(observer1.called, true);
            assert.equal(observer2.called, true);

        });

        // Listing 11.24
        it("test should pass through arguments", function() {
                var observable = new Observable();
                var actual;

                observable.addObserver(function() {
                    actual = arguments;
                });

                observable.notifyObservers("String", 1, 32);

                assert.deepEqual(["String", 1, 32], Array.prototype.slice.call(actual));
            }

        );

        it("test should throw for uncallable observer", function() {
            var observable = new Observable();
            assert.throws(function() {
                observable.addObserver({});
            }, "TypeError");
        });
    });
});