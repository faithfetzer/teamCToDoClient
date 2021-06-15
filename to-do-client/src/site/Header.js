// has login/signup/logout
// when at main welcome page has login and signup
// when on login page, only shows signup at the top
// when on signup/register page, only shows login
// when logged in, only shows logout

import React from 'react';
import Logout from '../components/Logout/Logout'
import Auth from '../components/Auth/Auth'
import {ProfileOutlined} from '@ant-design/icons';
import {Row, Layout, Col, Button} from 'antd';
import './Header.css';

const Header = (props) => {
    // console.log(props);

    const loginButton =() => props.setLoginStatus('login');
    const signupButton =() => props.setLoginStatus('signup');
    const logoutButton =() => props.setLoginStatus(undefined);

    const buttonToggle = () =>{
        // console.log(props.loginStatus)
        if(props.loginStatus === 'login'){
            return(
                <Button onClick={signupButton}>Not registered? Signup here</Button>
            )
        } else if(props.loginStatus === 'signup'){
            return(
                <Button onClick={loginButton}>Already registered? Login here</Button>
            )
        } else if(props.loginStatus === 'signedIn'){
            return(
                <Logout logoutButton={logoutButton} clearLocalStorage={props.clearLocalStorage}/>
            )
        } else {
            return(
                <>
                    <Button onClick={loginButton}>Login</Button>
                    <Button onClick={signupButton}>Signup</Button>
                </>
            )
        } 
    }
    return(
        <Layout className="header">
            <Row>
                <ProfileOutlined style={{backgroundColor: '#EEE0CB'}}/>
                {buttonToggle()}
            </Row>
        </Layout>
    )
}

export default Header;