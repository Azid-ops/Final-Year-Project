import React from "react";
import Aux from "../../../Auxiliary/Auxiliary";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRocket, faClock, faSchool, faUniversity, faGear, faDoorOpen, faLaptop } from '@fortawesome/free-solid-svg-icons';

import './dashboard.css';

const DashboardPage = (props) => {
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
                        <div className="dashboard__btn__active">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faRocket} />
                            <p className="dashboard">Dashboard</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.pendingApprovals} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faClock} />
                            <p className="dashboard">Pending Approvals</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faUniversity} />
                            <p className="dashboard">Colleges</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faSchool} />
                            <p className="dashboard">Schools</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.addResult} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faGear} />
                            <p className="dashboard">Add Result</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faDoorOpen} />
                            <p className="dashboard">Logout</p>
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
                    <div className="right__body__content">
                        <div className="right__body__inner__content">
                            <h1 className="analytics">Analytics</h1>
                            <hr style={{height:"0.1vh",width:"66.5vw"}}className="myHr"/>
                        </div>
                        <div className="total__analytics">
                            <FontAwesomeIcon style={{
                                marginTop:"0.1rem",
                                color:"white",
                                position:"absolute",
                                left:"2rem",
                                fontSize:"3rem"
                            }}icon={faSchool} />
                            <div className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Schools</p>
                                <p className="total__content">1</p>
                            </div>

                            <FontAwesomeIcon style={{
                                marginTop:"0.1rem",
                                color:"white",
                                position:"absolute",
                                left:"21rem",
                                fontSize:"3rem"
                            }}icon={faUniversity} />
                            <div className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Colleges</p>
                                <p className="total__content">1</p>
                            </div>

                            <FontAwesomeIcon style={{
                                marginTop:"0.1rem",
                                color:"white",
                                position:"absolute",
                                left:"39rem",
                                fontSize:"3rem",
                            }}icon={faLaptop} />
                            <div className="total__analytics__inner">
                                <p style={{paddingTop:"0.5rem"}} className="total__content">Total Institutions</p>
                                <p className="total__content">1</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Aux>
    )
}

export default DashboardPage;