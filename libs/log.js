var winston = require('winston');
var ENV = process.env.NODE_ENV || 'dev';

// github: https://github.com/flatiron/winston
// logger has following methods:
// log, info, warn, error
function makeLogger(path) {
    // You can add more transports, e.g. to save logs into DB
    var transports = [
        new winston.transports.Console({
            colorize: true,
            level: ENV != 'production' ? 'debug' : 'error',
            label: path
        })
        /*,new winston.transports.File({
            filename: 'debug.log',
            level: 'debug'
        })*/
    ];
    
    return new winston.Logger({ transports: transports });
}

module.exports = function(module) {
    return makeLogger(module.filename.split('\\').slice(-2).join('/'));
};