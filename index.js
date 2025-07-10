// const {greet, greetWithName} = require('./hello.js');

// greet();
// greetWithName("Alice"); 


const http = require("http");
const fs = require("fs");
const url = require("url")

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now().toLocaleString()} : ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    fs.appendFile("log.txt", log, (err, data) =>{
       switch(myUrl.pathname){
        case "/" : res.end("Home page");
        break;
        case "/about" : //about?myname=Rahul Kumar
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`);
            break;
        case "/search" : 
            const search = myUrl.query.search_query;
            res.end("here is your result for " + search);
        default:
            res.end("404 Not Found");
       }
        
    })
});

myServer.listen(8000, () => console.log("server started!"));