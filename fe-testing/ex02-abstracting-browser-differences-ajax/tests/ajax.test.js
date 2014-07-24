'use strict';

var assert = require("assert");
var ajax = require("../src/ajax");

describe('AjaxCreateTest', function() {
    it("test should return XMLHttpRequest object", function() {
        var xhr = ajax.create();

        assert.equal(typeof xhr.readyState, 'number');
    });

});