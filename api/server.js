const express = require("express");
const helmet = require("helmet");

const configureRoutes = require("./routers/auth-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", configureRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
