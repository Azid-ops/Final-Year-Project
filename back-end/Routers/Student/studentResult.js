const express = require("express");

const router = express.Router();

const studentResultSchema = require("../../Schema/Result/tenthClass");
const NinthSchema = require("../../Schema/Result/result");
const EleventhSchema = require("../../Schema/Result/eleventh");
const TwelethSchema = require("../../Schema/Result/tweleth");

router.get("/getCurrentStudentResult", (req,res,next)=>{
    
    const myClass = req.query.myClass;
    const rollNo = req.query.rollNumber;
    const fullName = req.query.fullName;
    const institutionName = req.query.institutionName;

    if(myClass === "10th")
    {
        console.log(myClass,rollNo,fullName,institutionName)
        studentResultSchema.findOne({fullName:fullName,institutionName:institutionName}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }

    if(myClass === "9th")
    {
        NinthSchema.findOne({fullName:fullName,institutionName:institutionName}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }

    if(myClass === "11th")
    {
        EleventhSchema.findOne({fullName:fullName,institutionName:institutionName}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }

    if(myClass === "12th")
    {
        TwelethSchema.findOne({fullName:fullName,institutionName:institutionName}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
});

module.exports = router;