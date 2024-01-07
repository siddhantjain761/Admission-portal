const mongoose = require('mongoose')
//const url = "mongodb://127.0.0.1:27017/admissionportal"

const connectdb = ()=> {
    return mongoose.connect(process.env.LOCAL_URL)  //getting url from .enc file
    .then(()=>{
        console.log('connection successfully')
    }).catch((error)=>{
        console.log(error)
    })
    
}
module.exports=connectdb
