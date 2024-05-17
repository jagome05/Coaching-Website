const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  firstname: {
    type: String,
    maxLength: 20,
    required: true,
  },
  lastname: {
    type: String,
    maxLength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
});

// Define a virtual property for fullname
Users.virtual("fullname").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

// Ensure virtuals are included when converting the document to JSON
Users.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", Users);
