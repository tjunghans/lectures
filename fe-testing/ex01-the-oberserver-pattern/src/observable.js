'use strict';


function Observable() {
    this.observers = [];
}

Observable.prototype = {
    constructor: Observable,
    addObserver: function(observer) {
        if (typeof observer != "function") {
            throw new TypeError("observer is not function");
        }

        this.observers.push(observer);
    },
    hasObserver: function(observer) {
        for (var i = 0, numItems = this.observers.length; i < numItems; i++) {
            if (this.observers[i] === observer) {
                return true;
            }
        }
        return false;
    },
    notifyObservers: function() {
        for (var i = 0, numItems = this.observers.length; i < numItems; i++) {
            try {
                this.observers[i].apply(this, arguments);
            } catch (e) {}

        }
    }
};


module.exports = Observable;