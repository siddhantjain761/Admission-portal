const jwt = require('jsonwebtoken')
const usermodal = require('../models/user')

const checkuserauth = async(req,res,next) => {
    //console.log('hello auth')
    const {token} = req.cookies
    console.log(token) //get token from cookie
    if(!token){
        req.flash('error','Unautherized user')
        res.redirect('/')
    }else{
        //verify token
        const verify = jwt.verify(token,'siddhant@9872135674')
        //console.log(verify)
        const user = await usermodal.findById(verify.ID)//ID used in frontcontroller to generate token
        //console.log(user)
        next() //re-render to the router where checkauth is used

    }

}

module.exports = checkuserauth