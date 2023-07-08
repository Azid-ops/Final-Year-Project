import react from 'react';

import Aux from '../../../Auxiliary/Auxiliary';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSchool } from '@fortawesome/free-solid-svg-icons';

const TenthClassPage = (props) => {
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
                    </div>

                    <div className="left__Body">
                        <div onClick={props.ninthClass} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faSchool} />
                            <p className="dashboard">9th Class</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.tenthClass} className="dashboard__btn__active">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faSchool} />
                            <p className="dashboard">10th Class</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.eleventhClass} className="dashboard__btn">
                            <FontAwesomeIcon style={{marginTop:"0.1rem"}}icon={faSchool} />
                            <p className="dashboard">11th Class</p>
                        </div>
                    </div>

                    <div className="left__Body">
                        <div onClick={props.twelethClass} className="dashboard__btn">
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
                    <div className="right__content__external">
                        {
                            props.approvals.length === 0 ? <div className="right__content__internal">
                                You Have No Pending Approvals
                            </div> : <div className="right__content__internal">
                                {props.approvals.length} Student (s) Registered
                            </div>
                        }

                        <div className="external">
                            {
                                props.approvals.length >=1 ?
                                props.approvals.map(result=>{
                                    return <div className="pending__institutes">
                                        <div className="pending">
                                            <p className="pending__school">School</p>
                                        </div>
                                        <h1 className="title">Institution Name: {result.institutionName}</h1>
                                        <p className="title">Student Name: {result.fullName}</p>
                                        <p className="title">Roll No: {result.rollNumber}</p>
                                        <p className="title">Date of Birth: {result.dob}</p>
                                        {
                                            !result.boardRollNumber ? <div>
                                                <p className="title">Enter Board Roll Number: <input 
                                                    name="rollNum" 
                                                    onChange={props.onChangeNumber}
                                                /></p>
                                                <div onClick={() => props.addRollNumber(
                                                    result.institutionName,
                                                    result.fullName,
                                                    result.rollNumber,
                                                    props.User.rollNum
                                                )} className="details">
                                                    Submit
                                                </div>
                                            </div> : <div>
                                                <p className="title">Enter Board Roll Number: {result.boardRollNumber}</p>
                                                <div style={{width:"75%"}} className="details">
                                                    Board Number Assigned Successfully
                                                </div>
                                            </div>
                                        }
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

export default TenthClassPage;