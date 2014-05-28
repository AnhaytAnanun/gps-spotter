// var mongoose = require('mongoose');
// var Satellite = mongoose.model('Satellite');

var fs = require('fs');
var path = require('path');

exports.get = function (req, res, next) {
	var dirname = path.resolve(__dirname, '../../..');
	dirname = path.join(dirname, '/storage/satellites.txt');
	fs.readFile(dirname, 'utf8', function(err, satellites) {
        console.error('GET /satellites', err);
        res.json(200, { satellites: JSON.parse(satellites) });
    });
};

exports.add = function (req, res, next) {
	var dirname = path.resolve(__dirname, '../../..');
	dirname = path.join(dirname, '/storage/satellites.txt');
	fs.readFile(dirname, 'utf8', function(err, satellites) {
        console.error('POST /satellites', err);
        res.send(201);
    });
};