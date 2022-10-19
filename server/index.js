//require
const express = require('express');
const http = require('http');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require("cors");


//use
const app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const server = http.createServer(app);
const uri ="mongodb+srv://artish19:YSbIVGlvIhAzwxaC@cluster0.utnafo1.mongodb.net/?retryWrites=true&w=majority"
app.use(router);

//Database
mongoose.connect(uri);
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

server.listen(process.env.PORT || 8080, () => {
    console.log(`listening to PORT ${8080}`);
})  