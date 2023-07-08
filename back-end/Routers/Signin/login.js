const express = require("express");

const router = express.Router();

const uploadData = require("../../Schema/Signup/signup");

router.post("/login", (req,res,next)=>{
    
    const {role,email,password,secureKey} = req.body
    
    uploadData.findOne({email}).then(User => {
        if(User)
        {
            if(User.role === role)
            {
                if(User.password === password)
                {
                    if(role === "School")
                    {
                        if(!User.appliedInstitution)
                        {
                            return res.status(200).json({
                                message:"School Login Successful"
                            });
                        }
                        else
                        {
                            if(User.approved)
                            {
                                return res.status(204).json({
                                    message:"Logging In"
                                });
                            }
                            else
                            {
                                return res.status(203).json({
                                    message:"Wait For Approval"
                                });
                            }
                            
                        }
                    }
                    else if(role == "College")
                    {
                        return res.status(201).json({
                            message:"College Login Successful"
                        });
                    }
                    else if(role === "Board");
                    {
                        if(secureKey === User.secureKey)
                        {
                            return res.status(202).json({
                                message:"Secure Key Matched"
                            });
                        }
                        else
                        {
                            return res.status(402).json({
                                message:"Something Went Wrong"
                            });
                        }
                    }
                }
                else
                {
                    return res.status(401).json({
                        message:"Either Email or password is incorrect"
                    });
                }
            }
            else
            {
                return res.status(402).json({
                    message:"Something Went Wrong"
                });
            }
            
        }
        else
        {
            return res.status(403).json({
                message:"Either Email or password is incorrect"
            });
        }
    })
});

module.exports = router;