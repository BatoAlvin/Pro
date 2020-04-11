const express = require("express");
//Installing mongoose to connect to database
const mongoose = require("mongoose");
//Declaring bodyparser to fetch and convert information
const bodyParser = require("body-parser");
//Creating a server
const server = express();
const session = require("express-session");
// const session = require("express-session");
const path = require("path");

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
    session({
      secret: "thesecret",
      resave: true,
      saveUninitialized: false
    })
  );


//Creating a connection to database 
mongoose.connect(
    "mongodb://localhost:27017/Don-db",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
      if (err) throw err;
      console.log("Successfully connected");
    }
  );

const homeroutes = require('./routes/homeRoutes');
server.use('/', homeroutes);

const adminroutes = require('./routes/adminregRoutes');
server.use('/addname',adminroutes);

const adminloginroutes = require('./routes/loginRoutes');
server.use('/login',adminloginroutes);

const saleroutes = require('./routes/saleregRoutes');
server.use('/register',saleroutes);

const saleloginroutes = require('./routes/saleloginRoutes');
server.use('/salelogin',saleloginroutes);

const customerroutes = require('./routes/customerRoutes');
server.use('/registercustomer',customerroutes);

// const customerlistroutes = require('./routes/customerlistRoutes');
// server.use('/customer',customerlistroutes);

server.use(express.static('public'))


server.listen(3007,()=>{
    console.log("Listening on port 3007");
});
