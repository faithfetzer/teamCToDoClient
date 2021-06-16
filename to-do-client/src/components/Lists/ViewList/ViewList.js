import React, { useState } from "react";
// import {Table} from 'reactstrap';
import EditListItem from '../EditListItem/EditListItem';
import APIURL from '../../../helpers/environment';
import './ViewList.css'
import { Button, Table, Checkbox, TableProps } from "antd";
import { SortAscendingOutlined } from "@ant-design/icons";


const DisplayList = (props) => {
    // console.log(props.list);
    const [itemToEdit, setItemToEdit] = useState(undefined);
    const [entryToEdit, setEntryToEdit] = useState(undefined);


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
            return (
                <tr key={index}>
                    {/* <th scope="row">{list.id}</th> */}
                    <td>{list.name}</td>
                    <td>{list.date}</td>
                    <td>{list.timedue}</td>
                    <td>{list.description}</td>
                    <td>{list.duration}</td>
                    <td>{booleanReturn(list.important)}</td>
                    {/* <td>{list.important}</td> */}
                    <td><Button onClick={() => { setItemToEdit(list.id); setEntryToEdit(list)}}>Edit</Button></td>
                    <td><Button onClick={() => { deleteListItem(list.id) }}>Delete</Button></td>

                </tr>
            )
        })

    }

    const booleanReturn = (info) => info === true ? '!' : null

    const columns = [
        {
            title: 'Item Name',
            dataIndex: 'name',
            key: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name - b.name
        },
        {
            title: 'Date Due',
            dataIndex: 'date',
            key: 'date',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.date - b.date
        },
        {
            title: 'Time Due',
            dataIndex: 'timedue',
            key: 'time',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.time - b.time
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.description - b.description
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.duration - b.duration
        },
        {
            title: 'Completed?',
            dataIndex: 'completed',
            key: 'completed',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.completed - b.completed
        },
        {
            title: 'Important',
            dataIndex: 'important',
            key: 'important',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.important - b.important
        },
        // {
        //     title: null,
        //     dataIndex: <Button onClick={() => { setItemToEdit('id') }}>Edit</Button>,
        //     key: 'edit'
        // },
        // {
        //     title: null,
        // },
    ];

    const data = props.list

    function onChange(sorter) {
        console.log('params', sorter)
    }

    const displayReturn = () => itemToEdit ?
        <EditListItem sessionToken={props.sessionToken} entryToEdit={entryToEdit} setList={props.setList} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} /> :
        // <Table columns={columns} dataSource={data} pagination={false} onChange={onChange}></Table>
        <>
        <h1>Your ToDo List</h1>
        <table>
                <tr>
                    <th>Item Name</th>
                    <th>Date Due</th>
                    <th>Time Due</th>
                    <th>Description</th>
                    <th>Duration</th>
                    {/* <th>Completed?</th> */}
                    <th>Important</th>
                    <th></th>
                    <th></th>
                </tr>
            <tbody>
                {listMapper()}
            </tbody>
        </table>
        </>





    return (
        <div className="fetchTable">
            {displayReturn()}
        </div>
    )
}

export default DisplayList;
// goes to /list/ endpoint