var db = require("../models");
var path = require('path');

module.exports = function(app) {
  // Load index page
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({
      attributes:['employer_id','employer_name','employer_email','employer_password','employer_confirmpassword'],
      WHERE:{
        id:req.params.id,
        email:req.params.employer_email,
        password:req.params.employer_password
      }
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });



  // React

  app.get("/", function(req, res) {
    res.sendFile( path.join(__dirname, '../', 'public', 'build', 'index.html'))
  })
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile( path.join(__dirname, '../', 'public', 'build', 'index.html'))
  });
};
