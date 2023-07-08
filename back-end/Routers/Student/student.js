const express = require("express");

const router = express.Router();

const studentLoginSchema = require("../../Schema/RegisterStudents/students");

router.post("/loginRegisteredStudents", (req,res,next)=>{
    const { myClass,institutionName,fullName,rollNumber,password } = req.body;
    studentLoginSchema.findOne({studentClass:myClass,fullName,rollNumber}).then(result=>{
        if(result)
        {
            if(result.password === password)
            {
                res.status(200).json({
                    message:"Login Successfully completed"
                });
            }
            else
            {
                res.status(400).json({
                    message:"Something Went Wrong"
                });
            }
        }
        else
        {
            res.status(400).json({
                message:"Something Went Wrong"
            });
        }
    });
});

module.exports = router;