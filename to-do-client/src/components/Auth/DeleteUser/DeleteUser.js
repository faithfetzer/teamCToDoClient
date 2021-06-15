import React from 'react';
import Auth from '../Auth/Auth';


const DeleteUser = (props) => {
    // console.log(props);

    return(
        <div>
            <button onClick={props.clearLocalStorage, props.logoutButton}>Logout</button>
        </div>
    )
}

export default DeleteUser;