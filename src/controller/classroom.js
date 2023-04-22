const Classroom=require('../models/classroom')


const getClassroomDetails=async (req,res,next)=>{
     var data;
     try{
        data=await  Classroom.find()
     }catch(err){
          next(err)
     }
     if(!data){
        return res.status(500).json({msg:"internalserver error"})
     }
     return res.status(200).json({status:"Success",data})
}

const saveClassroomDetails=async(req,res,next)=>{
      var {name}=req.body
      var data=new Classroom({
        name
      })
      data=data.save()
      if(!data){
        return res.status(500).json({msg:"internalserver error"})
      }
      return res.status(200).json({status:"Data Saved Successfully"})
} 

module.exports={
 getClassroomDetails,
 saveClassroomDetails
}