// main body of page- las list view/create/edit/delete displayed
// when logged out, shows welcome/landing OR login/signup if user has selected that already,
// when logged in has list view/create/edit/delete displayed

import React, {useEffect, useState} from 'react';
import Auth from '../components/Auth/Auth';


const Display = (props) => {
    console.log(props);
    
    // useEffect(()=>{
    //     if(localStorage.getItem('token')){
    //         setSessionToken(localStorage.getItem('token'));
    //     }
    // }, [])



    return(
        <div>
            <Auth />
            Display Body
        </div>
    )
}

export default Display;