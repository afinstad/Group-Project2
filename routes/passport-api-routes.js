// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Routes
// =============================================================
module.exports = function(app, models) {

    // GET route for getting all of the posts
    app.get("/api/data", function(req, res) {
      res.json( ["API is working"]  );
    });
  };