import React, { useState } from 'react';
import APIURL from '../../../helpers/environment';
import { Input } from 'antd';
//import Popup from './EditPopup';


const EditListItem = (props) => {
    console.log(props)
    //console.log(props.list.itemToEdit);
    const [editName, setEditName] = useState(props.entryToEdit.name);
    const [editDate, setEditDate] = useState(props.entryToEdit.date);
    const [editTimeDue, setEditTimeDue] = useState(props.entryToEdit.timedue);
    const [editDescription, setEditDescription] = useState(props.entryToEdit.description);
    const [editDuration, setEditDuration] = useState(props.entryToEdit.duration);
    const [editCompleted, setEditCompleted] = useState(props.entryToEdit.completed);
    const [editImportant, setEditImportant] = useState(props.entryToEdit.important);
    const listUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/list/${props.itemToEdit}`, {
            method: 'PUT',
            body: JSON.stringify({list: {name: editName, date: editDate, timedue: editTimeDue, description: editDescription, duration: editDuration}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res => {
            //props.setList([]);
            props.setItemToEdit(undefined);
        }))
    }


    return (
        <div> Edit List
            <form className="editList">
                <label for='nameInp'> Name: </label>
            <Input className='nameInp' placeholder={editName} bordered={false}  />
            <label for='nameInp'> Date: </label>
            <Input placeholder={editDate} bordered={false}  />
            <label for='nameInp'> Time Due: </label>
            <Input placeholder={editTimeDue} bordered={false}  />
            <label for='nameInp'> Description: </label>
            <Input placeholder={editDescription} bordered={false}  />
            <label for='nameInp'> Duration: </label>
            <Input placeholder={editDuration} bordered={false}  />
            <button> Save </button>
            {/* <button type='submit' onClick={listUpdate}>Save</button> */}
            </form>
            
        </div>
    )

}






export default EditListItem;
// goes to /list/update endpoint
