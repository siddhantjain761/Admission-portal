
const vaidation = require("validator");
const jwt = require('jsonwebtoken')
class ValidateData {
    static  ValidateSingUpdata = async (req) => {

        const {email , password} = req.body ;
        if(!email){
            throw new Error("enter a email");      
        }else if(!password){
            throw new Error("enter a password");
        }else if(!vaidation.isEmail(email)){
            throw new Error("Enter a valid email")
        }
    }

    static verifyJWT = async(token)=> {
        try{
            const decodedMessage = jwt.verify(token,process.env.secretJWT)
            return decodedMessage; 
        }catch(err){
            throw new Error('Invalid or expired JWT token');
        }
    }    
}

module.exports = ValidateData