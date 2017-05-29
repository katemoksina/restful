'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PinSchema = new Schema({
  caption: String,
  content: String,
  text: String
});

var BoardSchema = new Schema({
  title: String,
  content: [PinSchema]
});

module.exports = mongoose.model('Pins', PinSchema);
module.exports = mongoose.model('Board', BoardSchema);