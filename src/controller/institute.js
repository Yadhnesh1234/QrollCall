const Institute= require('../models/institute')

const getInstitueDetails=async (req,res,next)=>{
    var data;
    try{
     data=await Institute.find()
    }catch(err){
     next(err)
    }
    if(!data){
     return res.status(500).json({message:"Internal server error"})
    }
    return res.status(200).json({status:"Success",data})
 }
 
 const saveInstituteDetails=async (req,res,next)=>{
     const {name,password}=req.body;
     var data
     try{
      data=new Institute({
         name,password
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
    getInstitueDetails,
    saveInstituteDetails
 }