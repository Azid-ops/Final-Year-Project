import React from 'react';
import Aux from '../../../Auxiliary/Auxiliary';

import './intruder.css';

const IntruderPage = (props) => {
    return(
        <Aux>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <a onClick={props.goBack}>Go TO Homepage</a>
                </div>
            </div>
        </Aux>
    )
}

export default IntruderPage;