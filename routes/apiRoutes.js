var db = require("../models");

module.exports = function(app) {
  // Get all employer
  app.get("/api/employer", function(req, res) {
      db.employer.findAll ({
       attributes:['employer_id','employer_email','employer_password'],
      WHERE:{
        id:req.params.employer_id,
        email:req.params.employer_email,
        password:req.params.employer_password
      }
    }).then(function(dbemployer) {
      res.json(dbemployer);
    });
  });

  // Create a new enployer
  app.post("/api/employer", function(req, res) {
    db.employer.create({
      employer_name: req.body.employer_name,
      employer_email:req.body.employer_email,
      employer_password:req.body.employer_password,
      employer_confirmpassword:req.body.employer_confirmpassword
      
    }).then(function(dbemployer) {

      res.json(dbemployer);
    });
  });

  // Delete an employer by id
  app.delete("/api/employer/:employer_id", function(req, res) {
    db.employer.destroy({ where: { employer_id: req.params.employer_id } }).then(function(dbemployer) {
      res.json(dbemployer);
    });
  });
};
