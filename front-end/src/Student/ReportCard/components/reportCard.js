import React, { useEffect, useState } from "react";
import ReportCardPage from "../pages/reportCard";
import { useLocation } from "react-router-dom";

const ReportCard = () => {

    const {state} = useLocation();

    const [approve,setApprove] = useState([]);


    const [User,setUser]= useState({
        myClass:state.myClass,
        fullName:state.fullName,
        rollNumber:state.rollNumber,
        institutionName:state.institutionName
    });

    const getResult =async () => {
        const resultFrispy = await fetch("/getCurrentStudentResult?" + new URLSearchParams({
            myClass:User.myClass,
            fullName:User.fullName,
            rollNumber:User.rollNumber,
            institutionName: User.institutionName
        }), {
            method:"GET",
            headers:{
                'Content-Type':"application/json",
                Accept:'application/json'
            }
        })

        if(resultFrispy.ok)
        {
            const data = await resultFrispy.json();
            setApprove(data);
        }
        
    }

    useEffect(()=>{
        getResult();
    });

    return (
        <ReportCardPage state={state} approve={approve}/>
    );
}

export default ReportCard;