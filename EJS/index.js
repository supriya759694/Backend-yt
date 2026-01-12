//setup expresss server
const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{
        name:'supriya',
       role:'Backend Learner',
       skills:['node.js','express','mongoDB','react']
    });
});



app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
});