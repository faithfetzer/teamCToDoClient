import React from "react";
import {Table} from 'reactstrap';
import EditListItem from '../EditListItem/EditListItem';
import APIURL from '../../../helpers/environment';


const DisplayList = (props) => {
    // console.log(props);

    const deleteListItem = (props) => {
        fetch(`${APIURL}/list/${props.list.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        .then(() => props.fetchList())
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
                    <td><button>Edit</button></td>
                    <td><button  onClick={() => {deleteListItem(props)}}>Delete</button></td>
                    
                </tr>
            )
        })

    }



    return(
        <>
        <h1>Your ToDo List</h1>
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

        <EditListItem sessionToken={props.sessionToken} list={props.list}/>
        </>
    )
}

export default DisplayList;
// goes to /list/ endpoint