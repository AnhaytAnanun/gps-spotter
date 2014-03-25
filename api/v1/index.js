var express = require('express'),
    load = require('express-load-ns');

var app = module.exports = express();

// loads the handlers and routes into the app
load({verbose:true})
	.then('api/v1/handlers', 'handlers')
    .then('api/v1/routes', 'routes')
    .into(app);