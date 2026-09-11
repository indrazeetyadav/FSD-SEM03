//CREATE YOUR OWN SERVER USING HTTP MODULE
import http from "http";
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200, {"content-type" : "text/html"});
    res.write('hello world');
    res.write("<h1>welcome to my server</h1>");
    res.end();
})
server.listen(8000,()=>{
    console.log("server is running on port 8000");
    
})

