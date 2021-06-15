import React, { useState } from 'react';
import APIURL from '../../../helpers/environment';




const EditListItem = (props) => {
    console.log(props)
    // const [editName, setEditName] = useState(props.listToEdit.name);
    // const [editDate, setEditDate] = useState(props.listToEdit.date);
    // const [editTimeDue, setEditTimeDue] = useState(props.listToEdit.timeDue);
    // const [editDescription, setEditDescription] = useState(props.listToEdit.description);
    // const [editDuration, setEditDuration] = useState(props.listToEdit.duration);
    // const [editCompleted. setEditCompleted] = 
    // const listUpdate = (event, list) => {
    //     event.preventDefault();
    //     fetch(`${APIURL}/list/${props.itemToEdit}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({list: {name: setEditName, date: setEditDate, due: setEditTimeDue, description: setEditDescription, duration: setEditDuration}}),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         })
    //     }) .then((res => {
            // props.setList([]);
    //         props.setItemToEdit(undefined);
    //     }))
    // }


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
