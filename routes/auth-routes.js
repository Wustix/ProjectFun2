const router = require("express").Router();
const passport = require("passport");
// auth login
router.get("/login", (req, res) => {
    res.render("login", { user: req.user });
});
// auth log out function/handles with passport-then redirects to homepage
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
// auth with google

router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}))

<<<<<<< HEAD

router.get("/google"),
    passport.authenticate("google", { scope: "https://www.google.com/m8/feeds" });


=======
 router.get("/google"),
passport.authenticate("google" , { scope: "https://www.google.com/m8/feeds"});
 
>>>>>>> 44d38b27c37a77aa069ad19f4d5bf7b0fa299a55
//   handle with passport

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    console.log("redirecting");
    // res.send(req.user);
    res.send("uri authenticate");
});
module.exports = router; 