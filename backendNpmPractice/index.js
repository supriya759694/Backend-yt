//imported require files
const express = require('express');
const dotenv = require('dotenv');

//load environment variables
dotenv.config();

//create express app
const app = express();

//Middleware(optional but important)
app.use(express.json());

//Home Route
app.get('/',(req,res)=>{
    res.send('Backend npm practice server is running');
});

//sample Api route
app.get('/api/info',(req,res)=>{
    res.json(
        {
            project : 'Backend-NPM-Practice',
            author:'Supriya Bhowmick',
            status : 'Learning npm & Express',

        }
    );
});

//port configuration
const PORT = process.env.PORT || 3000;

//start server
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});
