// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/jobposts", function(req, res) {
    var query = {};
    if (req.query.employer_id) {
      query.EmployerId = req.query.employer_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Employer]
    }).then(function(dbJobPost) {
      res.json(dbJobPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/jobposts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.JobPost.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Employer]
    }).then(function(dbjobPost) {
      res.json(dbPjobost);
    });
  });

  // POST route for saving a new post
  app.post("/api/jobposts", function(req, res) {
    db.JobPost.create(req.body).then(function(dbJobPost) {
      res.json(dbJobPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/jobposts/:id", function(req, res) {
    db.JobPost.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbJobPost) {
      res.json(dbJobPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/jobposts", function(req, res) {
    db.JobPost.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbJobPost) {
      res.json(dbJobPost);
    });
  });
};
