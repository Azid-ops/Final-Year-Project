import react, { useState,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TenthClassPage from '../pages/tenthClass';
import EleventhClassPage from '../pages/eleventhClass';
import TwelethClassPage from '../pages/tweleth';

const TwelethClass = () => {
    const [approvals,setApprovals] = useState([]);
    const Navigation = useNavigate();

    const [User,setUser] = useState({
        rollNum:""
    });

    const onChangeNumber = (e) => {
        e.preventDefault();
        setUser({...User,[e.target.name]:e.target.value});
    }

    const { state } = useLocation();

    const studentEmail = state.email;
    const studentInstitute = state.institute; 

    const fetchPendingApprovals =async()=> {
        const approvalsFrispy = await fetch('/ninthClassStudents?' + new URLSearchParams({
            className:"12th",
            email:studentEmail,
            institute:studentInstitute
        }), {
            method:"GET",
            headers:{
                'Accept':'application/json',
                'Content-Type':"application/json"
            }
        });
        if (approvalsFrispy.ok) {

            const data = await approvalsFrispy.json();
            setApprovals(data);
        }
    }

    useEffect(() => {
        fetchPendingApprovals();
    });

    const tenthClass = () => {
        Navigation("/schoolStudentDetails10thClass", {
            state:{
                email:studentEmail,
                institute:studentInstitute
            }
        })
    }
    const eleventhClass = () => {
        Navigation("/schoolStudentDetails11thClass", {
            state:{
                email:studentEmail,
                institute:studentInstitute
            }
        })
    }

    const twelethClass = () => {
        Navigation("/schoolStudentDetails12thClass", {
            state:{
                email:studentEmail,
                institute:studentInstitute
            }
        })
    }

    const ninthClass = () => {
        Navigation("/schoolStudentDetails", {
            state:{
                email:studentEmail,
                institute:studentInstitute
            }
        })
    }

    const addRollNumber =async (institutionName,fullName,rollNum,boardRollNum) => {
        await fetch("/registerBoardRollNumber", {
            method:"POST",
            headers:{
                "CONTENT-TYPE":"application/json"
            },
            body:JSON.stringify({
                myClass:"12th",
                institutionName,
                fullName,
                rollNum,
                boardRollNum
            })
        })
    }

    return(
        <TwelethClassPage 
            twelethClass={twelethClass} 
            approvals={approvals} 
            eleventhClass={eleventhClass}
            tenthClass={tenthClass}
            ninthClass={ninthClass}
            addRollNumber={addRollNumber}
            User={User}
            onChangeNumber={onChangeNumber}
        />
    )
}

export default TwelethClass;