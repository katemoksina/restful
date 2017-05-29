var mongo = require( "mongodb" )
var mongoClient = mongo.MongoClient
var express = require( "express" )
var bodyParser = require( "body-parser" )
var app = express()
app.use( bodyParser.json() )


app.post( "/pinterest/", function ( reqt, resp ) { //create
	var kv = { key : reqt.body.key
		, value : reqt.body.value }
		mongoClient.connect( "mongodb://localhost/pinterest",
		function( err, db ) {
			if ( err ) throw err
			var collection = db.collection( "pinterest" )
			collection.save( kv,
				function( err, res ) {
					if ( err ) throw err
					resp.json( kv )
					db.close()
			})
	})
})

app.get( "/pinterest/:key", function ( reqt, resp ) { //get one
	var k = reqt.params.key
	mongoClient.connect( "mongodb://localhost/pinterest",
		function( err, db ) {
			if ( err ) throw err
			var collection = db.collection( "pinterest" )
			collection.findOne( { key : k },
				function( err, res ) {
					if ( err ) throw err
					resp.json( res.value )
					db.close()
			})
	})
})

app.get( "/pinterest/", function ( reqt, resp ) { //get all
	mongoClient.connect( "mongodb://localhost/pinterest",
	function( err, db ) {
		if ( err ) throw err
		var collection = db.collection( "pinterest" )
		var kvs = []
		collection.find().toArray(
			function( err, res ) {
			if ( err ) throw err
			for (i = 0; i < res.length; i++) {
				kvs.push( res[ i ].key )
				}
		resp.json( kvs )
		db.close()
		})
	})
})

app.delete( "/pinterest/:key", function ( reqt, resp ) { //remove
	var k = reqt.params.key
	mongoClient.connect( "mongodb://localhost/pinterest",
		function( err, db ) {
			if ( err ) throw err
			var collection = db.collection( "pinterest" )
			collection.remove( { key : k },
				function( err, res ) {
					if ( err ) throw err
						resp.json( k )
					db.close()
			})
	}) 
})

app.put( "/pinterest/:key", function ( reqt, resp ) { //update
	var k = { key : reqt.body.key}
	var v = { value : reqt.body.value}
		mongoClient.connect( "mongodb://localhost/pinterest",
		function( err, db ) {
			if ( err ) throw err
			var collection = db.collection( "pinterest" )
			collection.update( k, { $set:{value:v}},
				function( err, res ) {
					if ( err ) throw err
					resp.json( k )
					db.close()
			})
	})
})

app.listen( 3000, function () {
console.log( "listening on port 3000..." )
})