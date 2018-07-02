// Ben's File

// Dependencies

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/api/products", function(req, res) {
    var query = {};
    if (req.query.product_id) {
      query.ProductId = req.query.product_id;
    }
    // Including the Review Table
    db.Product.findAll({
      where: query,
      include: [db.Review]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // Get route for retrieving a single product
  app.get("/api/products/:id", function(req, res) {
    // Adding an "include" property to our options in our findOne query
    // This will allow us to pull the reviews for that product
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Review]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // Get route for retrieving products by category
  app.get("/api/products/:category", function(req, res) {
    db.Product.findOne({
      where: {
        category: req.params.category
      },
      include: [db.Review]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // POST route for saving a new product
  app.post("/api/products", function(req, res) {
    db.Post.create(req.body).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // DELETE route for deleting products
  app.delete("/api/products/:id", function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // PUT route for updating product inventory
  app.put("/api/products", function(req, res) {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });
};