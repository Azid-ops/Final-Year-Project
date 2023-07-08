import React, { useEffect, useState } from "react";
import DashboardPage from "../pages/dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Intruder from "../../../Errors/Intruder/components/intruder";

const Dashboard = () => {
    const {state} = useLocation();
    const Navigation = new useNavigate();
    const [catchIntruder,setCatchIntruder] = useState(false);
    useEffect(() => {
        if(!state)
        {
            setCatchIntruder(true);
            console.log(catchIntruder);
        }
    },[catchIntruder])

    const pendingApprovals = () => {
        Navigation("/pendingApprovals", {
            state:{
                email:state.email
            }
        });
    }

    const addResult = () => {
        Navigation("/addResult", {
            state:{
                email:state.email
            }
        })
    }

    return(
        !catchIntruder ? <DashboardPage pendingApprovals={pendingApprovals} addResult={addResult} /> : <Intruder />
    )
}

export default Dashboard;