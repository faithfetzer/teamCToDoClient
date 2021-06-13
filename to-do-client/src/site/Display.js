// main body of page- las list view/create/edit/delete displayed
// when logged out, shows welcome/landing OR login/signup if user has selected that already,
// when logged in has list view/create/edit/delete displayed

import React, { useEffect, useState } from "react";
import Auth from "../components/Auth/Auth";
import ListFetch from '../components/Lists/ListFetch';

const Display = (props) => {
    console.log(props);

    const displayView = () => {
        return props.sessionToken !== undefined ? <ListFetch sessionToken={props.sessionToken} /> : <Auth updateLocalStorage={props.updateLocalStorage} />
    }

    return (
        <div>
            {displayView()}
            <ListFetch />
        </div>
    );
};

export default Display;
