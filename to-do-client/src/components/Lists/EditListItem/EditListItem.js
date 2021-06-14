import React, { useState } from 'react';



const EditListItem = (props) => {
    console.log(props)
    const [editName, setEditName] = useState(props.listToEdit.name);
    const [editDate, setEditDate] = useState(props.listToEdit.date);
    const [editTimeDue, setEditTimeDue] = useState(props.listToEdit.timeDue);
    const [editDescription, setEditDescription] = useState(props.listToEdit.description);
    const [editDuration, setEditDuration] = useState(props.listToEdit.duration);


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
