const router = require("express").Router();
const twilio = require("twilio");

// twilio text

router.get("/send-text", (req, res) => {
  const { recipient, textmessage } = req.query

// Send Text
  client.messages.create({
    body: textmessage,
    to: recipient,
    from: +14052765588 // from Twilio
  })
  .then(message => {
    console.log(message.body)
  })

})

module.exports = router;
