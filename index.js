const http = require("http");
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("/echo", function(req, res) {
    console.log("Raw Headers:");
    console.log(req.rawHeaders);
    console.log("Headers:");
    console.log(req.headers)
    console.log("Request:");
    console.log(req.body);    
    res.send(req.body);
})

var server = http.createServer(app);
server.listen(port, "127.0.0.1");