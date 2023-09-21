const express = require("express");
const app = express();
const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-Type','text/html')
    res.end('<h1>This is Shyam</h1> <p>Hey, How are you!</p>');
}) 


app.listen(process.env.PORT || 3000);