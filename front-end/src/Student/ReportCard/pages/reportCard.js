import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRocket, faClock, faSchool, faUniversity, faGear, faDoorOpen, faLaptop } from '@fortawesome/free-solid-svg-icons';

import Aux from "../../../Auxiliary/Auxiliary";

const ReportCardPage = (props) => {
    return (
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
                        <div className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faRocket} />
                            <p className="dashboard">Dashboard</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.reportCardNavigate} className="dashboard__btn__active">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faClock} />
                            <p className="dashboard">Report Card</p>
                        </div>
                    </div>
                </section>
                <section className="right__body">
                    <div className="right__nav">
                        <h1 className="welcome">Welcome: {props.state.fullName} </h1>
                        <div className="message__container">
                            Messages(0)
                        </div>
                    </div>
                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Current Class: {props.state.myClass}</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Full Name: {props.approve.fullName}</p>
                            </div>
                            <div className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Roll No: {props.approve.rollNumber}</p>
                            </div>
                            <div className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Institution Name: {props.approve.institutionName}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Physics</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div style={{marginTop:"15rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Obtained Marks: {props.approve.physics}</p>
                            </div>
                            <div style={{marginTop:"15rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Marks: 100</p>
                            </div>
                            <div style={{marginTop:"15rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Status: {props.approve.physics >= 50 ? "Pass" : "Fail"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Chemistry</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div style={{marginTop:"30rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Obtained Marks: {props.approve.chemistry}</p>
                            </div>
                            <div style={{marginTop:"30rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Marks: 100</p>
                            </div>
                            <div style={{marginTop:"30rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Status: {props.approve.chemistry >= 50 ? "Pass" : "Fail"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Computer</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div style={{marginTop:"45rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Obtained Marks: {props.approve.computer}</p>
                            </div>
                            <div style={{marginTop:"45rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Marks: 100</p>
                            </div>
                            <div style={{marginTop:"45rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Status: {props.approve.computer >= 50 ? "Pass" : "Fail"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Urdu</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div style={{marginTop:"60rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Obtained Marks: {props.approve.urdu}</p>
                            </div>
                            <div style={{marginTop:"60rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Marks: 100</p>
                            </div>
                            <div style={{marginTop:"60rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Status: {props.approve.urdu >= 50 ? "Pass" : "Fail"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">English</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div style={{marginTop:"75rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Obtained Marks: {props.approve.english}</p>
                            </div>
                            <div style={{marginTop:"75rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Marks: 100</p>
                            </div>
                            <div style={{marginTop:"75rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Status: {props.approve.english >= 50 ? "Pass" : "Fail"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Islamiat</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <div style={{marginTop:"89rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Obtained Marks: {props.approve.islamiat}</p>
                            </div>
                            <div style={{marginTop:"89rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Marks: 100</p>
                            </div>
                            <div style={{marginTop:"89rem"}} className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Status: {props.approve.islamiat >= 50 ? "Pass" : "Fail"}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Aux>
    );
}

export default ReportCardPage;