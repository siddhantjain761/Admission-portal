const jwt = require('jsonwebtoken')
const usermodal = require('../models/user')
const ValidateData = require('../utils/vaidation')

const checkuserauth = async (req, res, next) => {
    //console.log('hello auth')
    try {
        //const {refreshtoken} = req.cookies
        const accesstoken = req.cookies.accesstoken
        console.log(accesstoken) //get refreshtoken from cookie
        if (!accesstoken) {
            req.flash('error', 'Unautherized user')
            throw new Error("Invalid or Unautherized acceesstoken");
            //res.redirect('/')
        } else {
            //verify refreshtoken
            //const verify = jwt.verify(refreshtoken,'siddhant@9872135674')
            const verify = await ValidateData.verifyJWT(accesstoken);
            console.log("/////////////", verify)
            const user = await usermodal.findById(verify._id)//ID used in frontcontroller to generate refreshtoken
            console.log("//////////find",user);
            if (!user) {
                req.flash('error', 'User not found')
                throw new Error("User not found");
            }
            //console.log(user)
            next() //re-render to the router where checkauth is used
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}



module.exports = checkuserauth