const mongoose=require('mongoose')

const Schema=mongoose.Schema

const classroom=new Schema({
    name:{
        type:String,
        required:true
    }

})

module.exports= mongoose.model("Classroom",classroom)