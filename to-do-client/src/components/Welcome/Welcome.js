import React from 'react';
import { Col } from 'antd';
import WelcomePic from '../../assets/Welcome2.png'
import './Welcome.css';

const Welcome = (props) => {

    const loginButton =() => props.setLoginStatus('login');
    const signupButton =() => props.setLoginStatus('signup');

    return(
        <div className="welcomePage">
            <div className="welcomeImage">
                <img id="background-image" src={WelcomePic} alt="background circles" style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
            </div>
            <div className="welcome">
            <Col><h1>Welcome</h1></Col>
            <Col><h5><a href='#' onClick={loginButton}>Login</a> or <a href='#' onClick={signupButton}>Sign Up</a> to get started</h5>
                </Col>
            </div>
        </div>
    )
}

export default Welcome;