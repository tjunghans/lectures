'use strict';


var observable = {
    observe: function(event, observer) {
        if (typeof observer != "function") {
            throw new TypeError("observer is not function");
        }

        if (!this.observers) {
            this.observers = [];
        }

        this.observers.push(observer);
    },
    hasObserver: function(event, observer) {
        if (!this.observers) {
            return false;
        }

        var i, numItems = this.observers.length;
        for (i = 0; i < numItems; i++) {
            if (this.observers[i] === observer) {
                return true;
            }
        }
        return false;
    },
    notify: function(event) {
        if (!this.observers) {
            return;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        var i, numItems = this.observers.length;
        for (i = 0; i < numItems; i++) {
            try {
                this.observers[i].apply(this, args);
            } catch (e) {}

        }
    }
};


module.exports = observable;