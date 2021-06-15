import React, {useState} from 'react';
import Auth from '../Auth'
import {Form}from 'antd'
import APIURL from '../../../helpers/environment';


const DeleteUser = (props) => {
    console.log(props);
    // will use props.sessionToken for the fetch token
    // endppint will be

    const [emailToDelete, setEmailToDelete] = useState('');
    const [passwordToDelete, setPasswordToDelete] = useState('');

    const deleteUser = (e) => {
        e.preventDefault();
        let req =
        {
            email: emailToDelete,
            password: passwordToDelete
        } 
        let url = `${APIURL}/user/delete/`;
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(req),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(console.log('user deleted'))
        .then(props.setSessionToken('undefined'))
        .catch(err => console.log(err))
    } 


    return(
        <Form>
            <h2>Enter email and password to delete your user account</h2>
            <h5>Warning! This is final and cannot be undone</h5>

            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id='email' value={emailToDelete} onChange={(e) =>setEmailToDelete(e.target.value)} />
            <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type ="text" id='password' value={passwordToDelete} onChange={(e) => setPasswordToDelete(e.target.value)} />
                <br />
                <button type ="submit" onClick={deleteUser}>Submit</button>
        </Form>
    )
}

export default DeleteUser;