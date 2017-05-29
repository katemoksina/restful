'use strict';

var mongoose = require('mongoose'),
  Pin = mongoose.model('Pins'),
  Board = mongoose.model('Board');

exports.read_pins = function(req, res) {
  Pin.find({}, function(err, Pin) {
    if (err)
      res.send(err);
    res.json(Pin);
  });
};


exports.create_pin = function(req, res) {
  var new_Pin = new Pin(req.body);
  new_Pin.save(function(err, Pin) {
    if (err)
      res.send(err);
    res.json(Pin);
  });
};


exports.update_pin = function(req, res) {
  Pin.findOneAndUpdate(req.params.PinId, req.body, {new: true}, function(err, Pin) {
    if (err)
      res.send(err);
    res.json(Pin);
  });
};


exports.delete_pin = function(req, res) {
  Pin.remove({
    _id: req.params.PinId
  }, function(err, Pin) {
    if (err)
      res.send(err);
    res.json({ message: 'Pin successfully deleted' });
  });
};

exports.read_boards = function(req, res) {
  Board.find({}, function(err, Board) {
    if (err)
      res.send(err);
    res.json(Board);
  });
};


exports.create_board = function(req, res) {
  var new_board = new Board(req.body);
  new_board.save(function(err, Board) {
    if (err)
      res.send(err);
    res.json(Board);
  });
};


exports.update_board = function(req, res) {
  Board.findOneAndUpdate(req.params.BoardId, req.body, {new: true}, function(err, Board) {
    if (err)
      res.send(err);
    res.json(Board);
  });
};


exports.delete_board = function(req, res) {
  Board.remove({
    _id: req.params.BoardId
  }, function(err, Board) {
    if (err)
      res.send(err);
    res.json({ message: 'Board successfully deleted' });
  });
};

