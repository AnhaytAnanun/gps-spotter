require('newrelic');

var forever = require('forever');

/****************** Setting The Environment variable for the development environment *****/

process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'dev';

/****************************************************************************************/

var child = new (forever.Monitor)('app.js', {
  
  silent: false,
  options: []
});

//child.on('exit', this.callback);
child.start();

forever.startServer(child);