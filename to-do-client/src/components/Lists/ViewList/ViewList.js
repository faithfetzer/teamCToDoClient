import React from "react";
import {Table} from 'reactstrap';


const DisplayList = (props) => {
    console.log(props);

    const deleteListItem = (listItem) => {
        fetch(`http://localhost:3000/list/${props.list.id}`, {
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
                    <th scope="row">{list.id}</th>
                    <td>{list.name}</td>
                    <td>{list.date}</td>
                    <td>{list.timedue}</td>
                    <td>{list.description}</td>
                     <td>{list.duration}</td>
                     <td>{list.completed}</td>
                     <td><button  onClick={() => {deleteListItem(listItem)}}>Delete</button></td>
                     <td>{list.important}</td>
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
                </tr>
            </thead>
            <tbody>
                {listMapper()}
            </tbody>
        </Table>
              </>
    )
}

export default DisplayList;
// goes to /list/ endpoint