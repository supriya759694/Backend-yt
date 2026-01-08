const http = require('http');
const fs = require('fs');
const os = require('os');

// create server
const server = http.createServer((req,res) => {
    //Home Route
if(req.url === '/' && req.method === 'GET'){
    res.writeHead(200,{'content-Type' : 'text/plain'})
    res.end('Welcome to System Info Server');
}

//System Info Route
else if(req.url ==='/system' && req.method ==='GET'){
    //OS Data
    const platform = os.platform();
    const totalMemory = (os.totalmem()/1024/1024/1024).toFixed(2);
    const freeMemory = (os.freemem()/1024/1024/1024).toFixed(2);
    const cpuCount = os.cpus().length;

    const systemInfo = `
    Operating System : ${platform}
    Total Memory : ${totalMemory}GB
    Free Memory : ${freeMemory}GB
    CPU cores :${cpuCount}
    -------------------------------------------

    `;

    //save log to file
    fs.appendFile('log.txt',systemInfo,(err)=>{
        if(err)
            console.log("Error Writing File");
    });
    res.writeHead(200,{'content-Type' : 'text/plain'});
    res.end(systemInfo);
}
// not found
else{
    res.writeHead(404,{'content-/Type' : 'text/plain'});
    res.end('404 page not found');
}
});

//start server
server.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
});