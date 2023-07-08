//Importing Packages
import React from "react";

//Importing Files
import Aux from "../../Auxiliary/Auxiliary";

//Importing Assets
import BackgroundImage from '../../Assets/background.jpg';

//Importing Styling Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

//Importing Css
import './login.css';

const Login = (props) => {
    return (
        <Aux>
            <section>
                <img 
                    style={{width:"100%" ,height:"100vh", position:"relative"}}
                    src={BackgroundImage} 
                    alt="A Background" 
                />
                <section className="loginForm">
                    <h1 style={{marginLeft:"0.5rem"}}>I am a...</h1>
                    <section className="innerLogin">
                        <div  
                            onClick={() => props.selectRole("School")} 
                            className={props.active === false ? "institute" : "School"}>
                            School
                        </div>

                        <div  
                            onClick={() => props.selectRole("Board")} 
                            className={props.boardActive === false ? "institute" : "School"}
                        >Board</div>
                    </section>
                    <p className="label">Email</p>
                    <input disabled={!props.select ? true: false} name="email" onChange={props.changeHandler} className="input__field"/>
                    <p className="label">Password</p>
                    <div className="input__field__eye">
                        <input  disabled={!props.select ? true : false} name="password" onChange={props.changeHandler} className="input__field" type={props.hidePassword ? "password" : "text"}/> 
                        <span onClick={props.showPassword}>
                            {
                                props.hidePassword ? <FontAwesomeIcon  icon={faEyeSlash} />:
                                <FontAwesomeIcon  icon={faEye} />
                            }
                            
                        </span>
                    </div>
                    {
                        props.secureKeyInput ?
                        <Aux>
                            <p className="label">Enter Secure Key</p>
                            <div className="input__field__eye__secure">
                                <input  disabled={!props.select ? true : false} name="secureKey" onChange={props.changeHandler} className="input__field" type={props.hidePassword ? "password" : "text"}/> 
                                <span onClick={props.showPassword}>
                                    {
                                        props.hidePassword ? <FontAwesomeIcon  icon={faEyeSlash} />:
                                        <FontAwesomeIcon  icon={faEye} />
                                    }
                                    
                                </span>
                            </div>
                        </Aux>
                        : null
                    }
                    
                    
                    <br />
                    <input 
                        style={{marginLeft:"0.5rem",marginTop:"0.5rem"}}
                        onClick={props.agreeToTerms}
                        checked={props.agree}
                        type="radio" 
                    /> I agree to the terms and conditions.
                    <br />

                    {
                        props.agree ?  null : <p className="backend">{props.errorMessage}</p>
                    }

                    {
                        props.wrongCredientials ? <p className="backend">{props.errorMessage}</p> : null 
                    }

                    {
                        props.waitingForApproval ? <p 
                            className="backend" 
                            style={{color:"green"}}
                        >Data Successfully Submitted, Wait for Inspection team to Visit your institution</p> : null 
                    }

                    {
                        props.wrongRole ? <p className="backend">{props.errorMessage}</p> : null 
                    }

                    <div onClick={props.loginButton} className="loginBtn">Login</div>

                    <p 
                        className="dont__have__an__account"
                    >Don't have an Account? <p className="signup" onClick={props.signUp} style={{color:"green"}}>Signup</p></p>
                </section>
            </section>
        </Aux>
    )
}

//Exporting Component
export default Login;