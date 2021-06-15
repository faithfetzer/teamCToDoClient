import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import APIURL from '../../../helpers/environment'

const ViewCompleted = (props) => {
    // console.log(props);
    const [itemCompleted, setItemCompleted] = useState(undefined);

    const viewCompleted = () => {
        fetch(`${APIURL}/list/completed`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => props.setList(json))
    }
}

//not completed yet just a stopping point.