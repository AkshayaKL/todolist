const express = require("express");
const router = express.Router();
const TASK = require("../models/task.model");


router.get('/', async(req,res)=>{
   
    let request = req.body;
    let id = request.id;
   

        await TASK.findById(id, async(err,docs)=>{
        if(err){
            await console.log(err);
            await res.status(500).send(err);
        }
        else{
            if(docs.length)
             await res.status(200).send(docs)
            else
             await res.status(404).send("Couldn't find the task")
        }
    })
   
})

module.exports = router;