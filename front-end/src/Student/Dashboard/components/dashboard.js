import React from "react";
import DashboardPage from "../pages/dashboard";
import { useLocation, useNavigate } from "react-router-dom";


const Dashboard = () => {

    const {state} = useLocation();

    const Navigation = useNavigate();

    const reportCardNavigate = () => {
        Navigation("/reportCard", {
            state:{
                myClass:state.class,
                rollNumber:state.rollNumber,
                fullName:state.fullName,
                institutionName:state.institutionName
            }
        })
    }
    return(
        <DashboardPage reportCardNavigate={reportCardNavigate} state={state}/>
    )
}

export default Dashboard;