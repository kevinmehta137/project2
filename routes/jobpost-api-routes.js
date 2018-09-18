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
    // var query = {};
    // if (req.query.id) {
    //   query.id= req.query.id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.add_gigs.findAll({
      attributes:['gig_date','gig_description','gig_location','gig_number_of_hours','gig_number_of_people','gig_rate','gig_total_pay']
    }).then(function(dbadd_gigs) {
      res.json(dbadd_gigs);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/jobposts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.add_gigs.findOne({
      where: {
        id: req.params.id
      },
      include: [db.add_gigs]
    }).then(function(dbadd_gigs) {
      res.json(dbadd_gigs);
    });
  });

  //POST route for saving a new post
  app.post("/api/jobposts", function(req, res) {
    console.log(req.body);

    db.add_gigs.create({
      gig_date: req.body.gig_date,
      gig_description: req.body.gig_description,
      gig_location: req.body.gig_location,
      gig_number_of_hours: req.body.gig_number_of_hours,
      gig_number_of_people: req.body.gig_number_of_people,
      gig_rate: req.body.gig_rate,
      gig_total_pay: req.body.gig_total_pay
    }).then(function(dbadd_gigs) {
      console.log("I was successful");
      console.log(dbadd_gigs.get({plain: true}));
      console.log("Finished deserializing object");
      //res.json(dbEmployer.get({plain: true}));
      res.json({success: true});
    }).catch(function(err) {
      console.log("I had an error");
      console.log(err);
      res.sendStatus(500);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/jobposts/:id", function(req, res) {
    db.add_gigs.destroy({
      where: {
        id: req.params.id,
        
      }
    }).then(function(dbadd_gigs) {
      res.json(dbadd_gigs);
    });
  });

  // PUT route for updating posts
  app.put("/api/jobposts", function(req, res) {
    db.add_gigs.update(
    
      req.body,
      {
        where: {
            id:req.body.id
       }
      }).then(function(dbadd_gigs) {
      res.json(dbadd_gigs);
    });
  });

};