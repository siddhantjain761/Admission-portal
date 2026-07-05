const mongoose = require('mongoose');
const validator = require("validator");
const jwt = require('jsonwebtoken');

//create schema

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    Required: true,
    trim: true,
    maxLength: [15, "max of 15 character are allowed"]
  },
  email: {
    type: String,
    Required: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Invalid email address",
    }
  },
  password: {
    type: String,
    Required: true
  },
}, { timestamps: true });

UserSchema.methods.refreshGetJWT = function () {
  const refreshtoken = jwt.sign({ _id: this._id, name: this.name }, process.env.secretJWT, {
    expiresIn: "3d",
  });
  return refreshtoken;
};

UserSchema.methods.accessGetJWT = function () {
  const accesstoken = jwt.sign({ _id: this._id, name: this.name }, process.env.secretJWT, {
    expiresIn: "1m",  //1h or 30s can set the limit as you want
  });
  return accesstoken;
};

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel
