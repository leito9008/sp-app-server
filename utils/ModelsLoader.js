/*jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: true*/

/* globals require, module */

var fs = require("fs");

var ModelsLoader = {};

ModelsLoader.load = function (modelsPath) {
    "use strict";
    fs.readdirSync(modelsPath).forEach(function (file) {
        if (~file.indexOf(".js")) {
            require(modelsPath + "/" + file);
        }
    });
};

module.exports = ModelsLoader;
