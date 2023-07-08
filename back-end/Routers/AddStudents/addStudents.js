const express = require("express");

const router = express.Router();

const Approve = require("../../Schema/Approve/approve");
const AddStudents = require("../../Schema/Classes/9th/ninth");
const AddStudents10th = require("../../Schema/Classes/10th/tenth");
const AddStudents11th = require("../../Schema/Classes/11th/eleventh");
const AddStudents12th = require("../../Schema/Classes/12th/twelth");


router.post("/addStudents", (req,res,next)=>{
    const { userEmail,studentClass,fullName,rollNumber,dob } = req.body;

    if(studentClass === "9th")
    {
        Approve.findOne({email:userEmail}).then(result=>{
            const addStudent = new AddStudents({
                email:userEmail,
                institutionName:result.nameOfInstitute,
                studentClass:studentClass,
                fullName:fullName,
                rollNumber:rollNumber,
                dob:dob,
                boardRollNumber:""
            });
    
            AddStudents.findOne({fullName}).then(student =>{
                if(!student)
                {
                    addStudent.save().then(result=>{
                        return res.status(200).json({
                            message:"Saved Successfully"
                        });
                    }).catch(err=>{
                        console.log(err);
                    });
                }
                else
                {
                    return res.status(400).json({
                        message:"Student Already Exist"
                    });
                }
            })
        })
    }

    if(studentClass === "10th")
    {
        Approve.findOne({email:userEmail}).then(result=>{
            const addStudent10th = new AddStudents10th({
                email:userEmail,
                institutionName:result.nameOfInstitute,
                studentClass:studentClass,
                fullName:fullName,
                rollNumber:rollNumber,
                dob:dob,
                boardRollNumber:""
            });
    
            AddStudents10th.findOne({fullName}).then(student =>{
                if(!student)
                {
                    addStudent10th.save().then(result=>{
                        return res.status(200).json({
                            message:"Saved Successfully"
                        });
                    }).catch(err=>{
                        console.log(err);
                    });
                }
                else
                {
                    return res.status(400).json({
                        message:"Student Already Exist"
                    });
                }
            })
        })
    }
    
    if(studentClass === "11th")
    {
        Approve.findOne({email:userEmail}).then(result=>{
            const addStudent11th = new AddStudents11th({
                email:userEmail,
                institutionName:result.nameOfInstitute,
                studentClass:studentClass,
                fullName:fullName,
                rollNumber:rollNumber,
                dob:dob,
                boardRollNumber:""
            });
    
            AddStudents11th.findOne({fullName}).then(student =>{
                if(!student)
                {
                    addStudent11th.save().then(result=>{
                        return res.status(200).json({
                            message:"Saved Successfully"
                        });
                    }).catch(err=>{
                        console.log(err);
                    });
                }
                else
                {
                    return res.status(400).json({
                        message:"Student Already Exist"
                    });
                }
            })
        })
    }

    if(studentClass === "12th")
    {
        Approve.findOne({email:userEmail}).then(result=>{
            const addStudent12th = new AddStudents12th({
                email:userEmail,
                institutionName:result.nameOfInstitute,
                studentClass:studentClass,
                fullName:fullName,
                rollNumber:rollNumber,
                dob:dob,
                boardRollNumber:""
            });
    
            AddStudents12th.findOne({fullName}).then(student =>{
                if(!student)
                {
                    addStudent12th.save().then(result=>{
                        return res.status(200).json({
                            message:"Saved Successfully"
                        });
                    }).catch(err=>{
                        console.log(err);
                    });
                }
                else
                {
                    return res.status(400).json({
                        message:"Student Already Exist"
                    });
                }
            })
        })
    }
});

module.exports = router;