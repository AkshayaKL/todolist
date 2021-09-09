


const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(process.cwd()+"/build/index.html")
})

module.exports = router;