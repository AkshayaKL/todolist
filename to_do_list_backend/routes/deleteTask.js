const express = require("express");
const router = express.Router();
const TASK = require("../models/task.model");


router.post('/', async(req,res)=>{
   //await console.log(req.params.code);
    let request = req.body;
    let id = request.id;
    await console.log(code);
    
    await TASK.findByIdAndDelete(id,async(err,docs)=>{
        if(err){
            console.log(err);
            await res.status(500).send(err);
        }
        else if(docs!= null){
           await res.status(200).send(`Task is deleted - ${docs}`)
        }
        else
        await res.status(404).send("Task couldn't be found");
    })
   
})

module.exports = router;