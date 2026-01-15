const express = require('express');
const app = express();

//Middleware
app.use(express.urlencoded({extended:true})); //form data
app.use(express.static('public'));//static files

//view engine
app.set('view engine','ejs');

//temporary storage
let notes = [];

//Home page
app.get('/',(req,res)=>{
    res.render('index',{notes});
});

//create note
app.post('/add-note',(req,res)=>{
const {title,content} = req.body;
if (title && content) {  // Basic validation
    const newNote = {
      id: Date.now(),  // Simple unique ID using timestamp
      title: title,
      content:content,
      createdAt: new Date().toLocaleString()  // For display
    };
notes.push(newNote);
}
res.redirect('/');

});

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
});
