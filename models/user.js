const mongoose = require('mongoose');
const validator = require("validator");

//create schema

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true,
        trim: true ,
        maxLength : [15 , "max of 15 character are allowed"]       
    },
    email:{
        type:String,
        Required:true,
        validate: {
            validator: function(value) {
              return validator.isEmail(value);
              },
            message: "Invalid email address",
            }
    },
    password:{
        type:String,
        Required:true
    },
},{timestamps:true})

const UserModel = mongoose.model('user',UserSchema)

module.exports=UserModel