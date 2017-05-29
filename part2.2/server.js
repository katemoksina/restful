var express = require('express'),
  app = express();
  mongoose = require('mongoose'),
  Task = require('./api/models/pinterestModels'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pinterest'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/pinterestRoutes');
routes(app);

app.listen(3000);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Server running on port 3000');
