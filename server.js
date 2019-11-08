const express = require("express");
const cors = require("cors");
const helmet  = require("helmet");
const projectsRouter = require("./data/projectsRouter");
const resourcesRouter = require("./data/resourcesRouter");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/projects",projectsRouter);
server.use("/api/resources",resourcesRouter);

module.exports = server;