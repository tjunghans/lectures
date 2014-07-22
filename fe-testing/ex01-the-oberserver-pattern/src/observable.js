'use strict';


function Observable() {

}

Observable.prototype = {
    constructor: Observable,
    addObserver: function(observer) {
        if (typeof observer != "function") {
            throw new TypeError("observer is not function");
        }

        if (!this.observers) {
            this.observers = [];
        }

        this.observers.push(observer);
    },
    hasObserver: function(observer) {
        if (!this.observers) {
            return false;
        }

        for (var i = 0, numItems = this.observers.length; i < numItems; i++) {
            if (this.observers[i] === observer) {
                return true;
            }
        }
        return false;
    },
    notifyObservers: function() {
        if (!this.observers) {
            return;
        }

        for (var i = 0, numItems = this.observers.length; i < numItems; i++) {
            try {
                this.observers[i].apply(this, arguments);
            } catch (e) {}

        }
    }
};


module.exports = Observable;