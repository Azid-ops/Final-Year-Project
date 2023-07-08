import React from 'react';
import IntruderPage from '../pages/intruder';
import { useNavigate } from 'react-router-dom';

const Intruder = () => {

    const Navigation = useNavigate();

    const GoBack = () => {
        Navigation("/");
    }
    
    return(
        <IntruderPage goBack={GoBack} />
    )
}

export default Intruder;