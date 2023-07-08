//Importing Packages
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Importing Files
import Signup from '../pages/signup';

//Signup Component
const SignUpComponent = () => {

    const [hidePassword,setHidePassword] = useState(true);
    const [hideRetypePassword,sethideRetypePassword] = useState(true);
    const [selectInstitute,setSelectedInstitute] = useState("");
    const [active,setActive] = useState(false);
    const [collegeActive,setCollegeActive] = useState(false);
    const [boardActive,setBoardActive] = useState(false);
    const [agree,setAgree] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [passwordMessage,setPasswordMessage] = useState("");
    const [select,setSelect] = useState(false);
    const [blockedSignup,setBlockedSignup] = useState("");
    const [backendError,setBackendError] = useState("");
    const [backendErrorCount,setBackendErrorCount] = useState(false);
    const [passwordLengthCount,setPasswordLengthCount] = useState(false);
    const [validEmail,setValidEmail] = useState(false);
    const [User,setUser] = useState({
        role:"",
        fullName:"",
        email:"",
        password:"",
        reType:""
    });

    
    const Navigation = new useNavigate();


    let name,value;
    const changeHandler = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUser({...User, [name]:value,role:selectInstitute});
    }
    const showPassword = () => {
        let password = hidePassword;
        setHidePassword(!password);
    }

    const selectRole = (institute,e) => {
        let newInstitute = institute;
        setSelectedInstitute(newInstitute);
        setSelect(true);
        if(institute === "School")
        {
            setCollegeActive(false);
            setBoardActive(false);
            setActive(!active);
        }
        if(institute === "College")
        {
            setActive(false);
            setBoardActive(false);
            setCollegeActive(!collegeActive);
        }
        if(institute === "Board")
        {
            setActive(false);
            setCollegeActive(false);
            setBoardActive(!boardActive);
        }
    }

    const showRetypePassword = () => {
        let reTypePassword = hideRetypePassword;
        sethideRetypePassword(!reTypePassword);
    }

    const signIn = () => {
        Navigation("/loginPage");
    }

    const signUp =async () => {
        if(!agree)
        {
            setErrorMessage("Agree to Terms and Conditions to Procceed");
        }
        else
        {
            if(User.password !== User.reType)
            {
                setPasswordMessage("Password Does Not Match");
            }
            else
            {
                setPasswordMessage("");
                if(User.fullName === "" || User.password === "" || User.reType === "" || User.email === "")
                {
                    setActive(false);
                    setBoardActive(false);
                    setCollegeActive(false);
                    setBlockedSignup("Fill Out The Form First")
                }
                else
                {
                    const { role,fullName,email,password} = User;
                    
                    await fetch("/uploadData", {
                        method:"POST",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            role,fullName,email,password
                        })
                    }).then(response => {
                        if(response.status === 400)
                        {
                            setBackendError("User Already Exist");
                            setBackendErrorCount(true);
                            setPasswordLengthCount(false);
                            setValidEmail(false);
                        }
                        else if(response.status === 200 )
                        {
                            setBackendError("");
                            setBackendErrorCount(false);
                            setPasswordLengthCount(false);
                            setValidEmail(false);
                            Navigation("/loginPage");
                        }
                        else if(response.status === 401)
                        {
                            setBackendError("Password Length is Short");
                            setPasswordLengthCount(true);
                            setBackendErrorCount(false);
                            setValidEmail(false);
                        }

                        else if(response.status === 402)
                        {
                            setBackendError("This is not a Valid Email");
                            setPasswordLengthCount(false);
                            setBackendErrorCount(false);
                            setValidEmail(true);
                        }
                    });
                }
            }
            
        }
    }

    const fillForm = () => {
        setBlockedSignup("Fill Out The Form First")
    }

    const termsAndConditions = () => {
        const newAgree = agree;
        setAgree(!newAgree);
    }

    return(
        <Signup 
            signIn={signIn} 
            hidePassword={hidePassword} 
            showPassword={showPassword}
            hideRetypePassword={hideRetypePassword}
            showRetypePassword={showRetypePassword}
            selectRole={selectRole}
            signUp={signUp}
            active={active}
            collegeActive={collegeActive}
            boardActive={boardActive}
            errorMessage={errorMessage}
            termsAndConditions={termsAndConditions}
            agree={agree}
            changeHandler={changeHandler}
            select={select}
            passwordMessage={passwordMessage}
            fillForm={fillForm}
            blockedSignup={blockedSignup}
            backendError={backendError}
            backendErrorCount={backendErrorCount}
            passwordLengthCount={passwordLengthCount}
            validEmail = {validEmail}
        />
    )
}

//Exporting Signup Component
export default SignUpComponent;