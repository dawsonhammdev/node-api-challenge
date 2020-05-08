//import express
const express = require('express');
//import Router files
const actionRouter = require("./action-router")
const projectRouter = require("./project-router")

const server = express();

server.use(express.json());

// dynamic port
const port = process.env.PORT || 6000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
