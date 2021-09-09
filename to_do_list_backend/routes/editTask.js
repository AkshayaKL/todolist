const express = require("express");
const router = express.Router();
const TASK = require("../models/task.model");


router.patch('/', async(req,res)=>{
   await console.log(req.body);
    let request = req.body;
    let date = request.date;
    let author = request.author;
    let name = request.name;
    let status = request.status;
    let id = request._id;

        await TASK.findByIdAndUpdate(id,{$set: { date: date, author:author, name:name,status:status}},async(err,docs)=>{
        if(err){
            await console.log(err);
            await res.status(500).send(err);
        }
        else if(docs ==  null){
            await res.status(403).send("No task found")
            await console.log("No task found by the code")
        }
        else{
           await res.status(200).send("Task is updated")
        }
    })
   
})

module.exports = router;