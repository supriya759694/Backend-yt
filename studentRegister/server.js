
//backend server 
const express = require('express');
const app = express();
const connectDB = require('./config/db');

//middlewrae
app.use(express.json());

//database connection
connectDB();
console.log('database connected ');
//routes
//app.use('/students',require('./routes/studentRoutes'));

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`);
});

