const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://muneebali2856:root@cluster0.ibavpez.mongodb.net/newToDo').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb Connection error");
});

module.exports = connection;

