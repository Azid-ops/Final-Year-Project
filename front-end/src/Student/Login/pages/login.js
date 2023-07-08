import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import BackgroundImage from '../../../Assets/background.jpg';

import Aux from "../../../Auxiliary/Auxiliary";

const LoginPage = (props) => {
    return(
        <Aux>
            <section>
                <img 
                    style={{width:"100%" ,height:"100vh", position:"relative"}}
                    src={BackgroundImage} 
                    alt="A Background" 
                />
                <section className="loginForm">
                    <p className="label">Class</p>
                    <input onChange={props.changeHandler} name="myClass" className="input__field"/>

                    <p className="label">Institution Name</p>
                    <input onChange={props.changeHandler} name="institutionName" className="input__field"/>

                    <p className="label">Full Name</p>
                    <input onChange={props.changeHandler} name="fullName" className="input__field"/>

                    <p className="label" onChange={props.changeHandler} >Roll Number</p>
                    <input  onChange={props.changeHandler} name="rollNumber" className="input__field"/>

                    <p className="label">Password</p>
                    <div className="input__field__eye">
                        <input onChange={props.changeHandler} name="password" className="input__field" type={props.hidePassword ? "password" : "text"}/> 
                        <span onClick={props.showPassword}>
                            {
                                props.hidePassword ? <FontAwesomeIcon  icon={faEyeSlash} />:
                                <FontAwesomeIcon  icon={faEye} />
                            }
                            
                        </span>
                    </div>

                    <div onClick={props.triggerLogin} className="loginBtn">Signup</div>
                    <br />
                </section>
            </section>
        </Aux>
    )
}

export default LoginPage;