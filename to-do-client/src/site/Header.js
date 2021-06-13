// has login/signup/logout
// when at main welcome page has login and signup
// when on login page, only shows signup at the top
// when on signup/register page, only shows login
// when logged in, only shows logout

import React from 'react';
import Login from '../components/Auth/Auth';
import Logout from '../components/Logout/Logout'

const Header = () => {

    return(
        <div>
            Header/Navbar
            <Logout/>
        </div>
    )
}

export default Header;