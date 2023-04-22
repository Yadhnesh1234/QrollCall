const express=require('express')
const {getInstitueDetails,saveInstituteDetails}=require('../controller/institute')
const router=express.Router();

router.get("/getinstitutedetails",getInstitueDetails)
router.post("/saveinstitutedetails",saveInstituteDetails)

module.exports=router