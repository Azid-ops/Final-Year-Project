import React, { useEffect, useState } from "react";
import AddResultPage from "../pages/addResult";
import { useLocation, useNavigate } from "react-router-dom";
import TenthClassPage from "../pages/tenthClass";

const TenthClass = () => {

    const { state } = useLocation();

    const Navigation = useNavigate();

    const [approvals,setApprovals] = useState([]);

    const [User,setUser] = useState({
        physics:"",
        chemistry: "",
        computer : "",
        urdu :" ",
        english: "",
        pakistanStudies : "",
        islamiat:""
    });

    const changeHandler = (e) => {
        e.preventDefault();
        setUser({...User,[e.target.name]:e.target.value});
    }

    const getStudentData =async() => {
        const studentsFrispy = await fetch("/getStudentData?" + new URLSearchParams({
            myClass:"10th"
        }),{
            method:"GET",
            headers:{
                'Accept':'application/json',
                'Content-Type':"application/json"
            }
        });
        const data = await studentsFrispy.json();
        setApprovals(data);
    }

    useEffect(() => {
        getStudentData();
    });

    const uploadMarks =async (fullName,institutionName,rollNumber) => {
        const { physics,chemistry,computer,urdu,english,pakistanStudies,islamiat } = User;
        await fetch("/uploadResult", {
            method:"POST",
            headers:{
                "CONTENT-TYPE":"application/json"
            },
            body:JSON.stringify({
                physics,chemistry,computer,urdu,english,pakistanStudies,islamiat,fullName,institutionName,rollNumber,myClass:"10th"
            })
        });
    }

    const tenthClassNavigation = () => {
        Navigation("/addResult10thClass")
    }

    const ninthClassNavigation = () => {
        Navigation("/addResult")
    }

    const eleventhClassNavigation = () => {
        Navigation("/addResult11thClass")
    }

    const twelethClassNavigation = () => {
        Navigation("/addResult12thClass")
    }


    return(
        <TenthClassPage 
            changeHandler={changeHandler} 
            approvals={approvals} 
            uploadMarks={uploadMarks}
            tenthClassNavigation={tenthClassNavigation} 
            ninthClassNavigation={ninthClassNavigation}
            eleventhClassNavigation={eleventhClassNavigation}
            twelethClassNavigation={twelethClassNavigation}
        />
    )
}

export default TenthClass;