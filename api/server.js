const express = require("express");
const helmet = require("helmet");

const authorization = require("./routers/auth-router.js");
const questions = require("./routers/question-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", authorization);
server.use("/api", questions);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
