import React, { useState } from 'react';
import APIURL from '../../../helpers/environment';




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
        //add some sort of pop up here
        <div>
            Edit List Item
            <button onClick={() => { props.setItemToEdit(undefined) }}>Cancel</button>
            <button>Submit</button>
            {/* <div className='header'>
                Edit To-Do List
            </div>
            <div className='body'>
                table with all params w/ input fields 
            </div>
            <div className='footer'>
                Save edit button
            </div> */}

        </div>
    )

}


export default EditListItem;
// goes to /list/update endpoint
