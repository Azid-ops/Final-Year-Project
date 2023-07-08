import React from "react";

import Aux from "../../../Auxiliary/Auxiliary";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRocket, faPlus, faInbox, faUniversity, faGear, faDoorOpen, faLaptop } from '@fortawesome/free-solid-svg-icons';

import './addStudents.css';

const AddStudentsPage = (props) => {
    return(
        <Aux>
            <section className="outer__body">
                <section className="left__body">
                    <div className="left__nav">
                        <h1 className="bise">𝐁𝐈𝐒𝐄</h1>
                        <div className="toggler">
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                        </div>
                    </div>
                    <div className="left__Body">
                        <p className="main__navigation">MAIN NAVIGATION</p>
                        <div onClick={props.home} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faRocket} />
                            <p className="dashboard">Dashboard</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.addStudents} className="dashboard__btn__active">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faPlus} />
                            <p className="dashboard">Add Students</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.logout} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faDoorOpen} />
                            <p className="dashboard">Logout</p>
                        </div>
                    </div>
                </section>
                <section className="right__body">
                    <div className="right__nav">
                        <h1 className="welcome">Welcome: Hamza</h1>
                    </div>
                    <section style={{marginLeft:"8rem"}} className="loginForm">
                        <h1 style={{marginLeft:"0.5rem"}}>Add Students</h1>
                        <p for="addStudents" className="label">Select Class</p>
                        <select 
                            id="addStudents" 
                            name="studentClass" 
                            className="input__field"
                            onChange={props.changeHandler}

                        >
                            <option
                                name="studentClass"
                                value="9th" 
                                className="input__field"
                                onChange={props.changeHandler}
                            >
                                9th
                            </option>
                            <option
                                name="studentClass"
                                value="10th" 
                                className="input__field"
                                onChange={props.changeHandler}

                            >
                                10th
                            </option>
                            <option
                                name="studentClass"
                                value="11th" 
                                className="input__field"
                                onChange={props.changeHandler}

                            >
                                11th
                            </option>
                            <option
                                name="studentClass"
                                value="12th" 
                                className="input__field"
                                onChange={props.changeHandler}

                            >
                                12th
                            </option>
                        </select>

                        <p className="label">Enter Full Name</p>
                        <div className="input__field__eye">
                            <input  
                                name="fullName" 
                                onChange={props.changeHandler} 
                                className="input__field" 
                            /> 
                        </div>

                        <p className="label">Enter Roll Number</p>
                        <div className="input__field__eye">
                            <input  
                                name="rollNumber" 
                                onChange={props.changeHandler} 
                                className="input__field" 
                            /> 
                        </div>

                        <p className="label">Enter Date Of Birth</p>
                        <div className="input__field__eye">
                            <input  
                                name="dob" 
                                onChange={props.changeHandler} 
                                className="input__field" 
                            /> 
                        </div>
                        <br />

                        <div onClick={props.addStudent} style={{marginBottom:"1rem"}} className="loginBtn">ADD</div>

                    </section>
                </section>
            </section>
        </Aux>
    )
}

export default AddStudentsPage;