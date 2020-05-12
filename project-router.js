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



module.exports = router

