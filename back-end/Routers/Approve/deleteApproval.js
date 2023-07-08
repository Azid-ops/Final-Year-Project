const express = require("express");

const router = express.Router();

const ApproveSchema = require("../../Schema/Approve/approve");

router.post("/deleteInstitutionRequest", (req,res,next)=>{
    const {myEmail} = req.body;
    ApproveSchema.findOneAndDelete({email:myEmail}).then(result=>{
        return res.status(200).json({
            message:"Deleted Successfully"
        });
    });
});

module.exports = router;