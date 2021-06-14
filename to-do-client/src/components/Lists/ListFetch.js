import React, { useState, useEffect } from 'react';
import DisplayList from './ViewList/ViewList';
import {Table, Badge} from 'antd';

const List = props => {
    console.log(props);
    const [ List, setList ] = useState([]);
    

    const fetchList = () => {
        let url = 'http://localhost:4000/list/id';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setList(json))
    } 

    useEffect(() => {
        fetchList();
    })




    return (
        <>
        
    
            <table>
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Date</th>
                        <th>Due by</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Complete?</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayList/>
                </tbody>
            </table>
        </>
    )



}

export default List;