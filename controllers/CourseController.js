const CourseModel = require("../models/course")

class CourseController{
    static courseInsert = async(req,res)=>{
        try{
            //console.log(req.body)
            const result = new CourseModel({
                name:req.body.name,
                email:req.body.email,
                number:req.body.number,
                address:req.body.address,
                gender:req.body.gender,
                college:req.body.college,
                qualification:req.body.qualification,
                course:req.body.course,
                semester:req.body.semester
                 
            })
            await result.save()
            res.redirect('/')
        }catch(error){
            console.log(error)
        }
    }; 
    static courseDisplay = async(req,res)=>{
        try{
            const data = await  CourseModel.find()
            //console.log(data)
            //res.send(data)  to send data via api
            res.render('course/display',{d:data,message:req.flash('success'),})  //sending data to course/display file
        }catch(error){
            console.log(error)
        }
    };
    static courseView = async(req,res)=>{
        try{
            const data = await  CourseModel.findById(req.params.id)
            console.log(data)  //to get id use params
            res.render('course/view',{d:data})//sending data to course/display file
        }catch(error){
            console.log(error)
        }
    };
    static courseEdit = async(req,res)=>{
        try{
            const data = await  CourseModel.findById(req.params.id)
            //console.log(data)  //to get id use params
            res.render('course/edit',{d:data})//sending data to course/display file
        }catch(error){
            console.log(error)
        }
    };
    static courseUpdate = async(req,res)=>{
        try{
            console.log(req.body)
            //console.log("hello")
            //console.log(req.params.id)
             
            const result = await CourseModel.findByIdAndUpdate(req.params.id,{
                name:req.body.name,
                email:req.body.email,
                number:req.body.number,
                address:req.body.address,
                gender:req.body.gender,
                college:req.body.college,
                qualification:req.body.qualification,
                course:req.body.course,
                semester:req.body.semester
                 
            })
            req.flash('success','Details Updated Successfull')
            res.redirect('/course/display')
        }catch(error){
            console.log(error)
        }
    }; 
    static courseDelete = async(req,res)=>{
        try{
            console.log("hello")
            //console.log(req.params.id)
            const result = await CourseModel.findByIdAndDelete(req.params.id)
            req.flash('success','Record Deleted Successfully')
            res.redirect('/course/display')
        }catch(error){
            console.log(error)
        }
    }; 


}
module.exports = CourseController