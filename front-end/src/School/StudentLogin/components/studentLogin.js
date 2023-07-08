import React, {useState} from "react";
import StudentLoginPage from "../pages/studentLogin";
import { useLocation, useNavigate } from "react-router-dom";

const StudentLogin = () => {
    const { state } = useLocation();
    const Navigation = useNavigate();
    const userEmail = state.email;

    const [user,setUser] = useState({
        studentClass:"",
        fullName:"",
        rollNumber:"",
        password:""
    });

    let name,value;
    const changeHandler = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({...user, [name]:value});
    }

    const addStudent =async() => {

        const { studentClass, fullName, rollNumber, password} = user;
        await fetch("/registerStudents", {
            method:"POST",
            headers:{
                "CONTENT-TYPE":"application/json"
            },
            body:JSON.stringify({
                userEmail,studentClass,fullName,rollNumber,password
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
        <StudentLoginPage logout={logout} changeHandler={changeHandler} addStudent={addStudent} home={home} />
    )
}

export default StudentLogin;