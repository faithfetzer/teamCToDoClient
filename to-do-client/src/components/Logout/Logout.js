import React from 'react';
import Auth from '../Auth/Auth';


const Logout = (props) => {
    console.log(props);
    const clearToken = () =>{
        console.log('logout')
        localStorage.clear();
    }

    return(
        <div>
            <button onClick={clearToken}>Logout</button>
        </div>
    )
}

export default Logout;