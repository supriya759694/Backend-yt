//Complete Express Server

const express = require('express');
const app = express(); 

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server running on backend node.js');
});

app.get('/api/user',(req,res)=>{
    res.json({name : 'Supriya', role: 'BackendLearner'});

});

app.listen(3000,()=>{
    console.log('Server started running on http://localhost:3000');
})


// Routing in Express.js
app.get('/about',(req,res)=>{
res.send('about page');
})

app.get('/login',(req,res)=>{
    res.send('Login success');
})