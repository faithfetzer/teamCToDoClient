import React, {useState, useEffect}from "react";
// import {Table} from 'reactstrap';
import EditListItem from '../EditListItem/EditListItem';
import APIURL from '../../../helpers/environment';
import { Button, Table } from "antd";


const ViewImportant = (props) => {
    // console.log(props);
    const [itemToEdit, setItemToEdit] = useState(undefined);


    const viewImportant = () => {
        fetch(`${APIURL}/list/important`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) 
        .then(res => res.json())
        .then(json => props.setList(json))
    }

    const deleteListItem = (id) => {
        fetch(`${APIURL}/list/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) 
        .then(() => props.fetchList())
    }

    useEffect(()=>{
        viewImportant()
    }, [props.setImportant]);

    const listMapper = async () => {
        await viewImportant()
        console.log("mapper", props.list)
        return props.list.map((list, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{list.id}</th> */}
                    <td>{list.name}</td>
                    <td>{list.date}</td>
                    <td>{list.timedue}</td>
                    <td>{list.description}</td>
                    <td>{list.duration}</td>
                    <td>{list.completed}</td>
                    <td>{list.important}</td>
                    <td><Button onClick={() => {setItemToEdit(list.id)}}>Edit</Button></td>
                    <td><Button  onClick={() => {deleteListItem()}}>Delete</Button></td>
                    
                </tr>
            )
        })

    }

    const displayReturn = () => itemToEdit? 
        <EditListItem sessionToken={props.sessionToken} setList={props.setList} itemToEdit={itemToEdit}/> : 
        <Table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>date</th>
                    <th>time due</th>
                    <th>description</th>
                    <th>duration</th>
                    <th>completed</th>
                    <th>important</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                {listMapper()}
            </tbody>
        </Table>

    return(
        <>
        <h1>Important Items</h1>
        {/* {displayReturn()} */}
        {/* <Table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>date</th>
                    <th>time due</th>
                    <th>description</th>
                    <th>duration</th>
                    <th>completed</th>
                    <th>important</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                {listMapper()}
            </tbody>
        </Table> */}

        {/* <EditListItem sessionToken={props.sessionToken} list={props.list}/> */}
        </>
    )
}

export default ViewImportant;
// goes to /list/ endpoint