const express = require("express");
const router = express.Router();
const DOCU_API_KEY = process.env.DOCU_API_KEY;
const crypto = require("crypto");
const path = require("path");
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

//TODO what do we want to do with form?? Work with admin dashboard
//todo save to DB? --> POST?
//todo post to user page --> GET
//todo let Yvonne know on admin page if they have completed --> GET
//todo send email to Yvonne and client --> https://www.docuseal.co/docs/api#update-a-submitter OR https://www.docuseal.co/docs/api#form-webhook
//todo allow to download --> https://www.docuseal.co/guides/download-signed-documents

// connection
const conn = mongoose.createConnection(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

//* POST Req to handle form submission and uploads file
router.post("/upload", async (req, res) => {

})

router.get("/docs", (req, res) => {

})

router.get("/reg-consent", async (req, res) => {

  try {

    let response = await fetch('https://api.docuseal.co/templates/88801', {
      method: 'GET',
      headers: {
        'X-Auth-Token': DOCU_API_KEY,
        'content-type': 'application/json'
      },
    })
      .then(res => res.json());

    //   const slug = response.data[0].slug; // Extracting the slug from the response
    //   res.json({ slug }); // Sending the slug in the response
    return res.status(200).json(response)

  } catch (err) {
    console.log(err)
  }

})

module.exports = router

//? ref
//https://www.docuseal.co/guides/embed-document-signing-into-react-app
//https://www.docuseal.co/docs/api#submissions_resource
//https://console.docuseal.co/api

// https://dev.to/shubhambattoo/uploading-files-to-mongodb-with-gridfs-and-multer-using-nodejs-5aed
//https://www.mongodb.com/docs/manual/core/gridfs/
//https://medium.com/@adt6261/handling-file-upload-and-parse-async-in-node-js-884c2a7cf8c4