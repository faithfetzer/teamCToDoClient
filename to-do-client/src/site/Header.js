// has login/signup/logout
// when at main welcome page has login and signup
// when on login page, only shows signup at the top
// when on signup/register page, only shows login
// when logged in, only shows logout

import React from 'react';
import Login from '../components/Auth/Auth';
import Logout from '../components/Logout/Logout'
import Auth from '../components/Auth/Auth'

const Header = (props) => {
    console.log(props);

    const buttonToggle = () =>{
        return props.sessionToken === undefined ? <Auth updateLocalStorage={props.updateLocalStorage}/> : <Logout clearLocalStorage={props.clearLocalStorage}/>
    }
    return(
        <div>
            {buttonToggle()}
        </div>
    )
}

export default Header;