
// *** Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var stripe = require ("stripe")("rk_test_coIEq8ziNXdJcEMOmbs11M2T");

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



app.use(express.static(__dirname + '/public'));
app.use (bodyParser.json()); // Using body parser
app.use (bodyParser.urlencoded({extended: false}));
app.get('/', function (req, res) {
  res.sendfile('./public/views/index.html');
});
app.get('/', function (req, res) {
  res.sendfile('payment.html', {

  });
}); // page not made yet that shows payment was made succesfully
app.post ('/charge', function (req, res){
  var token = req.body.stripeToken;
  var chargeAmount = req.body.chargeAmount;
  var charge = stripe.charges.create({
    amount: chargeAmount,
    currency:"usd",
    source: token
  }, function (err, charge){
    if(err & err.type === "StripeCardError") {
      console.log ("Your card was declined");
    }
  });
  });
  console.log ("your payment was succesful");
  // res.redirect('/payment.html');
  

app.listen (3000, function (){
  console.log ("Stripe is running");
});
