const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: String,
  firstName: String,
  lastName: String,
  location: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
