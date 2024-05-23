const mongoose = require("mongoose");

const goalsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
});

const Goals = mongoose.model("Goals", goalsSchema);

module.exports = Goals;
