const express = require("express");

//importing routers
const actionRouter = require("./action-router")
const projectRouter = require("./project-router")

const server = express();

//global middleware
server.use(express.json());

server.use("/api/data", actionRouter, projectRouter);


