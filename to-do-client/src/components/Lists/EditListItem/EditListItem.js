import React, { useState } from 'react';
import APIURL from '../../../helpers/environment';




const EditListItem = (props) => {
    console.log(props)
    // const [editName, setEditName] = useState(props.listToEdit.name);
    // const [editDate, setEditDate] = useState(props.listToEdit.date);
    // const [editTimeDue, setEditTimeDue] = useState(props.listToEdit.timeDue);
    // const [editDescription, setEditDescription] = useState(props.listToEdit.description);
    // const [editDuration, setEditDuration] = useState(props.listToEdit.duration);
    const listUpdate = (event, list) => {
        event.preventDefault();
        fetch(`${APIURL}/list/update`, {
            method: 'PUT',
            body: JSON.stringify({list: {name: name, date: date, due: due, description: description, duration: duration, complete: complete}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res => {
            props.fetchWorkouts();
            props.updateOff();
        })
    }


    return (
        //add some sort of pop up here
        <div>
            <div className='header'>
                Edit To-Do List
            </div>
            <div className='body'>
                table with all params w/ input fields 
            </div>
            <div className='footer'>
                Save edit button
            </div>

        </div>
    )

}


export default EditListItem;
// goes to /list/update endpoint
