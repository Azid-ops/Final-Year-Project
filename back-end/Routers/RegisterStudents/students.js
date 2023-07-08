const express = require("express");

const router = express.Router();

const RegisterSchema = require("../../Schema/RegisterStudents/students");

router.post("/registerStudents", (req,res,next) => {
    const { studentClass, fullName, rollNumber, password} = req.body;
    
    const registerCurrentStudent = new RegisterSchema({
        studentClass, fullName, rollNumber, password
    });

    RegisterSchema.findOne({studentClass:studentClass,fullName:fullName,rollNumber:rollNumber}).then(student =>{
        if(!student)
        {
            registerCurrentStudent.save().then(result=>{
                res.status(200).json({
                    message:"Student Registered Successfully"
                })
            }).catch(err=>{
                console.log(err);
            });
        }
        else
        {
            res.status(400).json({
                message:"Student Registration Failed"
            })
        }
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = router;