const router = require("express").Router();
const mongoose = require("mongoose");
const { dbConnect } = require("../db");

//todo think about message from logged-in vs NOT

module.exports = router;

//? References
// https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
// https://www.geeksforgeeks.org/mongoose-populate-method/
// https://stackoverflow.com/questions/77557660/delete-specific-object-in-array-element-in-document-and-save-mongoose
