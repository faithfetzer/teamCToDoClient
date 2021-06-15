import React, {useState}from "react";
// import {Table} from 'reactstrap';
import EditListItem from '../EditListItem/EditListItem';
import APIURL from '../../../helpers/environment';
import './ViewList.css'
import { Button, Table } from "antd";


const DisplayList = (props) => {
    // console.log(props);
    const [itemToEdit, setItemToEdit] = useState(undefined);

    const deleteListItem = (id) => {
        fetch(`${APIURL}/list/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) 
        .then(() => props.setList([]))
    }

    const listMapper = () => {

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
                        {/* <td><button>Edit</button></td> */}
                        <td><Button onClick={() => {setItemToEdit(list.id)}}>Edit</Button></td>
                        <td><Button onClick={() => {deleteListItem(list.id)}}>Delete</Button></td>
                        
                    </tr>
                )
            })

        }

    const displayReturn = () => itemToEdit? 
        <EditListItem sessionToken={props.sessionToken} setList={props.setList} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit}/> : 
        <Table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Date Due</th>
                    <th>Time Due</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Completed?</th>
                    <th>Important</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                {listMapper()}
            </tbody>
        </Table>

    



    return(
        <div className="fetchTable">
        
        <h1>Your ToDo List</h1>
        {displayReturn()}
        {/*<Table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Date Due</th>
                    <th>Time Due</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Completed?</th>
                    <th>Important</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                {listMapper()}
            </tbody>
        </Table>

        <EditListItem sessionToken={props.sessionToken} list={props.list}/> */}
        </div>
    )
}

export default DisplayList;
// goes to /list/ endpoint