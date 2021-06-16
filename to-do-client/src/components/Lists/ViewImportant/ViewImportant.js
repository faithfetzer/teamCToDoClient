import React, {useState, useEffect}from "react";
// import {Table} from 'reactstrap';
import EditListItem from '../EditListItem/EditListItem';
import APIURL from '../../../helpers/environment';
import { Button, Table } from "antd";


const ViewImportant = (props) => {
    console.log(props);
    const [itemToEdit, setItemToEdit] = useState(undefined);
    const [ importantList, setImportantList ] = useState([]);


    const viewImportant = () => {
        fetch(`${APIURL}/list/important`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) 
        .then(res => res.json())
        .then(json => setImportantList(json))

        console.log(importantList)
    }

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

    useEffect(()=>{
        console.log('view important')
        viewImportant()
    }, []);

    const listMapper = () => {
    
        return importantList.map((list, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{list.id}</th> */}
                    <td>{list.name}</td>
                    <td>{list.date}</td>
                    <td>{list.timedue}</td>
                    <td>{list.description}</td>
                    <td>{list.duration}</td>
                    {/* <td>{list.completed}</td> */}
                    <td>{booleanReturn(list.important)}</td>
                    <td><Button onClick={() => {setItemToEdit(list.id)}}>Edit</Button></td>
                    <td><Button  onClick={() => {deleteListItem()}}>Delete</Button></td>
                    
                </tr>
            )
        })

    }

    const booleanReturn = (info) => info === true ? '!' : null

    // const columns = [
    //     {
    //         title: 'Item Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.name - b.name
    //     },
    //     {
    //         title: 'Date Due',
    //         dataIndex: 'date',
    //         key: 'date',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.date - b.date
    //     },
    //     {
    //         title: 'Time Due',
    //         dataIndex: 'timedue',
    //         key: 'time',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.time - b.time
    //     },
    //     {
    //         title: 'Description',
    //         dataIndex: 'description',
    //         key: 'description',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.description - b.description
    //     },
    //     {
    //         title: 'Duration',
    //         dataIndex: 'duration',
    //         key: 'duration',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.duration - b.duration
    //     },
    //     {
    //         title: 'Completed?',
    //         dataIndex: 'completed',
    //         key: 'completed',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.completed - b.completed
    //     },
    //     {
    //         title: 'Important',
    //         dataIndex: 'important',
    //         key: 'important',
    //     },
    //     {
    //         title: null,
    //         dataIndex: <Button onClick={() => { setItemToEdit('id') }}>Edit</Button>,
    //         key: 'edit'
    //     },
    //     {
    //         title: null,
    //     },
    // ];

    // const data = importantList

    // function onChange(sorter) {
    //     console.log('params', sorter)
    // }

    const displayReturn = () => itemToEdit? 
        <EditListItem sessionToken={props.sessionToken} setList={props.setList} itemToEdit={itemToEdit}/> : 
        // <Table columns={columns} dataSource={data} pagination={false} onChange={onChange}></Table>

        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>date</th>
                    <th>time due</th>
                    <th>description</th>
                    <th>duration</th>
                    {/* <th>completed</th> */}
                    <th>important</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listMapper()}
            </tbody>
        </table>

    return(
        <>
        <h1>Important Items</h1>
        {displayReturn()}
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