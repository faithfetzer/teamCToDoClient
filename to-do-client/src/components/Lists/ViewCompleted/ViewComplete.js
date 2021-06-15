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

    const listMapper = () => {

        return props.list.map((list, index) => {
            return (
                <tr key={index}>
                    {/* <th scope="row">{list.id}</th> */}
                    <td>{list.name}</td>
                    <td>{list.date}</td>
                    <td>{list.description}</td>
                    <td>{list.duration}</td>
                    <td>{list.completed}</td>
                    <td>{list.important}</td>
                    {/* <td><button>Edit</button></td> */}
                    <td><Button onClick={() => {
                        setItemToEdit(list.id) }}>Edit</Button></td>
                    <td><Button onClick={() => {
                        completedListItem(list.id) }}>Complete</Button></td>
                </tr>
            )
        })
    }
}
    // const colums =[
    //     {
    //         title: 'Item Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.name - b
    //     }
    // ]
