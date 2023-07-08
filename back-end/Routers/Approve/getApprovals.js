const express = require("express");

const router = express.Router();

const ApproveSchema = require("../../Schema/Approve/approve");

router.get("/getApprovals", (req,res,next)=>{
    ApproveSchema.find({approved:false}).then(response=>{
        return res.send(response);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = router;