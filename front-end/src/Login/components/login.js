//Importing Packages
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Importing Pages
import Login from "../pages/login";

const LoginComponent = () => {

    const [hidePassword,setHidePassword] = useState(true);
    const [agree,setAgree] = useState(false);
    const [selectInstitute,setSelectedInstitute] = useState("");
    const [active,setActive] = useState(false);
    const [collegeActive,setCollegeActive] = useState(false);
    const [boardActive,setBoardActive] = useState(false);
    const [acceptTerms,setAcceptTerms] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [select,setSelect] = useState(false);
    const [wrongCredientials,setWrongCredientials] = useState(false);
    const [wrongRole,setWrongRole] = useState(false);
    const [waitingForApproval,setWaitingForApproval] = useState(false);
    const [secureKeyInput,setSecureKeyInput] = useState(false);

    const [User,setUser] = useState({
        role:"",
        email:"",
        password:"",
        secureKey:""
    });

    const Navigation = new useNavigate();

    let name,value;
    const changeHandler = (event) => {
        event.preventDefault();
        name = event.target.name;
        value = event.target.value;
        setUser({...User,[name]:value,role:selectInstitute});
    }

    const signUp = () => {
        Navigation("/signup")
    }

    const agreeToTerms = () => {
        const newAgree = agree;
        setAgree(!newAgree);        
    }

    const showPassword = () => {
        let password = hidePassword;
        setHidePassword(!password);
    }

    const loginButton =async () => {
        if(agree)
        {
            const { role,email,password,secureKey} = User;

            await fetch("/login", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    role,email,password,secureKey
                })
            }).then(response => {
                if(response.status === 401 || response.status === 403)
                {
                    setWrongCredientials(true);
                    setWrongRole(false);
                    setErrorMessage("Either Email or Password is incorrect")
                }
                if(response.status === 200)
                {
                    setWrongCredientials(false);
                    setWrongRole(false);
                    setErrorMessage("");
                    Navigation("/schoolDashboard", {
                        state:{
                            userEmail : User.email,
                            role:User.role
                        }
                    });
                }
                if(response.status === 201)
                {
                    setWrongCredientials(false);
                    setWrongRole(false);
                    setErrorMessage("");
                    Navigation("/collegeRegistration")
                }

                if(response.status === 203)
                {
                    setWrongCredientials(false);
                    setWrongRole(false);
                    setErrorMessage("");
                    setWaitingForApproval(true);
                    Navigation("/loginPage");
                }

                if(response.status === 204)
                {
                    setWrongCredientials(false);
                    setWrongRole(false);
                    setErrorMessage("");
                    Navigation("/schoolHome",{
                        state:{
                            email:User.email
                        }
                    });
                }
                if(response.status === 202)
                {
                    setWrongCredientials(false);
                    setWrongRole(false);
                    setErrorMessage("");
                    Navigation("/boardDashboard", {
                        state:{
                            email:email
                        }
                    })
                }
                if(response.status === 402)
                {
                    setWrongRole(true);
                    setWrongCredientials(false);
                    setErrorMessage("Oopsy! Something Went Wrong");
                }
            })
        }
        else
        {
            setErrorMessage("Please Agree to Terms and Conditions First");
            if(User.fullName === "" || User.password === "" || User.reType === "" || User.email === "")
            {
                setActive(false);
                setBoardActive(false);
                setCollegeActive(false);
                setErrorMessage("Fill Out The Form First")
            }
            else
            {
                console.log(User);
            }
        }
    }

    const selectRole = (institute) => {
        let newInstitute = institute;
        setSelectedInstitute(newInstitute);
        setSelect(true)
        if(institute === "School")
        {
            setCollegeActive(false);
            setBoardActive(false);
            setSecureKeyInput(false);
            setActive(!active);
        }
        if(institute === "College")
        {
            setActive(false);
            setBoardActive(false);
            setSecureKeyInput(false);
            setCollegeActive(!collegeActive);
        }
        if(institute === "Board")
        {
            setActive(false);
            setCollegeActive(false);
            setSecureKeyInput(true);
            setBoardActive(!boardActive);
        }
    }

    return (
        <Login 
            signUp={signUp} 
            hidePassword={hidePassword} 
            showPassword={showPassword}
            agreeToTerms={agreeToTerms}
            agree={agree}
            selectRole={selectRole}
            active={active}
            collegeActive={collegeActive}
            boardActive={boardActive}
            loginButton={loginButton}
            changeHandler={changeHandler}
            acceptTerms={acceptTerms}
            errorMessage={errorMessage}
            select={select}
            wrongCredientials={wrongCredientials}
            wrongRole={wrongRole}
            waitingForApproval={waitingForApproval}
            secureKeyInput={secureKeyInput}
        />
    )
}

//Exporting Component
export default LoginComponent;