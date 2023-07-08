import React from "react";
import Aux from "../../../Auxiliary/Auxiliary";

//Importing Styling Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './dashboard.css';

const DashboardPage = (props) => {
    return (
        <Aux>
            <section className="outer__container">
                <section className="inner__container"> 
                    <h1>ASSESSMENT PROFORMA FOR INSPECTION OF INSTITUTIONS UNDER BISE</h1>
                    <div>
                        <div style={{marginBottom:"4rem"}}>
                            <p className="label">0. Type of Institute</p>
                            <input 
                                name="typeOfInstitute" 
                                onChange={props.defaultChangeHandler} 
                                className="input__field1"
                            />
                        </div>
                        <div style={{marginBottom:"4rem"}}>
                            <p className="label">1. Name of Institute</p>
                            <input 
                                name="nameOfInstitute" 
                                onChange={props.defaultChangeHandler} 
                                className="input__field1"
                            />
                        </div>
                        <div style={{display:"flex"}}>
                            <p className="label">2. Name of Owner (s) of Institute</p>
                            <FontAwesomeIcon  
                                className="add"
                                icon={faPlusCircle} 
                                onClick={props.nameOwnerFun}
                            />
                        </div>
                        {
                            props.arr.length === 1 ? <div>
                                <input className="input__field1"/>
                            </div> :
                            props.arr.map((name,key)=>{
                                return(
                                    <div>
                                        <input onChange={props.handleChange} id={key} name={name} className="input__field1"/>
                                    </div>
                                )
                                
                            })
                        }

                        <p className="label">4. Mailing Address</p>
                        <input 
                            name="mailingAddress"
                            onChange={props.defaultChangeHandler}
                            className="input__field1"
                        />

                        <div style={{display:"flex",marginTop:"4rem"}}>
                            <p className="label">3. Owner (s) Cnic Number</p>
                            <FontAwesomeIcon  
                                className="add"
                                icon={faPlusCircle} 
                                onClick={props.extendCnic}
                            />
                        </div>
                        {
                            props.cnicArrr.length === 1 ? <div>
                                <input className="input__field1"/>
                            </div> :
                            props.cnicArrr.map((name,key)=>{
                                return(
                                    <div>
                                        <input onChange={props.handleChangeCnic} id={key} name={name} className="input__field1"/>
                                    </div>
                                )
                                
                            })
                        }

                        <p className="label">5. Contact Number</p>
                        <input 
                            className="input__field1"
                            name="contactNumber"
                            onChange={props.defaultChangeHandler}
                        />

                        <p className="label">6. Email Id</p>
                        <input 
                            className="input__field1"
                            name="emailId"
                            onChange={props.defaultChangeHandler}
                        />

                        <p className="label">7. Date of establishment of the Institute</p>
                        <DatePicker 
                            className="date__picker" 
                            selected={props.startDate} 
                            onChange={props.handleDateChange} 
                            dateFormat="yyyy-MM-dd"
                        />

                        <div style={{display:"flex"}}>
                            <p className="label">8. Courses Offered</p>
                            <FontAwesomeIcon  
                                className="add"
                                icon={faPlusCircle} 
                                onClick={props.extendedCourses}
                            />
                        </div>
                        {
                            props.courses.length === 1 ? <div>
                                <input className="input__field1"/>
                            </div> :
                            props.courses.map((name,key)=>{
                                return(
                                    <div>
                                        <input onChange={props.handleChangeCourses} id={key} name={name} className="input__field1"/>
                                    </div>
                                )
                                
                            })
                        }

                        <p className="label">9. Date of Inspection</p>
                        <DatePicker 
                            className="date__picker" 
                            selected={props.inspectionDate} 
                            onChange={props.handleInspectionDateChange} 
                            dateFormat="yyyy-MM-dd"
                        />

                        <p className="label">10. Type of Managment</p>
                        <section style={{display:"flex"}}>
                            <input 
                                className="input__field1"
                                name="typeOfManagment"
                                onChange={props.defaultChangeHandler}
                                placeholder="Public or Private"
                            />
                        </section>

                        <p className="label">11. Land and Building</p>
                        <div style={{display:"flex",marginLeft:"1.4rem"}}>
                            <p className="label__extra">11.1</p>
                            <p className="label__extra">Is the institute functioning in its own building?</p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("yes","functioningInItsOwnBuilding")}
                                checked={props.User.functioningInOwnBuilding ? true : false}
                            />
                            <p className="label__extra">Yes</p>

                            <input type="radio" 
                                onClick={() => props.choiceToggle("no","functioningInItsOwnBuilding")} 
                                style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                checked={props.User.functioningInOwnBuilding === false ? true : false}
                            />
                            <p className="label__extra">No</p>
                        </div>

                        <div style={{display:"flex",marginLeft:"1.4rem"}}>
                            <p className="label__extra">11.2</p>
                            <p className="label__extra"> Does the institute propose to function in its own building?</p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("yes","purpose")} 
                                checked={props.User.purposeToFunctionInOwnBuiling ? true : false}
                            />
                            <p className="label__extra">Yes</p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("no","purpose")} 
                                checked={props.User.purposeToFunctionInOwnBuiling === false ? true : false}
                            />
                            <p className="label__extra">No</p>
                        </div>

                        <div style={{display:"flex",marginLeft:"1.4rem"}}>
                            <p className="label__extra">11.3.</p>
                            <p className="label__extra">If yes, has land been acquired? </p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("yes","land")} 
                                checked={props.User.ownLand ? true : false}
                            />
                            <p className="label__extra">Yes</p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("no","land")} 
                                checked={props.User.ownLand === false ? true : false}
                            />
                            <p className="label__extra">No</p>
                        </div>

                        <div style={{display:"flex",marginLeft:"1.4rem"}}>
                            <p className="label__extra">11.4</p>
                            <p className="label__extra">Is the institution’s own building under construction?</p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("yes","construction")} 
                                checked={props.User.buildingUnderConstruction ? true : false}
                            />
                            <p className="label__extra">Yes</p>
                            <input 
                                type="radio" 
                                style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                onClick={() => props.choiceToggle("no","construction")} 
                                checked={props.User.buildingUnderConstruction === false ? true : false}
                            />
                            <p className="label__extra">No</p>
                        </div>
                    
                        <p className="label">12. Infrastructure Facilities</p>
                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">12.1 No of Class Rooms?</p>
                            <input 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}} 
                                className="input__field1"
                                name="noOfClassRooms"
                                onChange={props.defaultChangeHandler}
                            />
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">12.2 Size of Exam Hall and its capacity, if available</p>
                            <input 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}} 
                                className="input__field1"
                                name="examHallCapacity"
                                onChange={props.defaultChangeHandler}
                            />
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">12.3 Total Number of Labs/Workshops?</p>
                            <input 
                                style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}} 
                                className="input__field1"
                                name="noOfLabs"
                                onChange={props.defaultChangeHandler}
                            />
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">12.4 Student's Canteen Provided?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","canteen")} 
                                    checked={props.User.studentCanteenProvided ? true : false}
                                />
                                <p className="label__extra">Yes</p>

                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("no","canteen")} 
                                    checked={props.User.studentCanteenProvided === false ? true : false}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <p className="label">13. Has the institute made provision for the following accommodation?</p>
                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">13.1 Principal Office?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","principalOffice")} 
                                    checked={props.User.principalOffice ? true : false}
                                />
                                <p className="label__extra">Yes</p>

                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("no","principalOffice")} 
                                    checked={props.User.principalOffice === false ? true : false}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">13.2 Faculty Room?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","facultyRoom")} 
                                    checked={props.User.facultyRoom ? true : false}
                                    name={props.User.facultyRoom}
                                />
                                <p className="label__extra">Yes</p>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","facultyRoom")} 
                                    checked={props.User.facultyRoom === false ? true : false}
                                    name={props.User.facultyRoom}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">13.3 Office Room?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","officeRoom")} 
                                    checked={props.User.officeRoom ? true : false}
                                    name={props.User.officeRoom}
                                />
                                <p className="label__extra">Yes</p>

                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("no","officeRoom")} 
                                    checked={props.User.officeRoom === false ? true : false}
                                    name={props.User.officeRoom}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">13.4 Student Information Desk/Reception?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","reception")} 
                                    checked={props.User.reception ? true : false}
                                    name={props.User.reception}
                                />
                                <p className="label__extra">Yes</p>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("no","reception")} 
                                    checked={props.User.reception === false ? true : false}
                                    name={props.User.re}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <p className="label">14. Has the institute have following sports facilities?</p>
                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">14.1 Hockey Playground?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","hockey")} 
                                    checked={props.User.hockeyPlayground ? true : false}
                                    name={props.User.hockeyPlayground}
                                />
                                <p className="label__extra">Yes</p>

                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("no","hockey")} 
                                    checked={props.User.hockeyPlayground === false ? true : false}
                                    name={props.User.hockeyPlayground}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">14.2 Cricket Playground?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","cricket")} 
                                    checked={props.User.cricketPlayground ? true : false}
                                    name={props.User.cricketPlayground}
                                />
                                <p className="label__extra">Yes</p>

                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("no","cricket")} 
                                    checked={props.User.cricketPlayground === false ? true : false}
                                    name={props.User.cricketPlayground}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">14.3 Football Playground?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","football")} 
                                    checked={props.User.footballPlayground ? true : false}
                                    name={props.User.footballPlayground}
                                />
                                <p className="label__extra">Yes</p>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","football")} 
                                    checked={props.User.footballPlayground === false ? true : false}
                                    name={props.User.footballPlayground}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div style={{marginLeft:"1.4rem"}}>
                            <p className="label__extra">14.4 Playground of another institution on sharing basis?</p>
                            <div style={{display:"flex"}}>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"1rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","institutePlayground")} 
                                    checked={props.User.sharingPlayground ? true : false}
                                    name={props.User.sharingPlayground}
                                />
                                <p className="label__extra">Yes</p>
                                <input 
                                    type="radio" 
                                    style={{marginLeft:"2rem",marginTop:"0.5rem",float:"left"}}
                                    onClick={() => props.choiceToggle("yes","institutePlayground")} 
                                    checked={props.User.sharingPlayground === false? true : false}
                                    name={props.User.sharingPlayground}
                                />
                                <p className="label__extra">No</p>
                            </div>
                        </div>

                        <div>
                            <div style={{marginTop:"2rem",marginBottom:"2rem", position:"relative"}} onClick={props.out} className="attach__document">
                                SUBMIT
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </Aux>
    )
}

export default DashboardPage;