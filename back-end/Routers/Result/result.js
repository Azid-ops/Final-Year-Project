const express = require("express");

const router = express.Router();

const Result = require("../../Schema/Result/result");
const TenthClassResult = require("../../Schema/Result/tenthClass");
const EleventhClassResult = require("../../Schema/Result/eleventh");
const TwelethClassResult = require("../../Schema/Result/tweleth");


router.post("/uploadResult", (req,res,next)=>{
    const { physics,chemistry,computer,urdu,english,pakistanStudies,islamiat,fullName,institutionName,rollNumber,myClass } =req.body;
    

    if(myClass === "9th")
    {
        const studentResult = new Result({
            physics,chemistry,computer,urdu,english,pakistanStudies,islamiat,fullName,institutionName,rollNumber
        });

        studentResult.save().then(result=>{
            res.status(200).json({
                message:"Result Added Successfully"
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    else if(myClass === "10th")
    {
        const StudentTenthClassResult = new TenthClassResult({
            physics,chemistry,computer,urdu,english,pakistanStudies,islamiat,fullName,institutionName,rollNumber
        });

        StudentTenthClassResult.save().then(result=>{
            res.status(200).json({
                message:"Result Added Successfully"
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    else if(myClass === "11th")
    {
        const StudentEleventhClassResult = new EleventhClassResult({
            physics,chemistry,computer,urdu,english,pakistanStudies,islamiat,fullName,institutionName,rollNumber
        });

        StudentEleventhClassResult.save().then(result=>{
            res.status(200).json({
                message:"Result Added Successfully"
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    else
    {
        const StudentTwelethClassResult = new TwelethClassResult({
            physics,chemistry,computer,urdu,english,pakistanStudies,islamiat,fullName,institutionName,rollNumber
        });

        StudentTwelethClassResult.save().then(result=>{
            res.status(200).json({
                message:"Result Added Successfully"
            });
        }).catch(err=>{
            console.log(err);
        });
    }
    
});

module.exports = router;