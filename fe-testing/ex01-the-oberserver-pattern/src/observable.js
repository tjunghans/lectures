'use strict';


var observable = {
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

        var i, numItems = this.observers.length;
        for (i = 0; i < numItems; i++) {
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

        var i, numItems = this.observers.length;
        for (i = 0; i < numItems; i++) {
            try {
                this.observers[i].apply(this, arguments);
            } catch (e) {}

        }
    }
};


module.exports = observable;