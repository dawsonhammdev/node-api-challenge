//importing express
const express = require('express');

//importing helpers
const Action = require("./data/helpers/actionModel")


//router
const router = express.Router();

router.get('/', (req,res) => {
    Action.get(req.query)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message:"Error retrieving the actions"
        });
    });
});

