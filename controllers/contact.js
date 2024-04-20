const router = require("express").Router();
const nodemailer = require("nodemailer")

//todo think about message from logged-in vs NOT
router.post("/contactMe", (req, res) => {

  // * transporter is SMTP server that will send mail
  let transporter = nodemailer.createTransport({
    //--> use this for gmail
    //todo look into OAtuh2
    //   service: 'gmail',
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: false,
    //   // *admin user info
    //   auth: {
    //     user: 'jobranja04@gmail.com',
    //     pass: 'asdf1204'
    //   },
    //   tls: {
    //     rejectUnauthorized: false
    // }

    // --> use this for mailtrap
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7dc7b0a0436181",
      pass: "28ffbcc859bdf2"
    }
  });

  console.log(req.body)
  let { first, last, email, message } = req.body;

  // * email layout
  let mailOptions = {
    from: email,
    to: "jobranja@gmail.com",
    subject: `New Message from ${first}`,
    text: message,
    html: message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // return res.send('Error')
    } else {
      console.log('Email sent: ' + info.response)
      // return res.send(`Success!`)
    }
  })

  res.status(200).json(mailOptions)
})





module.exports = router;

//? References
// https://nodemailer.com/
//https://stackoverflow.com/questions/46742402/error-self-signed-certificate-in-certificate-chain-nodejs-nodemailer-express
