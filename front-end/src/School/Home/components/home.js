import React, { useState } from 'react';
import HomePage from '../pages/home';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const { state } = useLocation();
    const Navigation = new useNavigate();
    const email = state.email;

    const addStudents = () => {
        Navigation("/addStudents",{
            state:{
                email:email
            }
        })
    }

    const studentsLogin = () => {
        Navigation("/studentsLogin",{
            state:{
                email:email
            }
        })
    }

    const logout = () => {
        Navigation("/loginPage");
    }

    return(
        <HomePage logout={logout} email={email} addStudents={addStudents} studentsLogin={studentsLogin}/>
    )
}

export default Home;