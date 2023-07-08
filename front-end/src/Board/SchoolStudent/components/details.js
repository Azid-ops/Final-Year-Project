import react, { useState,useEffect} from 'react';
import DetailsPage from '../pages/details';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    const [approvals,setApprovals] = useState([]);
    const [dropdownDetails,setDropDownDetails] = useState(true);
    const Navigation= useNavigate();
    const [User,setUser] = useState({
        rollNum:""
    });

    const onChangeNumber = (e) => {
        e.preventDefault();
        setUser({...User,[e.target.name]:e.target.value});
    }

    const addRollNumber =async (institutionName,fullName,rollNum,boardRollNum) => {
        await fetch("/registerBoardRollNumber", {
            method:"POST",
            headers:{
                "CONTENT-TYPE":"application/json"
            },
            body:JSON.stringify({
                myClass:"9th",
                institutionName,
                fullName,
                rollNum,
                boardRollNum
            })
        })
    }

    const { state } = useLocation();

    const studentEmail = state.email;
    const studentInstitute = state.institute; 

    const fetchPendingApprovals =async()=> {
        const approvalsFrispy = await fetch('/ninthClassStudents?' + new URLSearchParams({
            className:"9th",
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

    return(
        <DetailsPage 
            approvals={approvals}
            addRollNumber={addRollNumber} 
            twelethClass={twelethClass} 
            eleventhClass={eleventhClass}
            tenthClass={tenthClass}
            ninthClass={ninthClass}
            dropdownDetails={dropdownDetails}
            onChangeNumber={onChangeNumber}
            User={User}
        />
    )
}

export default Details;