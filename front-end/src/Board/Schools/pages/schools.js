import React from "react";
import Aux from "../../../Auxiliary/Auxiliary";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faClock, faSchool, faUniversity, faGear, faDoorOpen, faLaptop } from '@fortawesome/free-solid-svg-icons';


const SchoolsPage = (props) => {
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
                        <div onClick={props.triggerSchool} className="dashboard__btn__active">
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
                    <div className="right__content__external">
                        {
                            props.approvals.length === 0 ? <div className="right__content__internal">
                                No Schools Registered Yet
                            </div> : <div className="right__content__internal">
                                You Have {props.approvals.length} Schools Registered
                            </div>
                        }

                        {
                            props.approvals.length === 0 ? <div style={{marginTop:"5rem"}}>
                                <iframe 
                                    src="https://giphy.com/embed/OAzXCsZ2GY2HTfrraG" 
                                    width="480" 
                                    height="270" 
                                    frameBorder="0" 
                                    class="giphy-embed" 
                                    allowFullScreen
                                >
                                </iframe>
                            </div>:null
                        }
                        

                        <div className="external">
                            {
                                props.approvals.length >=1 ?
                                props.approvals.map(result=>{
                                    return <div className="pending__institutes">
                                        <div className="pending">
                                            <p className="pending__school">{result.typeOfInstitute}</p>
                                        </div>
                                        <h1 className="title">Institution Name: {result.nameOfInstitute}</h1>
                                        <p className="title">Address: {result.mailingAddress}</p>
                                        <p className="title">Email: {result.email}</p>
                                        <div className="pending__details">
                                            <p onClick={() => props.triggerDetailsFunc(
                                                result.email,
                                                result.nameOfInstitute
                                            )} className="pending__school">Details</p>
                                        </div>
                                    </div>
                                }):null
                            }
                        </div>
                        
                    </div>
                </section>
            </section>
        </Aux>
    )
}

export default SchoolsPage;