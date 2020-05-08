//import express
const express = require('express');

//importing routers
const apiRouter = require('./api/apiRouter');

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

server.use("/api", apiRouter);


module.exports = server;


//custom middle ware


