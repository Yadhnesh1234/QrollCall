const express=require('express')
const { 
    getClassroomDetails,
    saveClassroomDetails
}=require('../controller/classroom')

const router=express.Router();

router.get("/getclassroomdetails",getClassroomDetails)
router.post("/saveclassroomdetails",saveClassroomDetails)

module.exports=router