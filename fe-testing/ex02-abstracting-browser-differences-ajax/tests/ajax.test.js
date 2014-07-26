'use strict';

var assert = require("assert");
var extend = require('util')._extend;
var sinon = require("sinon");
var ajax = require("../src/ajax");
var tddjs = require("../../tdd");
var fakeXMLHttpRequest = require("../lib/fake-xhr.js");

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

        var self = this;

        this.xhr = extend({}, fakeXMLHttpRequest);

        this.ajaxCreate = sinon.stub(ajax, 'create', function() {
            return self.xhr;
        });
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

    it("test should call open with method, url, async flag", function() {

        var url = "/url";

        ajax.get(url);

        assert.deepEqual(["GET", url, true], this.xhr.open.args[0]);
    });

    it("test should add onreadystatechange handler", function() {
        ajax.get("/url");
        assert.equal(typeof this.xhr.onreadystatechange, 'function');
    });

    it("test should call send", function() {
        ajax.get("/url");
        assert.equal(this.xhr.send.called, true);
    });
});
