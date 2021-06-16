import React, {useState, useEffect}from "react";
// import {Table} from 'reactstrap';
import EditListItem from '../EditListItem/EditListItem';
import APIURL from '../../../helpers/environment';
import { Button, Table } from "antd";
import ViewCompleted from "../ViewCompleted/ViewCompleted";


const FaithCompletedView = (props) => {
    console.log(props);
    const [itemToEdit, setItemToEdit] = useState(undefined);
    const [ completedList, setCompletedList ] = useState([]);
    const [entryToEdit, setEntryToEdit] = useState(undefined);


    const viewCompleted = () => {
        console.log(`${APIURL}/list/completed`)
        fetch(`${APIURL}/list/completed`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) 
        .then(res => res.json())
        .then(json => setCompletedList(json))

        console.log(completedList)
    }

    const deleteListItem = (id) => {
        // console.log('id', id)
        fetch(`${APIURL}/list/delete/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => console.log(res))
        .then(viewCompleted())
    }

    useEffect(()=>{
        console.log('view completed')
        viewCompleted()
    }, []);

    const listMapperCompleted = () => {
    
        return completedList.map((list, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{list.id}</th> */}
                    <td>{list.name}</td>
                    <td>{list.date}</td>
                    <td>{list.timedue}</td>
                    <td>{list.description}</td>
                    <td>{list.duration}</td>
                    <td>{completeBoolean(list.completed)}</td>
                    <td>{booleanReturn(list.important)}</td>
                    <td><Button onClick={() => {setItemToEdit(list.id); setEntryToEdit(list)}}>Edit</Button></td>
                    <td><Button  onClick={() => {deleteListItem(list.id)}}>Delete</Button></td>
                    
                </tr>
            )
        })

    }

    const booleanReturn = (info) => info === true ? '!!!!' : null
    const completeBoolean = (info) => info === true ? 'Done!' : "not yet"

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

    const displayReturnCompleted = () => itemToEdit ? 
    <EditListItem sessionToken={props.sessionToken} entryToEdit={entryToEdit} setList={props.setList} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} fetchList={props.fetchList}/> : 
        // <Table columns={columns} dataSource={data} pagination={false} onChange={onChange}></Table>

        <table>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listMapperCompleted()}
            </tbody>
        </table>

    return(
        <>
        <h1>Completed Items</h1>
        {displayReturnCompleted()}
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

export default FaithCompletedView;
// goes to /list/ endpoint