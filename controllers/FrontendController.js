const UserModel = require("../models/user")
const bcrypt = require('bcrypt'); //to make the password encrypted , install "npm i bcrypt"
const jwt = require('jsonwebtoken');

class FrontendController {
    static login = async (req, res) => {
        try {
            res.render('login',{message:req.flash('success'),error:req.flash('error')})
        }
        catch (error) {
            console.log(error)
        }
    }
    static register = async (req, res) => {
        try {
            res.render('register',{message:req.flash('error')})
        }
        catch (error) {
            console.log(error)
        }
    }
    static dashboard = async (req, res) => {
        try {
            res.render('dashboard')
        }
        catch (error) {
            console.log(error)
        }
    }
    static userinsert = async(req,res) => {
        
            console.log("body ::" ,req.body) 
            const {name,email,password,cpassword} = req.body
            //1st email is from the modalschema and the other email that is there in regester from 
            const user = await UserModel.findOne({email:email})    //validation that no duplicate email is presented
            console.log(user)  
            if(user){
                req.flash('error','Email already exist')
                //res.redirect('/register')
               res.status(200).send("Email already exist");
            }else{
                if(name && email && password && cpassword){ //valdation hat all fild are required
                    
                    if(password == cpassword){ //
                        try{
                            const hashpassword = await bcrypt.hash(password,10)
                        const result = new UserModel({
                                 name:name,
                                 email:email,
                                 password:hashpassword
                         })
                         await result.save();
                          res.status(200).send("Regestartion Successfull");
                          req.flash('success','Registration Successfull , Pleae login here')
                         // res.redirect('/')
                        }
                        catch(error){
                            res.status(500).json({erroe : error.message});
                            console.log(error)
                        }
                       
                    }else{
                        req.flash('error','Password and confirm password must be same')
                        //res.redirect('/register')
                        res.status(500).json({error : "Password and confirm password must be same"});
                    }    

                }else{
                    req.flash('error','All fields are required')
                    //res.redirect('/register')
                    
                    res.status(500).json({error : "All fields are required"});
                }  
            }
            
            // const result = new UserModel({
            //     name:req.body.name,
            //     email:req.body.email,
            //     password:req.body.password
            // })
            // await result.save()
            // req.flash('success','Registration Successfull , Pleae login here')
            // res.redirect('/')
         
    }
    static verify_login = async (req,res) => {
        try{
            //console.log(req.body)
            const {email,password} = req.body
            if(email,password){
                const user = await UserModel.findOne({email:email})
                //console.log(user)
                if(user!=null){
                    const ismatch = await bcrypt.compare(password,user.password)
                    if(ismatch){
                        //generating token
                        //generating token through ID and 2nd part is secrete key:can be any anomous string
                        const token = jwt.sign({ ID: user._id} , 'siddhant@9872135674')
                        console.log(token)
                        //check token on : https://jwt.io/
                        res.cookie('token',token)
                       // res.status(200).send(user);
                        res.redirect('/course/display')
                         
                    }else{
                        req.flash('error','Incorrect password')
                    res.redirect('/') 

                    }

                }else{
                    req.flash('error','Not a regestired user')
                    res.redirect('/') 

                }

            }else{
                req.flash('error','Incorrect credientials')
                res.redirect('/')
            }

        }catch(error){
            console.log(error)

        }
    }
    static logout = async (req, res) => {
        try {
            res.clearCookie('token') //clearing token
            res.redirect('/')
        }
        catch (error) {
            console.log(error)
        }
    }

    
}



module.exports=FrontendController