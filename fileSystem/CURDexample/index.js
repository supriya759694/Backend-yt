// CRUD Example
const fs = require('fs'); // import file system

//CREATE
fs.writeFileSync('text.txt',"new crud file for backend node.js");
console.log('new file created');

//READ
const data = fs.readFileSync('text.txt','utf-8');
console.log(data);


//UPDATE
fs.appendFileSync('text.txt',"\nupdate Backend NODE.js file by adding file system ");

fs.writeFileSync('demo.txt',"mew demo file ");
//Delete 
fs.unlinkSync('demo.txt');
console.log('demo file deleted');