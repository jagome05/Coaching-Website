const express = require("express");
const router = express.Router();

//TODO what do we want to do with form?? Work with admin dashboard
//todo save to DB? --> POST?
//todo post to user page --> GET
//todo let Yvonne know on admin page if they have completed --> GET
//todo send email to Yvonne and client --> https://www.docuseal.co/docs/api#update-a-submitter OR https://www.docuseal.co/docs/api#form-webhook
//todo allow to download --> https://www.docuseal.co/guides/download-signed-documents




//* POST Req to handle form submission and uploads file
router.post("/upload", async (req, res) => {

})


module.exports = router

//? ref
//https://www.docuseal.co/guides/embed-document-signing-into-react-app
//https://www.docuseal.co/docs/api#submissions_resource
//https://console.docuseal.co/api
// https://dev.to/shubhambattoo/uploading-files-to-mongodb-with-gridfs-and-multer-using-nodejs-5aed
//https://www.mongodb.com/docs/manual/core/gridfs/
//https://medium.com/@adt6261/handling-file-upload-and-parse-async-in-node-js-884c2a7cf8c4
