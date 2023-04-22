const Faculty=require('../models/faculty.js')

const getFacultyDetails=async (req,res,next)=>{
   var data;
   try{
    data=await Faculty.find()
   }catch(err){
    next(err)
   }
   if(!data){
    return res.status(500).json({message:"Internal server error"})
   }
   return res.status(200).json({status:"Success",data})
}

const saveFacultyDetails=async (req,res,next)=>{
    const {name,email}=req.body;
    var data
    try{
     data=new Faculty({
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
    getFacultyDetails,
    saveFacultyDetails
}