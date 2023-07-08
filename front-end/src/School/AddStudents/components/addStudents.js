import React, { useState } from "react";
import AddStudentsPage from "../pages/addStudents";
import { useLocation, useNavigate } from "react-router-dom";

const AddStudents = () => {

    const { state } = useLocation();
    const Navigation = useNavigate();
    const userEmail = state.email;

    const [user,setUser] = useState({
        studentClass:"",
        fullName:"",
        rollNumber:"",
        dob:""
    });

    let name,value;
    const changeHandler = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({...user, [name]:value});
    }

    const addStudent =async() => {

        const { studentClass, fullName, rollNumber, dob} = user;
        await fetch("/addStudents", {
            method:"POST",
            headers:{
                "CONTENT-TYPE":"application/json"
            },
            body:JSON.stringify({
                userEmail,studentClass,fullName,rollNumber,dob
            })
        })
    }

    const home = () => {
        Navigation("/schoolHome", {
            state:{
                email:userEmail
            }
        })
    }

    const logout = () => {
        Navigation("/loginPage");
    }

    return(
        <AddStudentsPage logout={logout} changeHandler={changeHandler} addStudent={addStudent} home={home}/>
    )
}

export default AddStudents;