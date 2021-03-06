/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: true */

/* globals console, module, require */

var mongoose = require("mongoose"),
    logger = require("../utils/Logger");

/**
 * A MongoDB database instantiation wrapper
 * Connects the database and prints the result
 *
 * @param settings an object with the database connection url (at least for now)
 * e.g. { connectionUrl : "mongodb://localhost/mongo-db" }
 */
var database = function Database(settings) {
    "use strict";
    this.settings = settings;
    this.connect = function () {
        var connectionUrl = this.settings.connectionUrl;
        mongoose.connect(connectionUrl);
        var connection = mongoose.connection;
        connection.on("error", console.error.bind(console, "[ERROR] - MongoDB: CONNECTION ERROR"));
        connection.once("open", function () {
            logger.info("MongoDB: CONNECTION OK - " + connectionUrl);
        });
    };
};

module.exports = database;
