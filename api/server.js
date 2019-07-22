const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const authorization = require("./routers/auth-router.js");
const questions = require("./routers/question-router.js");
const sendText = require("./routers/text-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", authorization);
server.use("/api", questions);
server.use("/api", sendText);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
