/**
 * Initializes the database instance.
 * @author Alexander Adamyan
 */

/**
 * Loading dependencies 
 */
var fs = require('fs');
var mongoose = require('mongoose');
var log = require('./../libs/log')(module);


var dbInitialized = false;

/**
 * Initialize Database connection
 * @param  {Object} config current environment configuration
 */
exports.init = function(config, forceNoDebug){
    //Preventing the module to be initialize more than one time
    if (dbInitialized) {
        return;
    }
    dbInitialized = true;
    
    //Connecting to the database
    log.info("Initializing database connection");
    mongoose.connect(config.db);

    //Set debug mode for dev environment
    var env = process.env.NODE_ENV || 'dev';
    if (env == 'dev' && !forceNoDebug){
        mongoose.set('debug', true);
    }
    

    //Init model schemas
    log.info("Initializing model schemas");
    var schemasPath = process.cwd() + '/schemas';
    var schemaFiles = fs.readdirSync(schemasPath);

    schemaFiles.forEach(function (file) {
        require(schemasPath + '/' + file);
        log.info("Model schema initialized: %s", file);
    });
    
    //mongoose.set('debug', true);

}