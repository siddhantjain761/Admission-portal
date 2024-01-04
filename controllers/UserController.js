const UserModel = require('../models/user')


class UserController{
    //static methos is used so that methos can be called directly by class in
    //routes.js thus saves the memory,no need to create the instace os class  to call static method
    static home=(req,res)=>{
        res.render('home')  //rendering home
    }
    static about=(req,res)=>{
        res.render('about')
    }
    static team=(req,res)=>{
        res.send("hello team")
    }
    static contact=(req,res)=>{
        res.send("hello contact")
    }
}

module.exports=UserController