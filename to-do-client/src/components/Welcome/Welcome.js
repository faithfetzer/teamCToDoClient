import React from 'react';
import { Row, Col} from 'antd';
import './Welcome.css';

const Welcome = (props) => {

    const loginButton =() => props.setLoginStatus('login');
    const signupButton =() => props.setLoginStatus('signup');

    return(
        <div className="welcomePage">
            {/* <div className="welcomeImage">
                <img id="background-image" src={WelcomePic} alt="background circles" style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
            </div> */}
            <Col span={12} offset={12}><h1>Welcome</h1></Col>
            <Col><h5 span={12} offset={12}><b className="bold" onClick={loginButton}>Login</b> or <b className="bold" onClick={signupButton}>Sign Up</b> to get started</h5></Col>
        </div>
    )
}

export default Welcome;