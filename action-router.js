//importing express
const express = require("express");

//importing helpers
const Action = require("./data/helpers/actionModel")

//router
const router = express.Router();


router.get("/", (req,res) => {
    Action.get()
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

router.get("/:id", (req,res) => {
    Action.get(req.params.id)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message:"Error retrieving the actions"
        });
    });
})

router.put("/:id", (req,res) => {
    console.log(req.body)
    Action.update(req.params.id, req.body)

    .then(action => {
        console.log(action)
        if(action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: 'The action could not be found' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message:"Error updating the actions"
        });
    });
    
})

router.post('/', (req,res) => {
    Action.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error adding the project',
        });
    })

})

router.delete('/:id', (req,res) => {
    Action.remove(req.params.id)
    .then(action => {
        if(action){
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

