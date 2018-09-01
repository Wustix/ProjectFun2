const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
var mongoose = require("mongooese");
const keys = require("./config/keys");
const coookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
// set up view engine


app.set("view engine","ejs");
app.use(coookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to jawsdb here--may need to tweek this a bit to connect our db
mongoose.connect(keys.mongo.dbURI, () => {
    console.log("conected to db");
});
// set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// create home route

app.get("/", (req, res) => {
    res.render("home", { user: req.user });
});
app.listen(8000, () => {
    console.log("app now listening for requests on port 8000");
}); 