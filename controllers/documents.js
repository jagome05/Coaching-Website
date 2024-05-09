const express = require("express");
const router = express.Router();
const DOCU_API_KEY = process.env.DOCU_API_KEY

//TODO what do we want to do with form?? Work with admin dashboard
//todo save to DB? --> POST?
//todo post to user page --> GET
//todo let Yvonne know on admin page if they have completed --> GET
//todo send email to Yvonne and client --> https://www.docuseal.co/docs/api#update-a-submitter OR https://www.docuseal.co/docs/api#form-webhook
//todo allow to download --> https://www.docuseal.co/guides/download-signed-documents

router.get("/docs", (req,res) => {

})

router.get("/reg-consent", async (req,res) => {

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

  } catch(err) {
    console.log(err)
  }

})

module.exports = router

//? ref
//https://www.docuseal.co/guides/embed-document-signing-into-react-app
//https://www.docuseal.co/docs/api#submissions_resource
//https://console.docuseal.co/api