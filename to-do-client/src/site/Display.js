// main body of page- las list view/create/edit/delete displayed
// when logged out, shows welcome/landing OR login/signup if user has selected that already,
// when logged in has list view/create/edit/delete displayed

import React, { useEffect, useState } from "react";
import Auth from "../components/Auth/Auth";
import ListFetch from '../components/Lists/ListFetch';
import Welcome from '../components/Welcome/Welcome';
import './Display.css'

const Display = (props) => {
    // console.log(props);
    // console.log(props.loginStatus)

    const displayView = () => {
        if(props.loginStatus === 'login' || props.loginStatus === 'signup'){
            return(
                <Auth updateLocalStorage={props.updateLocalStorage} clearLocalStorage={props.clearLocalStorage} sessionToken={props.sessionToken} loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus}/>
            )
        } else if(props.loginStatus === 'signedIn' && props.sessionToken !== undefined){
            return(
                <ListFetch sessionToken={props.sessionToken}/>
            )
        } else {
            return(
                <Welcome loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus}/>
            )
        }
    }

    useEffect(() => {
        console.log(' display view')
            displayView()
        }, [props.loginStatus]);

    return (
        <div className="body">
            {displayView()}
        </div>
    );
};

export default Display;
