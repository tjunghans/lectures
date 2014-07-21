'use strict';


function Observable() {
    this.observers = [];
}

Observable.prototype = {
    constructor: Observable,
    addObserver: function(observer) {
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
            this.observers[i].apply(this, arguments);
        }
    }
};


module.exports = Observable;