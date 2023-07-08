import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import moment from 'moment';

const DashboardComponent = () => {

    const Navigate = new useNavigate();

    const {state} = useLocation();

    const email = state.userEmail;
    const role = state.role;
    
    const [startDate, setStartDate] = useState(null);
    const [inspectionDate, setInspectionDate] = useState(null);

    const inputArr = [{
        type: "text",
        value: "nameOwner"
    }];

    const cnic =[{
        type: "text",
        value: "121"
    }];

    const coursesOffered = [{
        type: "text",
        value: "121"
    }];

    const [arr, setArr] = useState(inputArr);
    const [cnicArrr,setCnicArrr] = useState(cnic);
    const [courses,setCourses] = useState(coursesOffered);

    const [User,setUser] = useState({
        typeOfInstitute:"",
        nameOfInstitute:"",
        mailingAddress:"",
        contactNumber:"",
        emailId:"",
        typeOfManagment:"",
        functioningInOwnBuilding:false,
        purposeToFunctionInOwnBuiling:false,
        ownLand:false,
        noOfClassRooms:"",
        examHallCapacity:"",
        noOfLabs:"",
        studentCanteenProvided:false,
        principalOffice:false,
        facultyRoom:false,
        officeRoom:false,
        reception:false,
        hockeyPlayground:false,
        cricketPlayground:false,
        footballPlayground:false,
        sharingPlayground:false,
    })

    const defaultChangeHandler = (e) => {
        e.preventDefault();
        setUser({...User, [e.target.name]:e.target.value});
    }
    const nameOwnerFun = () => {
        setArr(s => {
            return [
              ...s,
              {
                type: "text",
                value: "nameOwner"
              }
            ];
        });
    }

    const extendCnic = () => {
        setCnicArrr(s => {
            return [
              ...s,
              {
                type: "text",
                value: "123"
              }
            ];
        });
    }

    const extendedCourses = () => {
        setCourses(s=>{
            return [
                ...s,
                {
                    type:"text",
                    value:"123"
                }
            ]
        })
    }

    const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
          return newArr;
        });
    };

    const handleChangeCnic = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setCnicArrr(s => {
          const newCnicArr = s.slice();
          newCnicArr[index].value = e.target.value;
          return newCnicArr;
        });
    };

    const handleChangeCourses = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setCourses(s => {
          const newCoursesArr = s.slice();
          newCoursesArr[index].value = e.target.value;
          return newCoursesArr;
        });
    };

    const handleDateChange = (date) => {
        const adjustedDate = new Date(date);
        adjustedDate.setDate(date.getDate()+1); // Add 1 to the day value
        setStartDate(adjustedDate);
    };

    const handleInspectionDateChange = (date) => {
        const adjustedDate = new Date(date);
        adjustedDate.setDate(date.getDate()+1); // Add 1 to the day value
        setInspectionDate(adjustedDate);
    };

    const choiceToggle = (param,second) => {
        if(second === "functioningInItsOwnBuilding")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.functioningInOwnBuilding)
                {
                    setUser({...User,functioningInOwnBuilding:true})
                }
                else
                {
                    setUser({...User,functioningInOwnBuilding:false})
                }
            }

            else
            {
                if(User.functioningInOwnBuilding)
                {
                    setUser({...User,functioningInOwnBuilding:false})
                }
                else
                {
                    setUser({...User,functioningInOwnBuilding:true})
                }
            }
        }

        if(second === "purpose")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.purposeToFunctionInOwnBuiling)
                {
                    setUser({...User,purposeToFunctionInOwnBuiling:true})
                }
                else
                {
                    setUser({...User,purposeToFunctionInOwnBuiling:false})
                }
            }

            else
            {
                if(User.purposeToFunctionInOwnBuiling)
                {
                    setUser({...User,purposeToFunctionInOwnBuiling:false})
                }
                else
                {
                    setUser({...User,purposeToFunctionInOwnBuiling:true})
                }
            }
        }

        if(second === "land")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.ownLand)
                {
                    setUser({...User,ownLand:true})
                }
                else
                {
                    setUser({...User,ownLand:false})
                }
            }

            else
            {
                if(User.ownLand)
                {
                    setUser({...User,ownLand:false})
                }
                else
                {
                    setUser({...User,ownLand:true})
                }
            }
        }

        if(second === "construction")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.buildingUnderConstruction)
                {
                    setUser({...User,buildingUnderConstruction:true})
                }
                else
                {
                    setUser({...User,buildingUnderConstruction:false})
                }
            }

            else
            {
                if(User.buildingUnderConstruction)
                {
                    setUser({...User,buildingUnderConstruction:false})
                }
                else
                {
                    setUser({...User,buildingUnderConstruction:true})
                }
            }
        }

        if(second === "canteen")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.studentCanteenProvided)
                {
                    setUser({...User,studentCanteenProvided:true})
                }
                else
                {
                    setUser({...User,studentCanteenProvided:false})
                }
            }

            else
            {
                if(User.studentCanteenProvided)
                {
                    setUser({...User,studentCanteenProvided:false})
                }
                else
                {
                    setUser({...User,studentCanteenProvided:true})
                }
            }
        }

        if(second === "principalOffice")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.principalOffice)
                {
                    setUser({...User,principalOffice:true})
                }
                else
                {
                    setUser({...User,principalOffice:false})
                }
            }

            else
            {
                if(User.principalOffice)
                {
                    setUser({...User,principalOffice:false})
                }
                else
                {
                    setUser({...User,principalOffice:true})
                }
            }
        }

        if(second === "facultyRoom")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.facultyRoom)
                {
                    setUser({...User,facultyRoom:true})
                }
                else
                {
                    setUser({...User,facultyRoom:false})
                }
            }

            else
            {
                if(User.facultyRoom)
                {
                    setUser({...User,facultyRoom:false})
                }
                else
                {
                    setUser({...User,facultyRoom:true})
                }
            }
        }

        if(second === "officeRoom")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.officeRoom)
                {
                    setUser({...User,officeRoom:true})
                }
                else
                {
                    setUser({...User,officeRoom:false})
                }
            }

            else
            {
                if(User.officeRoom)
                {
                    setUser({...User,officeRoom:false})
                }
                else
                {
                    setUser({...User,office:true})
                }
            }
        }

        if(second === "reception")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.reception)
                {
                    setUser({...User,reception:true})
                }
                else
                {
                    setUser({...User,reception:false})
                }
            }

            else
            {
                if(User.reception)
                {
                    setUser({...User,reception:false})
                }
                else
                {
                    setUser({...User,reception:true})
                }
            }
        }

        if(second === "hockey")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.hockeyPlayground)
                {
                    setUser({...User,hockeyPlayground:true})
                }
                else
                {
                    setUser({...User,hockeyPlayground:false})
                }
            }

            else
            {
                if(User.hockeyPlayground)
                {
                    setUser({...User,hockeyPlayground:false})
                }
                else
                {
                    setUser({...User,hockeyPlayground:true})
                }
            }
        }

        if(second === "cricket")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.cricketPlayground)
                {
                    setUser({...User,cricketPlayground:true})
                }
                else
                {
                    setUser({...User,cricketPlayground:false})
                }
            }

            else
            {
                if(User.cricketPlayground)
                {
                    setUser({...User,cricketPlayground:false})
                }
                else
                {
                    setUser({...User,cricketPlayground:true})
                }
            }
        }

        if(second === "football")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.footballPlayground)
                {
                    setUser({...User,footballPlayground:true})
                }
                else
                {
                    setUser({...User,footballPlayground:false})
                }
            }

            else
            {
                if(User.footballPlayground)
                {
                    setUser({...User,footballPlayground:false})
                }
                else
                {
                    setUser({...User,footballPlayground:true})
                }
            }
        }

        if(second === "institutePlayground")
        {
            let newParam = param;
            if(newParam === "yes")
            {
                if(!User.sharingPlayground)
                {
                    setUser({...User,sharingPlayground:true})
                }
                else
                {
                    setUser({...User,sharingPlayground:false})
                }
            }

            else
            {
                if(User.footballPlayground)
                {
                    setUser({...User,sharingPlayground:false})
                }
                else
                {
                    setUser({...User,sharingPlayground:true})
                }
            }
        }

    }
    const out =async () => {

        const {
            typeOfInstitute,nameOfInstitute, mailingAddress, contactNumber, emailId, typeOfManagment, functioningInOwnBuilding,
            purposeToFunctionInOwnBuiling, ownLand, noOfClassRooms, examHallCapacity, noOfLabs, studentCanteenProvided,
            principalOffice, facultyRoom, officeRoom, reception, hockeyPlayground, cricketPlayground, footballPlayground,
            sharingPlayground
        } = User;

        const approvalFrispy = await fetch("/approveInstitute", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                typeOfInstitute,role,email,nameOfInstitute, mailingAddress, contactNumber, emailId, typeOfManagment, functioningInOwnBuilding,
                purposeToFunctionInOwnBuiling, ownLand, noOfClassRooms, examHallCapacity, noOfLabs, studentCanteenProvided,
                principalOffice, facultyRoom, officeRoom, reception, hockeyPlayground, cricketPlayground, footballPlayground,
                sharingPlayground,startDate,inspectionDate,arr,cnicArrr,courses
            })
        });

        if(approvalFrispy.status === 200)
        {
            Navigate("/loginPage", {
                state:{
                    approvalMessage:true
                }
            });
        }
    }

    
    return (
        <DashboardPage 
            User={User} 
            nameOwnerFun={nameOwnerFun} 
            arr={arr}
            choiceToggle={choiceToggle}
            handleChange={handleChange}
            handleChangeCnic={handleChangeCnic}
            out={out}
            extendCnic={extendCnic}
            cnicArrr={cnicArrr}
            courses={courses}
            extendedCourses={extendedCourses}
            handleChangeCourses={handleChangeCourses}
            startDate={startDate}
            setStartDate={setStartDate}
            inspectionDate={inspectionDate}
            setInspectionDate={setInspectionDate}
            handleDateChange={handleDateChange}
            handleInspectionDateChange={handleInspectionDateChange}
            defaultChangeHandler={defaultChangeHandler}
        />
    )
}

export default DashboardComponent;