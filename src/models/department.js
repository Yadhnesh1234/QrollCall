const mongoose= require('mongoose')
const Schema=mongoose.Schema

const department=new Schema({
    name:{
       type:String,
       required:true,
       unique:true
    },
    classroom:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Department",department)
