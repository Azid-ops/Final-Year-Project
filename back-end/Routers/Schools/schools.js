const express = require("express");

const router = express.Router();

const ApproveSchema = require("../../Schema/Approve/approve");

router.get("/getRegisteredSchools", (req, res, next) => {
    ApproveSchema.find({role:"School",approved:true}).then(response=>{
        return res.send(response);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = router;