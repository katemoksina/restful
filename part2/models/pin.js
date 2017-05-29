//dependencies
var restful = require('node-restful');
// var mongoose = restful.mongoose;
var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;


//return schema
var pinSchema = new mongoose.Schema({
	caption: String,
	content: String,
	text: String
});

//return model
module.exports = restful.model('pin', pinSchema);