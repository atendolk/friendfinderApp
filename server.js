var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express application
var app = express();

var firstPort = process.env.PORT || 7801;
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(firstPort, function() {
  console.log("App listening on PORT " + firstPort);
});
