'use strict';

function _observers(observable, event) {
    if (!observable.observers) {
        observable.observers = {};
    }

    if (!observable.observers[event]) {
        observable.observers[event] = [];
    }

    return observable.observers[event];
}

var observable = {
    observe: function(event, observer) {
        if (typeof observer != "function") {
            throw new TypeError("observer is not function");
        }

        _observers(this, event).push(observer);

    },
    hasObserver: function(event, observer) {
        var observers = _observers(this, event);

        var i, numItems = observers.length;
        for (i = 0; i < numItems; i++) {
            if (observers[i] === observer) {
                return true;
            }
        }
        return false;
    },
    notify: function(event) {
        var observers = _observers(this, event);

        var args = Array.prototype.slice.call(arguments, 1);

        var i, numItems = observers.length;
        for (i = 0; i < numItems; i++) {
            try {
                observers[i].apply(this, args);
            } catch (e) {}

        }
    }
};


module.exports = observable;