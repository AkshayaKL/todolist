const express = require('express');
const mongoose = require('mongoose');
const app = express();
const creation = require('./routes/createTasks');
const updation = require('./routes/editTask');
const deletion = require('./routes/deleteTask');
const getDetails = require('./routes/getTask');
const getCoupons = require('./routes/tasks');

const mainPage = require('./routes/mainPage');
require('./db');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000")
    res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, GET, POST, OPTIONS,PUT');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', mainPage)
app.use('/task/create',creation);
app.use('/task/edit',updation);
app.use('/task/delete',deletion);
app.use('/task/get',getDetails);
app.use('/tasks/get', getCoupons);

app.listen(port, () =>{
    console.log(` Listening on port ${port} `);
});

module.exports = app;