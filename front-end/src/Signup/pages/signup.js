//Importing Packages
import React from 'react';

//Importing Pages
import Aux from '../../Auxiliary/Auxiliary';

//Importing Assets
import BackgroundImage from '../../Assets/background.jpg';

//Importing Styling Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

//Importing Css
import './signup.css';

//Signup Component
const signUp = (props) => {
    return(
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
                            className={props.active === false ? "institute" : "School"}
                        >School</div>

                        {/* <div 
                            onClick={() => props.selectRole("Board")} 
                            className={props.boardActive === false ? "institute" : "School"}
                        >Board</div> */}

                    </section>

                    <p className="label">Full Name</p>
                    <input onChange={props.changeHandler} disabled={!props.select ? true : false} name="fullName" className="input__field"/>

                    <p className="label" onChange={props.changeHandler} name="email">Email</p>
                    <input disabled={!props.select ? true : false} onChange={props.changeHandler} name="email" className="input__field"/>

                    <p className="label">Password</p>
                    <div className="input__field__eye">
                        <input disabled={!props.select ? true : false} onChange={props.changeHandler} name="password" className="input__field" type={props.hidePassword ? "password" : "text"}/> 
                        <span onClick={props.showPassword}>
                            {
                                props.hidePassword ? <FontAwesomeIcon  icon={faEyeSlash} />:
                                <FontAwesomeIcon  icon={faEye} />
                            }
                            
                        </span>
                    </div>

                    <p className="label">Re-Type Password</p>
                    <div className="input__field__eye">
                        <input disabled={!props.select ? true : false} onChange={props.changeHandler} name="reType"className="input__field" type={props.hideRetypePassword ? "password" : "text"}/> 
                        <span onClick={props.showRetypePassword}>
                            {
                                props.hideRetypePassword ? <FontAwesomeIcon  icon={faEyeSlash} />:
                                <FontAwesomeIcon  icon={faEye} />
                            }
                            
                        </span>
                    </div>
                    <br />
                    <input 
                        onClick={props.termsAndConditions} 
                        style={{marginLeft:"0.5rem",marginTop:"0.5rem"}}
                        type="radio" 
                        checked={props.agree}
                    /> I agree to the terms and conditions.
                    <br />
                    {
                        props.agree === false ? <p className="errorMessage">{props.errorMessage}</p>: null
                    }

                    <p className="errorMessage">{props.passwordMessage}</p>

                    {
                        props.backendErrorCount ? <p className="backend">{props.backendError}</p> : null
                    }

                    {
                        props.validEmail ? <p className="backend">{props.backendError}</p> : null
                    }

                    {
                        props.passwordLengthCount ? <p className="backend">{props.backendError}</p> : null
                    }
                    
                    {
                        !props.active ? <p className='backend'>{props.blockedSignup}</p> : null
                    }

                    <div onClick={props.select ? props.signUp : props.fillForm} className="loginBtn">Signup</div>
                    <p 
                        className="dont__have__an__account"
                    >Already a Member? <p className="signup" onClick={props.signIn} style={{color:"green",fontWeight:"bold"}}>Signin</p></p>
                </section>
            </section>
        </Aux>
    )
}

//Exporting Signup Component
export default signUp;