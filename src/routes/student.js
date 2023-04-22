const express=require('express')
const{
    getStudDetails,
    saveStudDetails
}=require('../controller/student')
const router=express.Router();

router.get("/getstuddetails", getStudDetails)
router.post("/savestuddetails",saveStudDetails)

module.exports=router