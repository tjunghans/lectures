'use strict';

var sinon = require("sinon");

var open = sinon.spy();
var send = sinon.spy();

var fakeXMLHttpRequest = {
    open: open,
    send: send
};

module.exports = fakeXMLHttpRequest;
