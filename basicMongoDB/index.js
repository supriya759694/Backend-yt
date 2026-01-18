const express = require('express');
const app = express();
const usermodel = require('./models/user');
const connectDB = require('./config/db');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
