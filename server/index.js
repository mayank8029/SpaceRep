const express = require('express');
const {connectToDatabase} = require('./config/db.js')
const port = process.env.PORT || 5000 ;
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
const auth = require('./routes/auth') ; 
const card = require('./routes/card') ; 
const deck = require('./routes/deck');
const { application } = require('express');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cookieParser()); 
require('dotenv').config() ; 

// Database Connection 

connectToDatabase() ; 

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

res.header('Access-Control-Allow-Credentials', true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use('/api/auth' , auth) ; 
app.use('/api/card' , card) ; 
app.use('/api/deck' , deck)



app.listen(port , ()=>{
    console.log(`server is listening on http://localhost:${port}`);
});