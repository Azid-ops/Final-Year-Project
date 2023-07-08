const express = require("express");

const router = express.Router();

const uploadData = require("../../Schema/Signup/signup");

router.post("/uploadData", (req,res,next)=>{

    const {role,fullName,email,password} = req.body;
    console.log("hello")

    const upload = new uploadData({
        role,
        fullName,
        email,
        password,
        secureKey:"",
        appliedInstitution:false,
        approved:false
    });

    uploadData.findOne({email}).then(User=>{
        if(!User)
        {
            console.log("User does not exist")
            if(email.includes("@gmail.com"))
            {
                if(password.length >= 5)
                {
                    upload.save().then(result=>{
                        return res.status(200).json({
                            message:"User Registered Successfully"
                        });
                    }).catch(err=>{
                        console.log(err);
                    });                
                }
                else
                {
                    return res.status(401).json({
                        message:"Password Length is Short"
                    });
                }
            }
            else
            {
                return res.status(402).json({
                    message:"This is not a Valid Email"
                })
            }
            
        }
        else
        {
            return res.status(400).json({
                message:"User Already Exist"
            });
        }
    }).catch(err=>{
        console.log(err);
    })
    
});

module.exports = router;