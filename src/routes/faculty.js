const express=require('express')
const {getFacultyDetails,saveFacultyDetails}=require('../controller/faculty')

const router=express.Router();

router.get("/getfacultydetails",getFacultyDetails)
router.post("/savefacultydetail",saveFacultyDetails)

module.exports=router