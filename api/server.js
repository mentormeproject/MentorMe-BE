const express = require("express");
const helmet = require("helmet");
const twilio = require("twilio");

const accountSid = 'AC5bc2d9be4d91ee2347467d78ce6d9873';
const authToken = '5a1d2ee68bfed1581a7339d833990692';
const client = new twilio(accountSid, authToken);

const authorization = require("./routers/auth-router.js");
const questions = require("./routers/question-router.js");
const sendText = require("./routers/text-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", authorization);
server.use("/api", questions);
server.use("/api", sendText);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
