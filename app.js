
/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , routes = require('./routes')
    , log = require('./libs/log')(module);

var env = process.env.NODE_ENV || 'dev'
    , config = require('./config');

var app = module.exports = express();

// Configuration

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'your secret here' }));
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// app.use(express.errorHandler());

// mongodb

// require("./init/db").init(config);

// API V1

var apiServerV1 = require('./api/v1');
app.use('/api/v1', apiServerV1);

// Routes

app.get('/', routes.index);


var server = http.createServer(app);
server.listen(app.get('port'), function(){
    log.info('Express server listening on port ' + app.get('port'));
});
console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
