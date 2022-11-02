//require
const express = require('express');
const http = require('http');
const router = require('./router');
const cors = require("cors");


//use
const app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const server = http.createServer(app);
app.use(router);


server.listen(process.env.PORT || 8080, () => {
    console.log(`listening to PORT ${8080}`);
})  