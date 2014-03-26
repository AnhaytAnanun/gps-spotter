// var mongoose = require('mongoose');
// var Satellite = mongoose.model('Satellite');

exports.get = function (req, res, next) {
	res.send(200, 'get');
};

exports.add = function (req, res, next) {
	res.send(200, 'add');
};