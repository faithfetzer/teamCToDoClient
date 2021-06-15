// login and register
import React, { useState } from 'react';
import APIURL from '../../helpers/environment';
import './Auth.css';
import {  Form, Input, Select, Button} from 'antd';

// need to separate out login/signup fields, leaving auth with toggle for now- FF
const Auth = (props) => {
    console.log(props)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [login, setLogin] = useState(true);
    
    const title = () => props.loginStatus == 'login' ? 'Login' : "Sign Up For a New Account"

    const signedIn = () =>{
        props.setLoginStatus('signedIn');
    }

    //  const loginToggle = (e) => {
    //      e.preventDefault();
    //      setLogin(!login);
    //      setEmail('');
    //      setPassword('');
    //      setFirstName('');
    //     setLastName('');
    //  }

    const handleSubmit = (e) => {
        e.preventDefault();
        let reqBody = props.loginStatus == 'login' ?
        {
            email: email,
            password: password
        } :
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        let url = props.loginStatus == 'login' ?
        `${APIURL}/user/login` :
        `${APIURL}/user/register`;

    console.log(url)

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
    .then(res => res.json())
    .then(json => props.updateLocalStorage(json.token))
    .then(signedIn())
    .catch(err => console.log(err));
    }
    
    const signupFields = () => props.loginStatus !== 'login' ?
    (
        <div>
            <label htmlFor='firstName'>First Name</label>
            <br />
            <Input type = "text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br />
            <label htmlFor='lastName'>Last Name</label>
            <br />
            <Input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
    ) : null;

    return(
            <Form className="login-signup">
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor="email">Email:</label>
                <br />
                <Input type="text" id='email' value={email} onChange={(e) =>setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <Input type ="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                {/* {<button onClick={loginToggle}>Login/Signup </button> } */}
                <br />
                <Button type ="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
    )
}


export default Auth;