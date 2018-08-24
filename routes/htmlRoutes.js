var db = require("../models");

module.exports = function(app) {
// Load index page
  app.get("/", function(req, res) {
      res.render("index", {
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
