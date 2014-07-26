'use strict';

var sinon = require("sinon");

var open = sinon.spy();

var fakeXMLHttpRequest = {
    open: open
};

module.exports = fakeXMLHttpRequest;
