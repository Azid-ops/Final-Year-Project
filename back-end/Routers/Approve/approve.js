const express = require("express");

const router = express.Router();

const ApproveSchema = require("../../Schema/Approve/approve");
const signUp = require('../../Schema/Signup/signup');

router.post("/approveInstitute", (req,res,next)=>{
    const {
        typeOfInstitute,role,email,nameOfInstitute, mailingAddress, contactNumber, emailId, typeOfManagment, functioningInOwnBuilding,
        purposeToFunctionInOwnBuiling, ownLand, noOfClassRooms, examHallCapacity, noOfLabs, studentCanteenProvided,
        principalOffice, facultyRoom, officeRoom, reception, hockeyPlayground, cricketPlayground, footballPlayground,
        sharingPlayground,startDate,inspectionDate,arr,cnicArrr,courses
    } = req.body;

    const Approve = new ApproveSchema({
        typeOfInstitute,role,email,nameOfInstitute, mailingAddress, contactNumber, emailId, typeOfManagment, functioningInOwnBuilding,
        purposeToFunctionInOwnBuiling, ownLand, noOfClassRooms, examHallCapacity, noOfLabs, studentCanteenProvided,
        principalOffice, facultyRoom, officeRoom, reception, hockeyPlayground, cricketPlayground, footballPlayground,
        sharingPlayground,startDate,inspectionDate,nameOfOwners:arr,cnicOfOwners:cnicArrr,courses,approved:false
    })

    signUp.findOne({email}).then(User=>{
        Approve.save().then(result=>{
            User.appliedInstitution = true;
            User.save().then(done => {
                return res.status(200).json({
                    message:"Request Submitted Successfully, wait for Approval"
                });
            })    
        }).catch(err=>{
            console.log(err);
        });
    })
    

});

module.exports = router;