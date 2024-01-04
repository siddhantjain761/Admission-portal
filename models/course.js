const mongoose = require('mongoose')

//create schema

const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true
    },
    number:{
        type:String,
        Required:true
    },
    address:{
        type:String,
        Required:true
    },
    gender:{
        type:String,
        Required:true
    },
    college:{
        type:String,
        Required:true
    },
    semester:{
        type:String,
        Required:true
    },
    qualification:{
        type:String,
        Required:true
    },
    course:{
        type:String,
        Required:true
    },
},{timestamps:true})

const CourseModel = mongoose.model('course',CourseSchema)

module.exports=CourseModel