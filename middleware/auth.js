const jwt = require('jsonwebtoken')
const usermodal = require('../models/user')

const checkuserauth = async(req,res,next) => {
    //console.log('hello auth')
    try{
        const {token} = req.cookies
    console.log(token) //get token from cookie
    if(!token){
        req.flash('error','Unautherized user')
        throw new Error("Invalid Token");
        //res.redirect('/')
    }else{
        //verify token
        const verify = jwt.verify(token,'siddhant@9872135674')
        //console.log(verify)
        const user = await usermodal.findById(verify.ID)//ID used in frontcontroller to generate token
        //console.log(user)
        next() //re-render to the router where checkauth is used

    }
    }catch(err)      {
        res.status(500).json({ error: err.message });
    }
     
}

module.exports = checkuserauth