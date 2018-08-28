const mysql = require("mysql");
const Schema = mysql.Schema;
// this may need to be tweeked a  bit--this is to create the schema for the db for name, age,data structure to pass to the model
const userSchema = new Schema({
    username: String,
    googleId: String
});
// create the model
const User = jawsdb.model("user", userSchema);
module.exports = User; 