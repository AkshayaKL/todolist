const express = require("express");
const router = express.Router();
const TASK = require("../models/task.model");
const newTask = require('../models/task');

router.post('/', async(req,res)=>{
    
    let request = req.body;
    let Date = request.date;
    let name = request.name;
    let status = request.status;
    let author = request.author;
   
    
    generatedTask = new newTask(Date, name, status, author);
    console.log(generatedTask);
    var task = new TASK(generatedTask);
    await console.log(task);
    
   
                await task.save(async(err,docs)=>{
                    if(err){
                        await console.log(err);
                        await res.status(500).send(err);
            
                    }
                    else{
                        await res.status(200).send(docs);
                    }
                })
            })

        
    
   


module.exports = router;


