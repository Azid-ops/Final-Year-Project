const express = require("express");

const router = express.Router();

const Ninth = require("../../Schema/Classes/9th/ninth");
const Tenth = require("../../Schema/Classes/10th/tenth");
const Eleventh = require("../../Schema/Classes/11th/eleventh");
const Tweleth = require("../../Schema/Classes/12th/twelth");

router.get("/getStudentData", (req,res,next)=>{
    const myClass = req.query.myClass;
    if(myClass === "9th")
    {
        Ninth.find().then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
    else if(myClass === "10th")
    {
        Tenth.find().then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
    else if(myClass === "11th")
    {
        Eleventh.find().then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
    else
    {
        Tweleth.find().then(result=>{
            res.send(result);
        }).catch(err=>{
            console.log(err);
        });
    }
});

module.exports = router;