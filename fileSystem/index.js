//import file system

const fs = require('fs');

//write data into file

// fs.writeFileSync("filename","content");
// fs.writeFileSync('data.txt',"hello node js file system");
// console.log(" file created ");


//read file 

// fs.readFileSync('filename', 'encoding');
//  const data = fs.readFileSync('data.txt','utf-8');
//  console.log(data);


// UPDATE FILE + append data

// Append data -> add new content without  deleting old data
// fs.appendFileSync("data.txt","\nNode js Backend Learning");
// console.log("file updated");


// // DELETE file 
// fs.unlinkSync('data.txt');
// console.log('file deteted')

// fs.writeFileSync('data.txt',"new file for backend  node.js");
// console.log('file created');

// // Rename file
// fs.renameSync('data.txt','newData.txt');
// console.log('rename the file');


// check file exits or not
if(fs.existsSync('Data.txt')){
    console.log('file exits');

}else{
    console.log('file not found');
}
