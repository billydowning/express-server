const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define our User model

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

//Create the model class

const ModelClass = mongoose.model("User", userSchema);

//Export the model
module.exports = ModelClass;
