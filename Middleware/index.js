// custom middleware
const express = require('express');
const app = express();

//custum middleware
const myMiddleware = (req,res,next)=>{
    console.log('Middleware Executed');
    console.log('Request URL :',req.url);
    console.log('Request Method :',req.method);
    next();
}

//use middlewares
app.use(myMiddleware);

//Routes
app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.get('/about',(req,res)=>{
    res.send('About Page');
})
app.get('/contact',(req,res)=>{
    res.send('contact Page')
})

//server
app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
})