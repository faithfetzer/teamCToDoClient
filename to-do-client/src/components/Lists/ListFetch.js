import React, { useState, useEffect } from 'react';
import DisplayList from './ViewList/ViewList';
import APIURL from '../../helpers/environment';
import ListItemCreate from '../Lists/CreateListItem/CreateListItem'
import ViewCompleted from './ViewCompleted/ViewCompleted'
import ViewImportant from './ViewImportant/ViewImportant'; 
import DeleteUser from '../Auth/DeleteUser/DeleteUser';
import {Button} from 'antd';
import './ListFetch.css'
import CompletedFetch from './ViewCompleted/CompletedFetch';

const List = props => {
    // console.log(props);
    const [ list, setList ] = useState([]);
    const [ completed, setCompleted] = useState(false);
    const [ create, setCreate] = useState(false);
    const [ important, setImportant] = useState(false);
    const [deleteStatus, setDeleteStatus] =useState(false);

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
             console.log('completed')
            return(

            <div completed={completed} setCompleted={setCompleted}><ViewCompleted sessionToken = {props.sessionToken} /></div>)
        

            
        } else if(deleteStatus){
            // console.log('completed')
            return(
            <DeleteUser deleteStatus={deleteStatus} setDeleteStatus={setDeleteStatus} sessionToken={props.sessionToken} setSessionToken={props.setSessionToken}/>)
        } else{

        return(
        <DisplayList list={list} sessionToken={props.sessionToken} setList={setList}/>)
    }
    }

    const createButton = () =>{
        if(create){
            return(
                <Button className="goBackButton" onClick={() => {setCreate(false)}}>Close</Button>
            )
        } else {
            return(
                <Button onClick={() => {setCreate(true); setImportant(false); setCompleted(false); setDeleteStatus(false)}}>Create Item</Button>
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
                <Button onClick={() => {setCompleted(true); setCreate(false); setImportant(false); setDeleteStatus(false)}}>View Completed Items</Button>
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
                <Button onClick={() => {setImportant(true); setCompleted(false); setCreate(false); setDeleteStatus(false)}}>View Important</Button>
            )
        }
    }


    const deleteUserButton = () =>{
        if(deleteStatus ===false){
            console.log('delete')
            return(
            <Button id="delete" onClick={() => {setDeleteStatus(true); setImportant(false); setCompleted(false); setCreate(false);}}>Delete User Account</Button>
            )
        } else {
            return(
            <Button onClick={() => {setDeleteStatus(false); setImportant(false); setCompleted(false); setCreate(false);}}>Cancel User Delete</Button>
            )
        }
    }

    return (
        <>
            {/* <button>
            <DisplayList list={list} sessionToken={props.sessionToken}/>
        
            </button> */}
        

        <div className="listFetch"> 
            {createButton()}
            {completedButton()}
            {importantButton()}
            {/* Need to make it so that when in view improtant/view completed, buttons say "view all"/"view to do list" */}
            {/* above gives me errors- when i try to make buttons functional, too many re-renders- FF */}
            {displayReturn()}
            
            {deleteUserButton()}
        </div>
        </>
    )

}


export default List;