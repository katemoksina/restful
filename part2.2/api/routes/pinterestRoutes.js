'use strict';
module.exports = function(app) {
  var pinterestController = require('../controllers/pinterestController');

  app.route('/boards/pins')
    .get(pinterestController.read_pins)
    .post(pinterestController.create_pin)
    .put(pinterestController.update_pin)
    .delete(pinterestController.delete_pin);

  app.route('/boards')
    .get(pinterestController.read_boards)
    .post(pinterestController.create_board)
    .put(pinterestController.update_board)
    .delete(pinterestController.delete_board);
};
