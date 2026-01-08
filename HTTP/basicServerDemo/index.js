//import http
const http = require('http');

//create server
const server = http.createServer((req,res)=>{
    res.write("hello backend Node.js");
    res.end();
})

server.listen(5000,()=>{
    console.log("Server running on port 5000");
})