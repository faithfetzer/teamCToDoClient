import React from 'react';
import WelcomePic from '../../assets/Welcome2.png'
import './Welcome.css';

const Welcome = (props) => {
    const loginButton =() => props.setLoginStatus('login');
    const signupButton =() => props.setLoginStatus('signup');
    return(
        <div className="welcome">
            <h1>Welcome</h1>
            <h5><a href='#' onClick={loginButton}>Login</a> or <a href='#' onClick={signupButton}>Sign Up</a> to get started</h5>
            <img id="background-image" src={WelcomePic} alt="background circles" style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
        </div>
    )
}

export default Welcome;