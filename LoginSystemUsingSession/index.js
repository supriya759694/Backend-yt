const express = require('express');
const session = require('express-session');

const app = express();

//middleware
app.use(express.urlencoded({extended : true}));
app.use(session({
    secret:'secret123',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:600000}//10 min

}));

//dummy user
const USER ={
    username:'supriya',
    password:'1234'
};

app.get('/',(req,res)=>{
    res.send('home page');

})
//login Route
app.get('/login',(req,res)=>{
    res.send(`
        <form method='POST' action='/login'>
        <input name='username' placeholder='username'/>
        <input name='password' placeholder='password' />
        <button>Login</button/>
        </form>
        `);
});

app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if(username === USER.username && password === USER.password){
        req.session.user = username; //session created
        res.redirect('/dashboard');
    }else{
        res.send('Invalid credentials');
    }

});

app.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.send(`Welcom ${req.session.user} <br> <a href='/logout'>Logout</a>`);
    }
    else{
        res.redirect('/login');
    }
});

//logout
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.send(`Logged out Successfully`)
});

//start server
app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');

})