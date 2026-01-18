const express = require('express');
const app = express();
const usermodel = require('./models/user');
const connectDB = require('./config/db');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

// EJS setup ✅
app.set("view engine", "ejs");


app.get('/',(req,res)=>{
  res.send('Home Page');
})

app.get('/about',(req,res)=>{
  res.send('About Page');
})

app.get('/register',(req,res)=>{
  res.render('register');
})

app.post('/register',async(req,res)=>{
  //console.log(req.body);
  const {username,email,password} = req.body;

  //user create
  const newUser = await usermodel.create({
    username : username,
    email:email,
    password:password,
  });

  res.send(newUser);
})

// CRUD operation

//Read 
app.get('/get-users',(req,res)=>{
  usermodel.find({"username":"b"}).then((users)=>{
    res.send(users);
  })
})

// Update 
app.get('/update',async(req,res)=>{
  await usermodel.findOneAndUpdate({
    username:'a'
  },
{
  email:'cc@23com'
})
res.send('user update');
})

//delete
app.get('/delete-user',async(req,res)=>{
  await  usermodel.findOneAndDelete({username:'b'})

  res.send('user deleted');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
