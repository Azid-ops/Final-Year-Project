import React from "react";

import Aux from "../../../Auxiliary/Auxiliary";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRocket, faClock, faSchool, faUniversity, faGear, faDoorOpen, faLaptop } from '@fortawesome/free-solid-svg-icons';

import './addResult.css';

const TwelethResultPage = (props) => {
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
                        <div onClick={props.ninthClassNavigation} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faRocket} />
                            <p className="dashboard">9th Class</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.tenthClassNavigation} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faClock} />
                            <p className="dashboard">10th Class</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.eleventhClassNavigation} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faUniversity} />
                            <p className="dashboard">11th Class</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.twelethClassNavigation} className="dashboard__btn__active">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faSchool} />
                            <p className="dashboard">12th Class</p>
                        </div>
                    </div>
                </section>
                <section className="right__body">
                    <div className="right__nav">
                        <h1 className="welcome">Welcome: Hamza</h1>
                        <div className="message__container">
                            Messages(0)
                        </div>
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Institution Name</th>
                                <th>Roll No</th>
                                <th>Physics</th>
                                <th>Chemistry</th>
                                <th>Computer</th>
                                <th>Urdu</th>
                                <th>English</th>
                                <th>Pak Studies</th>
                                <th>Islamiat</th>
                                <th>Obtained Marks</th>
                                <th>Total Marks</th>
                                <th>UPLOAD</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.approvals.map(results=>{
                                    return <tr>
                                        <td>{results.fullName}</td>
                                        <td>{results.institutionName}</td>
                                        <td>{results.boardRollNumber}</td>
                                        <td><input onChange={props.changeHandler} name="physics" className="input__field__marks" /></td>
                                        <td><input onChange={props.changeHandler} name="chemistry" className="input__field__marks" /></td>
                                        <td><input onChange={props.changeHandler} name="computer"  className="input__field__marks" /></td>
                                        <td><input onChange={props.changeHandler} name="urdu" className="input__field__marks" /></td>
                                        <td><input onChange={props.changeHandler} name="english" className="input__field__marks" /></td>
                                        <td><input onChange={props.changeHandler} name="pakistanStudies" className="input__field__marks" /></td>
                                        <td><input onChange={props.changeHandler} name="islamiat" className="input__field__marks" /></td>
                                        <td>90</td>
                                        <td>100</td>
                                        <td onClick={() => props.uploadMarks(
                                            results.fullName,
                                            results.institutionName,
                                            results.boardRollNumber
                                        )}>Upload</td>

                                    </tr>
                                })
                                
                            }
                            
                        </tbody>
                    </table>
                    
                    {/* <div className="table__outer">
                        <div className="table__div">
                            Student Name
                        </div>
                        <div className="table__div">
                            Roll Number
                        </div>
                        <div className="table__div">
                            Institute Name
                        </div>
                        <div className="table__div">
                            Physics
                        </div>
                        <div className="table__div">
                            Chemistry
                        </div>
                        <div className="table__div">
                            Mathematics
                        </div>
                        <div className="table__div">
                            Urdu
                        </div>
                        <div className="table__div">
                            English
                        </div>
                        <div className="table__div">
                            Islamiat
                        </div>
                        <div className="table__div">
                            Pakistan Studies
                        </div>
                        <div className="table__div">
                            Obtained Marks
                        </div>
                        <div className="table__div">
                            Total Marks
                        </div>
                    </div>
                    <div className="table__outer1">
                        <div className="table__div">
                            Student Name
                        </div>
                        <div className="table__div">
                            Roll Number
                        </div>
                        <div className="table__div">
                            Institute Namedadsaddddddddddddddddddd
                        </div>
                        <div style={{textAlign:"center",width:"5%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div style={{textAlign:"center",width:"5%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div style={{textAlign:"center",width:"9%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div style={{textAlign:"center",width:"3%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div style={{textAlign:"center",width:"5%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div style={{textAlign:"center",width:"5%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div style={{textAlign:"center",width:"10%",outline:"0"}}className="table__div__input">
                            <input style={{width:"100%"}}/>
                        </div>
                        <div className="table__div">
                            Obtained Marks
                        </div>
                        <div className="table__div">
                            Total Marks
                        </div>
                    </div> */}
                </section>
            </section>
        </Aux>
    )
}

export default TwelethResultPage;