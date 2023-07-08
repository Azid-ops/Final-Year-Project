import React, { useState } from "react";
import LoginPage from "../pages/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [hidePassword,setHidePassword] = useState(true);

    const Navigation = useNavigate();

    const [User,setUser] = useState({
        myClass:"",
        institutionName:"",
        fullName:"",
        rollNumber:"",
        password:""
    });

    const changeHandler = (e) => {
        e.preventDefault();
        setUser({...User, [e.target.name]:e.target.value});
    }
    const showPassword = () => {
        let password = hidePassword;
        setHidePassword(!password);
    }

    const triggerLogin =async () => {
        const { myClass,institutionName,fullName,rollNumber,password } = User;
        const loginFrispy = await fetch("/loginRegisteredStudents", {
            method : 'POST',
            headers : {  
                'Content-Type': 'application/json'
            },
            body : JSON.stringify ({
                myClass,institutionName,fullName,rollNumber,password
            })
        });

        if(loginFrispy.status === 200)
        {
            Navigation("/studentLoginCurrent", {
                state:{
                    class:User.myClass,
                    institutionName:User.institutionName,
                    fullName:User.fullName,
                    rollNumber:User.rollNumber
                }
            })
        }
    }

    return(
        <LoginPage 
            hidePassword={hidePassword} 
            showPassword={showPassword}
            triggerLogin={triggerLogin}
            changeHandler={changeHandler}
        />
    )
}

export default Login;