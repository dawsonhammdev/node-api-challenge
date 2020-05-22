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

router.get("/:id", (req,res) => {
    Project.get(req.params.id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message:"Error retrieving the project"
        });
    });
})

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

router.put("/:id", (req,res) => {
    console.log(req.body)
    Project.update(req.params.id, req.body)

    .then(project => {
        console.log(project)
        if(project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'The project could not be found' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message:"Error updating the project"
        });
    });
    
})

router.delete('/:id', (req,res) => {
    Project.remove(req.params.id)
    .then(project => {
        if(project){
            res.status(201).json("Project Deleted")
        }else{
            res.status(401).json({message: "Id not found"})
        }
        
    })
    .catch(error => {
        // save the error to a log somewhere
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
})



module.exports = router

