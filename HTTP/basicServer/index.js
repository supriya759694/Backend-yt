//import HTTP
const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("hello Backend");
    res.end();
});

server.listen(3000,()=>{
    console.log("server running on port 3000");
})

