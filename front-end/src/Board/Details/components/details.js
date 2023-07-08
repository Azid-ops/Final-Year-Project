import React, { useState } from "react";
import DetailsPage from "../pages/details";
import { useLocation,useNavigate } from "react-router-dom";

const Details = () => {

    const State = useLocation();
    const [counter,setCounter] = useState(0);
    const [userEmail,setUserEmail] = useState(State.state.email);
    const Navigation = useNavigate();

    const goForward = () => {
        let newGo = counter + 1;
        setCounter(newGo)
    }

    const goBack = () => {
        let newGo = counter - 1;
        setCounter(newGo);
    }

    const approve = async (myEmail) => {
        const approveFrispy = await fetch("/approveInstitutionRequest",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                myEmail
            })
        });

        if(approveFrispy.status === 200)
        {
            Navigation("/pendingApprovals",{
                state:{
                    state:userEmail
                }
            })
        }
    }

    const deleteData = async (myEmail) => {
        const deleteFrispy = await fetch("/deleteInstitutionRequest",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                myEmail
            })
        });
        if(deleteFrispy.status === 200)
        {
            Navigation("/pendingApprovals",{
                state:{
                    state:userEmail
                }
            })
        }
    }

    return(
        <DetailsPage 
            goForward={goForward} 
            counter={counter} 
            State={State}
            goBack={goBack}
            approve={approve}
            deleteData={deleteData}
        />
    )
}

export default Details;