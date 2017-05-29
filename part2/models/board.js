//dependencies
var restful = require('node-restful');
// var pin = require('./pin.js');
var PinSchema = require('mongoose').model('pin').schema;
// var mongoose = restful.mongoose;
var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

//return schema
var boardSchema = new mongoose.Schema({
	title: String,
	pins: [PinSchema]
});

//return model
module.exports = restful.model('board', boardSchema);