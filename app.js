const express = require('express') 
//console.log(express)
const  app= express()
var cors = require('cors')
var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}


const dotenv = require('dotenv')
dotenv.config({path:'./.env'})   //for image 
const route = require('./routes/routes')  //router load
const connectdb=require('./db/dbcon')
var session = require('express-session')
var flash = require('connect-flash')


//server creat
app.listen(process.env.PORT,()=>{
    console.log( ` server is running: ${process.env.PORT}`)
})


app.use(cors(corsOptions));


//to show the messages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000},
    resave:false,
    saveUninitialized: false,
}));
app.use(flash());


//Cookie :: to get the token

const cookieParser = require('cookie-parser')
app.use(cookieParser())



//datatarget
app.use(express.urlencoded({ extended:true}))

 
//connection to database
connectdb()

//routing load
// server 1t comes to app.js=>routes.js=>usercontroller=>views=>render data from specific page
app.use('/',route)

 


 
 
 

 
 

//ejs set , css engine is ejs 
app.set('view engine','ejs')

//static files
app.use(express.static('public'))



 