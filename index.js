// const {greet, greetWithName} = require('./hello.js');

// greet();
// greetWithName("Alice"); 


const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now().toLocaleString()} : ${req.url} New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data) =>{
       switch(req.url){
        case "/" : res.end("Home page");
        break;
        case "/about" : res.end("this is about page");
        break;
        default:
            res.end("404 Not Found");
       }
        
    })
});

myServer.listen(8000, () => console.log("server started!"));