import React from "react";
import Aux from "../../../Auxiliary/Auxiliary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRocket, faClock, faSchool, faUniversity, faGear, faDoorOpen, faLaptop } from '@fortawesome/free-solid-svg-icons';

import './details.css';

const DetailsPage = (props) => {
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
                        <div className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}} icon={faRocket} />
                            <p className="dashboard">Dashboard</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.pendingApprovals} className="dashboard__btn__active">
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
                        <div className="dashboard__btn">
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
                    
                    {
                        props.counter === 0 ? <section className="table__outer">
                            <div className="table__inner">
                                <div className="table__header">
                                    Email
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.email}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Name Of Institute
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.nameOfInstitute}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Mailing Address
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.mailingAddress}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Type Of Managment
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.typeOfManagment}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Functioning In Own Building
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.functioningInOwnBuilding)}
                                </div>
                            </div>
                            <div style={{border:"none"}} className="table__inner__others">
                                {
                                    props.counter !== 0 ? <div
                                        onClick={props.goBack} 
                                        className="backPage">
                                        <p>Back</p>
                                    </div> : null
                                }
                                
                                <div onClick={props.goForward} className="nextPage">
                                    <p>Next</p>
                                </div>
                            </div>
                        </section> : props.counter === 1 ?
                            <section className="table__outer">
                            <div className="table__inner">
                                <div className="table__header">
                                    Purpose To Functioning In Own Building
                                </div>
                                <div style={{paddingTop:"1.5rem"}} className="table__content">
                                    {String(props.State.state.institution.purposeToFunctionInOwnBuiling)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Own Land
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.ownLand)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Number of ClassRooms
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.noOfClassRooms}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Exam Hall Capacity
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.examHallCapacity}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Number of Labs
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.noOfLabs)}
                                </div>
                            </div>
                            <div style={{border:"none"}} className="table__inner__others">
                                {
                                    props.counter !== 0 ? <div
                                    onClick={props.goBack}
                                        className="backPage">
                                        <p>Back</p>
                                    </div> : null
                                }
                                
                                <div onClick={props.goForward} className="nextPage">
                                    <p>Next</p>
                                </div>
                            </div>
                        </section> : props.counter === 2 ? <section className="table__outer">
                            <div className="table__inner">
                                <div className="table__header">
                                    Student Canteen Provided
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.studentCanteenProvided)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Principal Office
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.principalOffice)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Faculty Room
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.facultyRoom)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Office Room
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.officeRoom)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Reception
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.reception)}
                                </div>
                            </div>
                            <div style={{border:"none"}} className="table__inner__others">
                                {
                                    props.counter !== 0 ? <div
                                    onClick={props.goBack}
                                        className="backPage">
                                        <p>Back</p>
                                    </div> : null
                                }
                                
                                <div onClick={props.goForward} className="nextPage">
                                    <p>Next</p>
                                </div>
                            </div>
                        </section> : props.counter === 3 ? <section className="table__outer">
                            <div className="table__inner">
                                <div className="table__header">
                                    Hockey Playground
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.hockeyPlayground)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Cricket Playground
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.cricketPlayground)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Football Playground
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.footballPlayground)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Sharing Playground
                                </div>
                                <div className="table__content">
                                    {String(props.State.state.institution.sharingPlayground)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Date of Establishment
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.startDate.slice(0,10)}
                                </div>
                            </div>
                            <div style={{border:"none"}} className="table__inner__others">
                                {
                                    props.counter !== 0 ? <div
                                    onClick={props.goBack}
                                        className="backPage">
                                        <p>Back</p>
                                    </div> : null
                                }
                                
                                <div onClick={props.goForward} className="nextPage">
                                    <p>Next</p>
                                </div>
                            </div>
                        </section> : props.counter === 4 ? <section className="table__outer">
                            <div className="table__inner">
                                <div className="table__header">
                                    Inspection Date
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.inspectionDate.slice(0,10)}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Name of Owners
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.nameOfOwners.map(result=>{
                                        return result.value + ","
                                    })}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Cnic of Owners
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.cnicOfOwners.map(result=>{
                                        return result.value + ","
                                    })}
                                </div>
                            </div>
                            <div className="table__inner__others">
                                <div className="table__header">
                                    Courses Offering
                                </div>
                                <div className="table__content">
                                    {props.State.state.institution.courses.map(result=>{
                                        return result.value + ","
                                    })}
                                </div>
                            </div>
                            <div style={{border:"none"}} className="table__inner__others">
                                {
                                    props.counter !== 0 ? <div
                                    onClick={props.goBack}
                                        className="backPage">
                                        <p>Back</p>
                                    </div> : null
                                }

                                <div onClick={() => props.approve(props.State.state.institution.email)} className="nextPage">
                                    <p>Approve</p>
                                </div>
                                <div onClick={() => props.deleteData(props.State.state.institution.email)} className="deletePage">
                                    <p>Delete</p>
                                </div>
                            </div>
                        </section> : null
                    }
                
                </section>
            </section>
        </Aux>
    )
}

export default DetailsPage;