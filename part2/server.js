//add all the dependancies
var express = require('express');
var mongo = require( "mongodb" );
var bodyParser = require('body-parser');
var mongoClient = mongo.MongoClient
var app = express()
app.use( bodyParser.json() )

mongoClient.connect( "mongodb://localhost/pinterest");
app.use('/api', require('./api'));
app.listen(3000);

console.log('Server running on port 3000');