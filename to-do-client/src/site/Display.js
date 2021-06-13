// main body of page- las list view/create/edit/delete displayed
// when logged out, shows welcome/landing OR login/signup if user has selected that already,
// when logged in has list view/create/edit/delete displayed

import React from 'react';
import Auth from '../components/Auth/Auth';

const Display = () => {

    return(
        <div>
            <Auth />
            Display Body
        </div>
    )
}

export default Display;