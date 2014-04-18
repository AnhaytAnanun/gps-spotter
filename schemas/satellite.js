var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, ObjectId = Schema.ObjectId;
 
var satelliteSchema = new Schema({
	coordinate: {
		longitude: {type: Number, required: true},
		lattitude: {type: Number, required: true}
	},
	info: {
		car: {
			type: {type: String},
			color: {type: String},
			model: {type: String}
		},
		phone: {type: String},
		name: {type: String}
	}
});
 
module.exports = mongoose.model('Satellite', satelliteSchema);