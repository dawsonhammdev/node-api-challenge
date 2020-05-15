//importing express
const express = require('express');

//router
const router = express.Router();

//importing helper
const Project = require("./data/helpers/projectModel")

router.get("/", (req,res) => {
    Project.get()
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message:"Error retrieving the actions"
        });
    });
});

router.post("/", (req,res) => {
    Project.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error adding the hub',
        });
    })
});



module.exports = router

