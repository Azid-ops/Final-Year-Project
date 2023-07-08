const express = require("express");

const router = express.Router();

const Ninth = require("../../Schema/Classes/9th/ninth");
const Tenth = require("../../Schema/Classes/10th/tenth");
const Eleventh = require("../../Schema/Classes/11th/eleventh");
const Tweleth = require("../../Schema/Classes/12th/twelth");

router.get("/ninthClassStudents", (req,res,next)=>{
    const email = req.query.email;
    const institute = req.query.institute;
    const className = req.query.className;
    
    if(className === "9th")
    {
        Ninth.find({institutionName:institute}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
    else if(className === "10th")
    {
        Tenth.find({institutionName:institute}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
    else if(className === "11th")
    {
        Eleventh.find({institutionName:institute}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
    else{
        Tweleth.find({institutionName:institute}).then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
});

module.exports = router;