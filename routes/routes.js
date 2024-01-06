const express = require('express')
const UserController = require('../controllers/UserController')
const FrontendController = require('../controllers/FrontendController')
const CourseController = require('../controllers/CourseController')
const route = express.Router()
const checkuserauth = require('../middleware/auth')

//routing
// route.get('/',UserController.home)//by defalut for 3000 port
// route.get('/about',UserController.about)
// route.get('/team',UserController.team)
// route.get('/contact',UserController.contact)

//Frontend controller routing
route.get('/',FrontendController.login)
route.get('/register',FrontendController.register)
route.get('/dashboard',FrontendController.dashboard)
route.post('/userinsert',FrontendController.userinsert)    
route.post('/verify_login',FrontendController.verify_login)

//logout
route.get('/logout',FrontendController.logout)
//course controller routing
route.post('/courseinsert',checkuserauth,CourseController.courseInsert)
route.get('/course/display',checkuserauth,CourseController.courseDisplay)
route.get('/courseview/:id',checkuserauth,CourseController.courseView)
route.get('/courseedit/:id',checkuserauth,CourseController.courseEdit)
route.post('/courseupdate/:id',checkuserauth,CourseController.courseUpdate)
route.get('/coursedelete/:id',checkuserauth,CourseController.courseDelete)


module.exports = route  //so that we can require this file in app.js