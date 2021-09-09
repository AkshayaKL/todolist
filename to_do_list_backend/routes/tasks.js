const express = require("express");
const router = express.Router();
const TASK = require("../models/task.model");
const newTask = require('../models/task');

router.get('/', async(req,res)=>{
    await TASK.find({},async(err,tasks)=>{
          if(err){
              await console.log(err);
              await res.status(500).send("Tasks couldn't be fetched due to internal issues");
          }
          else{
              await res.status(200).send(tasks);
          }
    })
})

module.exports = router;