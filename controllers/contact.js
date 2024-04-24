const router = require("express").Router();
const nodemailer = require("nodemailer")

//todo think about message from logged-in vs NOT
router.post("/contactMe", (req, res) => {

  // * transporter is SMTP server that will send mail
  let transporter = nodemailer.createTransport({
    //--> use this for gmail
    //todo look into OAtuh2
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      // *admin user info
      auth: {
        user: 'jobranja04@gmail.com',
        pass: 'bbyb ujuo imcz gdkl'
      },
      tls: {
        rejectUnauthorized: false
    }

    // --> use this for mailtrap
    // host: "sandbox.smtp.mailtrap.io",
    // port: 2525,
    // auth: {
    //   user: "7dc7b0a0436181",
    //   pass: "28ffbcc859bdf2"
    // }
  });

  //* pulls info from contact.jsx
  let { first, last, from, message } = req.body;

  // * email layout
  let mailOptions = {
    // ! from will always be auth user for gmail? https://stackoverflow.com/questions/34628729/nodemailer-send-emails-using-original-user-account-instead-of-alias
    // todo unsure if 'from' can be updated? https://stackoverflow.com/questions/33949984/how-to-change-the-from-field-in-nodemailer
    from: {
      name: `Website Contact`,
      address: from
    },
    replyTo: from,
    to: "jobranja04@gmail.com",
    subject: `Website Contact: New Message from ${first}`,
    text: message,
    html: message
  }

  //* line of code that actually sends the mail
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
