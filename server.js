require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");



 var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static("public/build/static"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
// app.set("view engine", "handlebars");
app.set('views', __dirname + '/public/src');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
// Routes
require("./routes/apiRoutes")(app);
require("./routes/jobpost-api-routes")(app);
//html routes last
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === 'development' ) {
  syncOptions.force = true;
}

// // Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
