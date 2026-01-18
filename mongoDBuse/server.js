//express server

const express = require('express');
const app = express();

require('./db'); // connect database
const User = require('./usermodel');

app.get('/',(req,res)=>{
    res.send('server running');
})

app.listen(3000,()=>{
    console.log('server call on http://localhost:3000');
})