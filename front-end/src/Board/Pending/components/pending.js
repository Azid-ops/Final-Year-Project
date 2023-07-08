import React, { useEffect, useState } from "react";
import PendingPage from "../pages/pending";
import { useLocation, useNavigate } from "react-router-dom";

const Pending = () => {

    const [approvals,setApprovals] = useState([]);
    const Navigation = useNavigate();
    const State = useLocation();

    const fetchPendingApprovals =async()=> {
        const approvalsFrispy = await fetch('/getApprovals' , {
            method:"GET",
            headers:{
                'Content-Type':"application/json"
            }
        });
        if (approvalsFrispy.ok) {

            const data = await approvalsFrispy.json();
            setApprovals(data);
        }
    }

    const triggerDetailsFunc = (
            _id,
            email,
            nameOfInstitute,
            mailingAddress,
            contactNumber,
            emailId,
            typeOfManagment,
            functioningInOwnBuilding,
            purposeToFunctionInOwnBuiling,
            ownLand,
            noOfClassRooms,
            examHallCapacity,
            noOfLabs,
            studentCanteenProvided,
            principalOffice,
            facultyRoom,
            officeRoom,
            reception,
            hockeyPlayground,
            cricketPlayground,
            footballPlayground,
            sharingPlayground,
            startDate,
            inspectionDate,
            nameOfOwners,
            cnicOfOwners,
            courses
        ) => {
            Navigation("/pendingApprovals/institutionDetails", {
                state:{
                    email: State.state.email,
                    institution:{
                        _id,
                        email,
                        nameOfInstitute,
                        mailingAddress,
                        contactNumber,
                        emailId,
                        typeOfManagment,
                        functioningInOwnBuilding,
                        purposeToFunctionInOwnBuiling,
                        ownLand,
                        noOfClassRooms,
                        examHallCapacity,
                        noOfLabs,
                        studentCanteenProvided,
                        principalOffice,
                        facultyRoom,
                        officeRoom,
                        reception,
                        hockeyPlayground,
                        cricketPlayground,
                        footballPlayground,
                        sharingPlayground,
                        startDate,
                        inspectionDate,
                        nameOfOwners,
                        cnicOfOwners,
                        courses
                    }
                }
            })
    }

    const triggerSchool = () => {
        Navigation("/schools",{
            state:{
                email:State.state.email
            }
        })
    }

    useEffect(() => {
        fetchPendingApprovals();
    });

    return(
        <PendingPage 
            approvals={approvals} 
            triggerDetailsFunc={triggerDetailsFunc}
            triggerSchool={triggerSchool}
        />   
    )
}

export default Pending;