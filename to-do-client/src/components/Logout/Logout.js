import React from 'react';
import Auth from '../Auth/Auth';
import {Button} from 'antd'


const Logout = (props) => {
    // console.log(props);

    return(
        <div>
            <Button onClick={props.clearLocalStorage, props.logoutButton}>Logout</Button>
        </div>
    )
}

export default Logout;

//Don't touch
