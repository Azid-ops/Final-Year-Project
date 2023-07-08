//Importing Packages
import React from "react";
import { useNavigate } from 'react-router-dom';
//Importing Pages
import Home from "../pages/home";

const HomeComponent = () => {

    const Navigation = new useNavigate();

    const goToLoginPage = () => {
        Navigation("/loginPage")
    }

    const userLogin = () => {
        Navigation("/studentUserLogin")
    }

    return (
        <Home goToLoginPage={goToLoginPage} userLogin={userLogin}/>
    )
}

//Exporting Component
export default HomeComponent;