const express = require("express");

const router = express.Router();

const uploadData = require("../../Schema/Signup/signup");

router.post("/updateSecureKey", (req,res,next)=>{

    randomNumber = Math.floor(100000 + Math.random() * 900000);

    const { role } = req.body;

    uploadData.findOne({role:role}).then(Board => {
        if(Board)
        {
            Board.secureKey = randomNumber;
            Board.save().then(result=>{
                res.status(200).json({
                    message:"Key Updated"
                })
            }).catch(err=>{
                console.log(err);
            });
        }
        else
        {
            res.status(400).json({
                message:"Board Member not found"
            })
        }
    })
});

module.exports = router;