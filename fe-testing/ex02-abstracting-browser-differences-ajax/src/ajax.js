'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var tddjs = require("../../tdd");

var create;
(function() {
    var xhr;
    var options = [

        function() {
            return new ActiveXObject('Microsoft.XMLHTTP');
        },
        function() {
            return new XMLHttpRequest();
        }
    ];
    for (var i = 0, l = options.length; i < l; i++) {
        try {
            xhr = options[i]();

            if (typeof xhr.readyState == "number" &&
                tddjs.isHostMethod(xhr, "open") &&
                tddjs.isHostMethod(xhr, "send") &&
                tddjs.isHostMethod(xhr, "setRequestHeader")) {

                create = options[i];
                break;
            }
        } catch (e) {}
    }
}());

var get;
(function() {

    if (!create) {
        return;
    }

    get = function get(url) {
        if (typeof url != "string") {
            throw new TypeError("URL should be string");
        }

        var transport = ajax.create();

        transport.onreadystatechange = function() {};

        transport.open("GET", url, true);
        transport.send();

    }

}())

var ajax = {
    create: create,
    get: get
};

module.exports = ajax;
