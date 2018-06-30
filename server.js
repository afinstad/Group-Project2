
// *** Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Hodan/Iles
require("dotenv").config()
var PUB_KEY = process.env.PUB_KEY
var SECRET_KEY = process.env.SECRET_KEY
console.log (SECRET_KEY)
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(SECRET_KEY);

const charge = stripe.charges.create(
    {
        amount: 999,
        currency: 'usd',
        source: 'tok_visa',
        receipt_email: 'jenny.rosen@example.com',
    }
).then(res => {
    console.log (res)
})



// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Iles
// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

//stripe configure
var keyPublishable = process.env.PUBLISHABLE_KEY;
var keySecret = process.env.SECRET_KEY;
var stripe = require("stripe")("sk_test_dOFWIEyJc2fkOc8XzHtKTadE");

//creating cookies and underline session
var session = require('express-session');
var passport = require('passport');

// Routes
// Ben
require("./routes/product-api-route.js")(app);
require("./routes/review-api-route.js")(app);

// Hodan
require("./controllers/authController.js")(app);
require("./controllers/protectedController.js")(app);
require("./controllers/publicController.js")(app);

//where passport auth will be set up
require('./config/passport.js');


// Hodan
connection.connect();

//Iles
//sessionConfig that happens before passport will be. specifying cookie info
var sessionConfig = {
  //not shared with people. searches for it in the environment
  secret: process.env.SECRET || 'super secrect key goes here',
  key: 'user',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 50 * 1000, //30 mins. Cookie should only last 30min
    secure: false
  }
}

//Iles
app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


//following routes require auth
app.use('/private', ensureAuthenticated);

app.get('/private/secretInfo', function(req, res){
  console.log('Sending secret info');
  res.send('This is very secret');
});
function ensureAuthenticated(req, res, next){
  console.log('Ensuring the user is authenticated');
  if(req.isAuthenticated()){
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});


// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

