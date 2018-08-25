var db = require("../models");
var path = require("path");

module.exports = function(app) {
// Load index page
app.get("/", function(req, res) {
  db.Example.findAll({}).then(function(dbExamples) {
    res.render("index", {
      msg: "Welcome!",
      examples: dbExamples
    });
  });
});
// load cars page
  app.get("/cars", function(req, res) {
    res.render("cars", {
    });
  });
// load electronics page
  app.get("/electronics", function(req, res) {
    res.render("electronics", {
    });
  });
// load sporting page
  app.get("/sporting", function(req, res) {
    res.render("sporting", {
    });
  });
// load jewelry page
  app.get("/jewelry", function(req, res) {
    res.render("jewelry", {
    });
  });
// Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
