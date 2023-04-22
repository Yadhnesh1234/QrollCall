const Student=require('../models/student')

const getStudDetails=async (req,res,next)=>{
   var data;
   try{
    data=await Student.find()
   }catch(err){
    next(err)
   }
   if(!data){
    return res.status(500).json({message:"Internal server error"})
   }
   return res.status(200).json({status:"Success",data})
}

const saveStudDetails=async (req,res,next)=>{
    const {name,email}=req.body;
    var data
    try{
     data=new Student({
        name,email
     })
     data=data.save();
    }catch(err){
     next(err)
    }
    if(!data){
     return res.status(500).json({message:"Internal server error"})
    }
    return res.status(200).json({status:"Data Saved Successfully"})
 }

module.exports={
    getStudDetails,
    saveStudDetails
}