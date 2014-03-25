/**
 * The Module Dynamically loads the configurations for
 * the heroku deployed project. This way of managing the configuration
 * is done because of the heroku suggestion for
 * Multiple Environments for the App article.
 */

var url = require('url'),
    fs = require('fs'),
    path = require('path');

/**
 * Returns the mongo db config for the staging,
 * testing and production servers
 * @returns {*}
 * @private
 */
function __mongoConfig(){
    return process.env.MONGOHQ_URL !== 'undefined' && process.env.MONGOHQ_URL;
}


/**
 * Creates a config object dynamically for the application.
 * @returns {*}
 * @private
 */
function __createConfig(){

    var env = process.env.NODE_ENV || 'dev';
    var config = require('./config')[env];

    config.db = __mongoConfig() || config.db;
    return config;
}

module.exports = __createConfig();