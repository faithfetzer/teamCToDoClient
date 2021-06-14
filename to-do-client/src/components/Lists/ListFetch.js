import React, { useState, useEffect } from 'react';
import DisplayList from './ViewList/ViewList';
import APIURL from '../../helpers/environment';
// import {Table, Badge} from 'antd';

const List = props => {
    // console.log(props);
    const [ list, setList ] = useState([]);
    

    const fetchList = () => {
        let url = `${APIURL}/list/`;

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setList(json))
        .then(console.log('list', list))
    } 

    useEffect(() => {
        console.log('fetch list')
        fetchList();
    }, [list])




    return (
        <>
            <DisplayList list={list} sessionToken={props.sessionToken}/>
        </>
    )



}

export default List;