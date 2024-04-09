require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//connects to local server host
const PORT = process.env.PORT;

//connects to db
const mongoose = require("mongoose");
const { dbConnect } = require("./db");

//connects to controllers


//* cors helps us if other project using server/db
app.use(cors());

// * lets us read json
app.use(express.json());

// connects to endpoints


//* use this to test admin privelge ---> app.use('/admin', admin)

app.listen(PORT, () => {
  dbConnect();
  console.log("listening on port: " + PORT);
});
