
// *** Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var session = require('express-session');
var passport = require('passport');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static('public'))

// Routes
// Ben
require("./routes/product-api-route.js")(app);
require("./routes/review-api-route.js")(app);
require("./routes/routes-html.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

