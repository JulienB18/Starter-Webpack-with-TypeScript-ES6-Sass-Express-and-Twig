// Application
const express = require('express');
const app = express();
require('dotenv').config()

//Server
const server = require('http').createServer(app);
server.listen(process.env.SERVER_PORT);
app.use(express.static(__dirname + '/public'));

console.log("Listening to " + process.env.SERVER_PORT)
console.log("Connection Established !")

app.get('/', function (req, res) {
    res.render("index.twig");
})