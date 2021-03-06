import React, { useState, useEffect } from 'react';
import DisplayList from './ViewList/ViewList';
import APIURL from '../../helpers/environment';
import ListItemCreate from '../Lists/CreateListItem/CreateListItem'
// import ViewCompleted from './ViewCompleted/ViewCompleted'
import ViewImportant from './ViewImportant/ViewImportant'; 
import DeleteUser from '../Auth/DeleteUser/DeleteUser';
import FaithCompletedView from './ViewImportant/FaithCompletedView';
import {Button} from 'antd';
import './ListFetch.css'

const List = props => {
    console.log(props);
    const [ list, setList ] = useState([]);
    const [ completedStatus, setCompletedStatus] = useState(false);
    const [ create, setCreate] = useState(false);
    const [ importantStatus, setImportantStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] =useState(false);
    const [viewStatus, setViewStatus] = useState(true);

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
                <ListItemCreate create={create} setCreate={setCreate} sessionToken={props.sessionToken} fetchList={fetchList}/>)
        } else if(importantStatus){
            // console.log('important')
            return(
                <ViewImportant importantStatus={importantStatus} setImportantStatus={setImportantStatus} sessionToken={props.sessionToken} setList={setList} list={list} fetchList={fetchList}/>)
        } else if(completedStatus){
            // console.log('completed')
            return(
                // <div completed={completed} setCompleted={setCompleted}><ViewCompleted sessionToken = {props.sessionToken} setList={setList} list={list}/></div>)
                <div completedStatus={completedStatus} setCompletedStatus={setCompletedStatus}><FaithCompletedView sessionToken = {props.sessionToken} setList={setList} list={list} fetchList={fetchList}/></div>)
        } else if(deleteStatus){
            // console.log('completed')
            return(
                <DeleteUser deleteStatus={deleteStatus} setDeleteStatus={setDeleteStatus} sessionToken={props.sessionToken} setSessionToken={props.setSessionToken}/>)
        } else{
            return(
            <DisplayList list={list} sessionToken={props.sessionToken} setList={setList} createButton={createButton()} setViewStatus={setViewStatus} fetchList={fetchList}/>)
    }
    }

    const createButton = () =>{
        if(create){
            return(
                <Button className="goBackButton" onClick={() => {setCreate(false)}}>Close</Button>
            )
        } else {
            return(
                <Button onClick={() => {setCreate(true); setImportantStatus(false); setCompletedStatus(false); setDeleteStatus(false)}}>Create Item</Button>
            )
        }
    }
    const completedButton = () =>{
        if(completedStatus){
            return(
                <Button className="goBackButton" onClick={() => {setCompletedStatus(false)}}>View Active Items</Button>
            )
        } else {
            return(
                <Button onClick={() => {setCompletedStatus(true); setCreate(false); setImportantStatus(false); setDeleteStatus(false)}}>View Completed Items</Button>
            )
        }
    }

    const importantButton = () =>{
        if(importantStatus){
            return(
                <Button className="goBackButton" onClick={() => {setImportantStatus(false)}}>View All Items</Button>
            )
        } else {
            return(
                <Button onClick={() => {setImportantStatus(true); setCompletedStatus(false); setCreate(false); setDeleteStatus(false)}}>View Important</Button>
            )

        }
    }
   

    const deleteUserButton = () =>{
        if(deleteStatus ===false){
            // console.log('delete')
            return(
                <Button id="delete" onClick={() => {setDeleteStatus(true); setImportantStatus(false); setCompletedStatus(false); setCreate(false);}}>Delete User Account</Button>
                )
            } else {
                return(
                    <Button onClick={() => {setDeleteStatus(false); setImportantStatus(false); setCompletedStatus(false); setCreate(false);}}>Cancel User Delete</Button>
                    )
                }
            }

    return (
        <>
        <div className="listFetch"> 
            <div>
            {createButton()}
            {completedButton()}
            {importantButton()}
            </div>
            <br/>
            {/* Need to make it so that when in view improtant/view completed, buttons say "view all"/"view to do list" */}
            {/* above gives me errors- when i try to make buttons functional, too many re-renders- FF */}
            {displayReturn()}
            
            {deleteUserButton()}
        </div>
    </>

    )

}



export default List;