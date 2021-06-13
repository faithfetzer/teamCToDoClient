import React from 'react';
import Auth from '../Auth/Auth';


const Logout = (props) => {
    console.log(props);
    // const clearToken = () =>{
    //     console.log('logout')
    //     localStorage.clear();
    //     setSessionToken('');
    // }

    return(
        <div>
            <button>Logout</button>
        </div>
    )
}

export default Logout;