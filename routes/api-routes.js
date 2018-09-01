
// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post('/send', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.emailName}</li>
        <li>Email: ${req.body.emailEmail}</li>
        <li>Message: ${req.body.emailMessage}</li>
      </ul>
    `;
  const emailTo = `
      ${req.body.emailToEmail}
  `
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hotrest123@gmail.com',
      pass: '1111asdf'
    }
  });
  
  var mailOptions = {
    from: 'hotrest123@gmail.com',
    to: emailTo,
    subject: 'R Nest Message',
    text: 'You have a new R Nest message below:',
    html: output 
  
  };
  console.log(mailOptions);
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  
  });
  res.redirect("/home");
  });
  
  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      email: req.body.email,
      price: req.body.price,
      photo: req.body.photo,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
