const express = require('express') 
//console.log(express)
const app= express()
const port = 3000

var session = require('express-session')
var flash = require('connect-flash')


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

//router load
const route = require('./routes/routes')

const connectdb=require('./db/dbcon')
//connection to database
connectdb()


//routing load
// server 1t comes to app.js=>routes.js=>usercontroller=>views=>render data from specific page
app.use('/',route) 

//ejs set , css engine is ejs 
app.set('view engine','ejs')

//static files
app.use(express.static('public'))



//server creat
app.listen(port,()=>{
    console.log( ` server is running: ${port}`)
})