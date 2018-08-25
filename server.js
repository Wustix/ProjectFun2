// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var medthodOverride = require("method-overried");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Method override for RESTFUL form submissions
app.use(medthodOverride("_method"));


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Handlebars config
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("viwe engine", "handlebars");

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.info(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
