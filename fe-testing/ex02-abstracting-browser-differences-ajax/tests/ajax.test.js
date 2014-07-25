'use strict';

var assert = require("assert");
var sinon = require("sinon");
var ajax = require("../src/ajax");
var tddjs = require("../../tdd");

describe('AjaxCreateTest', function() {
    it("test should return XMLHttpRequest object", function() {
        var xhr = ajax.create();

        assert.equal(typeof xhr.readyState, 'number');
        assert.equal(tddjs.isHostMethod(xhr, "open"), true);
        assert.equal(tddjs.isHostMethod(xhr, "send"), true);
        assert.equal(tddjs.isHostMethod(xhr, "setRequestHeader"), true);
    });
});

describe("GetRequestTest", function() {
    beforeEach(function() {
        this.ajaxCreate = sinon.stub(ajax, 'create');
    });

    afterEach(function() {
        ajax.create.restore();
    });

    it("test should define get method", function() {
        assert.equal(typeof ajax.get, 'function');
    });

    it("test should throw error without url", function() {
        assert.throws(function() {
            ajax.get();
        }, "TypeError");
    });

    it("test should obtain an XMLHttpRequest object", function() {

        ajax.get("/url");

        assert.equal(this.ajaxCreate.called, true);

    });
});