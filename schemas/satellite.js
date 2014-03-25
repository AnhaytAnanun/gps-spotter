var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, ObjectId = Schema.ObjectId;
 
var satelliteSchema = new Schema({

});
 
module.exports = mongoose.model('Satellite', satelliteSchema);