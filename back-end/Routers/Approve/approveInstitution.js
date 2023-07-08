const express = require("express");

const router = express.Router();

const ApproveSchema = require("../../Schema/Approve/approve");
const signUp = require('../../Schema/Signup/signup');

router.post("/approveInstitutionRequest", (req,res,next)=>{
    const {myEmail} = req.body;
    signUp.findOne({email:myEmail}).then(result=>{
        result.approved = true;
        result.save().then(result=>{
            ApproveSchema.findOne({email:myEmail}).then(results=>{
                results.approved = true;
                results.save().then(resuli =>{
                    return res.status(200).json({
                        message:"Successfully Approved"
                    });
                })
            });
        }).catch(err=>{
            console.log(err);
        });
    });
});

module.exports = router;