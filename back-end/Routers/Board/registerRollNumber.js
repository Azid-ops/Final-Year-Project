const express = require("express");

const router = express.Router();

const Ninth = require("../../Schema/Classes/9th/ninth");
const Tenth = require("../../Schema/Classes/10th/tenth");
const Eleventh = require("../../Schema/Classes/11th/eleventh");
const Tweleth = require("../../Schema/Classes/12th/twelth");

router.post("/registerBoardRollNumber", (req,res,next) => {
    const { myClass,institutionName,fullName,rollNum,boardRollNum } = req.body;

    if(myClass === "9th")
    {
        Ninth.findOne({
            institutionName:institutionName,
            fullName:fullName,
            rollNumber:rollNum
        }).then(result=>{
            result.boardRollNumber = boardRollNum;
            result.save().then(result=>{
                return res.status(200).json({
                    message:"Roll Number Assigned"
                });
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    else if(myClass === "10th")
    {
        Tenth.findOne({
            institutionName:institutionName,
            fullName:fullName,
            rollNumber:rollNum
        }).then(result=>{
            result.boardRollNumber = boardRollNum;
            result.save().then(result=>{
                return res.status(200).json({
                    message:"Roll Number Assigned"
                });
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    else if(myClass === "11th")
    {
        Eleventh.findOne({
            institutionName:institutionName,
            fullName:fullName,
            rollNumber:rollNum
        }).then(result=>{
            result.boardRollNumber = boardRollNum;
            result.save().then(result=>{
                console.log(result);
                return res.status(200).json({
                    message:"Roll Number Assigned"
                });
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    else
    {
        Tweleth.findOne({
            institutionName:institutionName,
            fullName:fullName,
            rollNumber:rollNum
        }).then(result=>{
            result.boardRollNumber = boardRollNum;
            result.save().then(result=>{
                console.log(result);
                return res.status(200).json({
                    message:"Roll Number Assigned"
                });
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err);
        });
    }
    
});

module.exports = router;