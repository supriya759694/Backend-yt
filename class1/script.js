//array map
let arr = [100,2000,300,500,600];

//MAP
//1. add currency each elemet using map

let newArr = arr.map(e => '$' + e);
//console.log(newArr);
const users = ["Supriya", "Amit", "Riya","Sarthak","NUtu"];

 const newUser = users.map(user => user + '100')
//console.log(newUser);

//filter
let Arr = [100,2000,300,500,600];

let newA = arr.filter(a => a>300);
//console.log(newA);

//find

let e = arr.find(a => a === 300);
//console.log(e);

//async

async function getUsers(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
   let newdata =await data.json();
   console.log(newdata);
} 

getUsers();