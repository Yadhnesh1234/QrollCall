const mongoose= require('mongoose')
const schema=mongoose.Schema;


const faculty=new schema(
    {
        name:{
           type:String,
           required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports=mongoose.model("Faculty",faculty)