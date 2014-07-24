'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var ajax = {
    create: function() {
        var options = [

            function() {
                return new ActiveXObject('Microsoft.XMLHTTP');
            },
            function() {
                return new XMLHttpRequest();
            }
        ];

        var i;
        var l = options.length;
        for (i = 0; i < l; i++) {
            try {
                return options[i]();
            } catch (e) {}
        }

        return null;
    }
};

module.exports = ajax;