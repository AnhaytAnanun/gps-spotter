var path = require('path');

process.env.NODE_ENV = 'testing';
var config    = require(path.join(process.cwd() + '/config'));

require(path.join(process.cwd() + '/init/db')).init(config);