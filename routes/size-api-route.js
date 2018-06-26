// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/sizes", function(req, res) {
    var query = {};
    if (req.query.Size_id) {
      query.SizeId = req.query.size;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Size]
    }).then(function(dbSize) {
      res.json(dbSize);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/sizes/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Size.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Size]
    }).then(function(dbSize) {
      res.json(dbSize);
    });
  });

  // POST route for saving a new post
  app.post("/api/sizes", function(req, res) {
    db.Post.create(req.body).then(function(dbSize) {
      res.json(dbSize);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/sizes/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSize) {
      res.json(dbSize);
    });
  });

  // PUT route for updating posts
  app.put("/api/sizes", function(req, res) {
    db.Size.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbSize) {
      res.json(dbSize);
    });
  });
};