import React, {useState,useEffect} from "react";
import { useNavigate  } from "react-router-dom";
import SchoolsPage from "../pages/schools";


const Schools = () => {
    const [approvals,setApprovals] = useState([]);
    const Navigation = useNavigate();

    const fetchPendingApprovals =async()=> {
        const approvalsFrispy = await fetch('/getRegisteredSchools' , {
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

    useEffect(() => {
        fetchPendingApprovals();
    });

    const triggerDetailsFunc = (email,institute) => {
        Navigation("/schoolStudentDetails", {
            state:{
                email,
                institute
            }
        })
    }

    return(
        <SchoolsPage approvals={approvals} triggerDetailsFunc={triggerDetailsFunc}/>
    )
}

export default Schools;