import React, { useState, useEffect } from 'react';
import DisplayList from './ViewList/ViewList';
import APIURL from '../../helpers/environment';
import ListItemCreate from '../Lists/CreateListItem/CreateListItem'
import ViewCompleted from './ViewImportant/ViewImportant'
import ViewImportant from './ViewImportant/ViewImportant'; 
import {Button} from 'antd';
import './ListFetch.css'

const List = props => {
    // console.log(props);
    const [ list, setList ] = useState([]);
    const [ completed, setCompleted] = useState(false);
    const [ create, setCreate] = useState(false);
    const [ important, setImportant] = useState(false);

    const fetchList = () => {
        let url = `${APIURL}/list/`;
        console.log(url)
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
        fetchList()
    }, []);

    const displayReturn = () =>{
        if(create){
            // console.log('create')
            return(
            <ListItemCreate create={create} setCreate={setCreate}/>)
        } else if(important){
            // console.log('important')
            return(
            <ViewImportant important={important} setImportant={setImportant} sessionToken={props.sessionToken} setList={setList} list={list}/>)
        } else if(completed){
            // console.log('completed')
            return(
            <div completed={completed} setCompleted={setCompleted}>Completed View</div>)
        } else
        return(
        <DisplayList list={list} sessionToken={props.sessionToken} setList={setList}/>)
    }

    const createButton = () =>{
        if(create){
            return(
                <Button className="goBackButton" onClick={() => {setCreate(false)}}>Close</Button>
            )
        } else {
            return(
                <Button onClick={() => {setCreate(true); setImportant(false); setCompleted(false);}}>Create Item</Button>
            )
        }
    }
    const completedButton = () =>{
        if(completed){
            return(
                <Button className="goBackButton" onClick={() => {setCompleted(false)}}>View Active Items</Button>
            )
        } else {
            return(
                <Button onClick={() => {setCompleted(true); setCreate(false); setImportant(false)}}>View Completed Items</Button>
            )
        }
    }

    const importantButton = () =>{
        if(important){
            return(
                <Button className="goBackButton" onClick={() => {setImportant(false)}}>View All Items</Button>
            )
        } else {
            return(
                <Button onClick={() => {setImportant(true); setCompleted(false); setCreate(false);}}>View Important</Button>
            )
        }
    }
    return (

        <>
            <button>
            <DisplayList list={list} sessionToken={props.sessionToken}/>
            </button>
        </>

        <div className="listFetch"> 
            {createButton()}
            {completedButton()}
            {importantButton()}
            {/* Need to make it so that when in view improtant/view completed, buttons say "view all"/"view to do list" */}
            {/* above gives me errors- when i try to make buttons functional, too many re-renders- FF */}
            {displayReturn()}
            
            <Button id="delete">Delete User Account</Button>
        </div>

    )

}

export default List;