const fs = require('fs');

//Create
fs.writeFile('asyncfile.txt',"hello Async js",(err)=>{
    if(err) throw err;
    console.log("file created");
})

//read
fs.readFile('asyncfile.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);

})