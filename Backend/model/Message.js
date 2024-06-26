const mongoose = require("mongoose");
const Users = require("./Users");

const Message = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  body: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model("messages", Message);

// --> The ref option is what tells Mongoose which model to use during population
// --> if using ObjectId; it is unique ID NOT room name,author, etc (eg. must use room.name)
// ? ref
// https://mongoosejs.com/docs/populate.html#population
