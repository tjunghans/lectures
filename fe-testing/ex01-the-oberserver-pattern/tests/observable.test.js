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

    });
});