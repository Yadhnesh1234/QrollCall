const mongoose= require('mongoose')

const Schema= mongoose.Schema

const student=new Schema({
    name:{
        type:String,
        required:true,
     },
     email:{
         type:String,
         required:true,
         unique:true
     }
})

module.exports=mongoose.model('Student',student)