// has login/signup/logout
// when at main welcome page has login and signup
// when on login page, only shows signup at the top
// when on signup/register page, only shows login
// when logged in, only shows logout

import React from 'react';
import Logout from '../components/Logout/Logout'
import Auth from '../components/Auth/Auth'

const Header = (props) => {
    // console.log(props);

    const loginButton =() => props.setLoginStatus('login');
    const signupButton =() => props.setLoginStatus('signup');
    const logoutButton =() => props.setLoginStatus(undefined);

    const buttonToggle = () =>{
        // console.log(props.loginStatus)
        if(props.loginStatus === 'login'){
            return(
                <button onClick={signupButton}>Signup</button>
            )
        } else if(props.loginStatus === 'signup'){
            return(
                <button onClick={loginButton}>Login</button>
            )
        } else if(props.loginStatus === 'signedIn'){
            return(
                <Logout logoutButton={logoutButton} clearLocalStorage={props.clearLocalStorage}/>
            )
        } else {
            return(
                <div>
                    <button onClick={loginButton}>Login</button>
                    <button onClick={signupButton}>Signup</button>
                </div>
            )
        } 
    }
    return(
        <div>
            {buttonToggle()}
        </div>
    )
}

export default Header;