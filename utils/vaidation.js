
const vaidation = require("validator");
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
     

}





module.exports = ValidateData