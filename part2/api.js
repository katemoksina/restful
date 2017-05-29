//dependency
var express = require('express');
var router = express.Router();


//get models
var Pin = require('./models/pin');
var Board = require('./models/board');


//routes:
Board.methods(['get','post','put','delete']);
Pin.methods(['get','post','put','delete']);
Pin.register(router, '/board/pin');
Board.register(router, '/board');

//return router
module.exports = router;