<<<<<<< HEAD
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`[db] Connected to: ${DB_URL}`);
  } catch (err) {
    console.log(`[db] ${err}`);
  }
};

module.exports = { dbConnect };
=======
const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log(`[db] Connected to: ${DB_URL}`)
  } catch (err) {
    console.log(`[db] ${err}`)
  }
}

module.exports = { dbConnect }
>>>>>>> 197447842c9ad74ed2e14112dc7c1a77c565cfd0
