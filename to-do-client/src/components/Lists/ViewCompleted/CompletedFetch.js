import { List } from 'antd/lib/form/Form';
import React, {useState, useEffect}from 'react';
import APIURL from '../../../helpers/environment';
import DisplayList from '../ViewList/ViewList';

const CompletedFetch = (props) => {
    //console.log(props);
    const [completed, setCompleted] = useState([]);

    const fetchCompleted = () => {
        let url = `${APIURL}/list/completed`;

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setCompleted(json))
        //.then(console.log('list/completed', list/completed)
    }

    useEffect(() => {
        fetchCompleted()
    }, [list.completed]);

    // return (
    //     <>
    //         <DisplayList completed={completed} sessionToken={props.sessionToken} />
    //      </>
    // )
}

export default CompletedFetch;