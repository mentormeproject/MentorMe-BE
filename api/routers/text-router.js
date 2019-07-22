
require("dotenv").config();

const router = require("express").Router();

const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

// finding twilio account through ENV file
const client = new twilio(accountSid, authToken);

// twilio text

module.exports = {
  sendMessage: users => {
    client.messages.create({
    body: `Hello! ${users.username} Someone posted a question for you to answer!`,
    from: twilioNumber,
    to: users.phoneNumber
    })

    .then(message => console.log(message))
    .catch(error => console.log(error))
  }
}



// router.get("/send-text", (req, res) => {
//   const { recipient, textmessage } = req.query

// // Send Text
//   client.messages.create({
//     body: textmessage,
//     from: twilioNumber,
//     to: recipient,
//     from: +14052765588 // from Twilio
//   })
//   .then(message => {
//     console.log(message.body)
//   })

// })

module.exports = router;
