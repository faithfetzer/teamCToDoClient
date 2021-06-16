
// import React, { useState } from 'react';
// import APIURL from '../../../helpers/environment';




// const EditListItem = (props) => {
//     console.log(props)
//     //console.log(props.list.itemToEdit);
//     const [editName, setEditName] = useState(props.entryToEdit.name);
//     const [editDate, setEditDate] = useState(props.entryToEdit.date);
//     const [editTimeDue, setEditTimeDue] = useState(props.entryToEdit.timedue);
//     const [editDescription, setEditDescription] = useState(props.entryToEdit.description);
//     const [editDuration, setEditDuration] = useState(props.entryToEdit.duration);
//     const [editCompleted, setEditCompleted] = useState(props.entryToEdit.completed);
//     const [editImportant, setEditImportant] = useState(props.entryToEdit.important);
//     const listUpdate = (event) => {
//         event.preventDefault();
//         fetch(`${APIURL}/list/${props.itemToEdit}`, {
//             method: 'PUT',
//             body: JSON.stringify({list: {name: editName, date: editDate, timedue: editTimeDue, description: editDescription, duration: editDuration}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }) .then((res => {
//             //props.setList([]);
//             props.setItemToEdit(undefined);
//         }))
//     }


//     return (
//         //add some sort of pop up here
//         <div>
//         //     Edit List Item
//         //     <button onClick={() => { props.setItemToEdit(undefined) }}>Cancel</button>
//         //     <button>Submit</button>
//             <div className='header'>
//                 Edit To-Do List
//             </div>
//             <div className='body'>
//                 table with all params w/ input fields 
//             </div>
//             <div className='footer'>
//                 Save edit button
//             </div>

//         </div>
//     )

// }


// export default EditListItem;
// // goes to /list/update endpoint

import React, { useState } from 'react';
import APIURL from '../../../helpers/environment';
import { Input } from 'antd';
//import Popup from './EditPopup';


const EditListItem = (props) => {
    console.log(props)
    console.log(props.entryToEdit);
    const [editName, setEditName] = useState(props.entryToEdit.name);
    const [editDate, setEditDate] = useState(props.entryToEdit.date);
    const [editTimeDue, setEditTimeDue] = useState(props.entryToEdit.timedue);
    const [editDescription, setEditDescription] = useState(props.entryToEdit.description);
    const [editDuration, setEditDuration] = useState(props.entryToEdit.duration);
    const [editCompleted, setEditCompleted] = useState(props.entryToEdit.completed);
    const [editImportant, setEditImportant] = useState(props.entryToEdit.important);

    const listUpdate = (e) => {
        e.preventDefault();
        let req= {
            name: editName, 
            date: editDate, 
            timedue: editTimeDue, 
            description: editDescription, 
            duration: editDescription, 
            completed: editCompleted, 
            important: editImportant
        }
        console.log('edit req', req)
        fetch(`${APIURL}/list/update/${props.itemToEdit}`, {
            method: 'PUT',
            body: JSON.stringify(req),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) .then((res => {
            props.setItemToEdit(undefined);
        }))
    }


    return (
        <div> 
            <button>Cancel Edit</button> 
            {/* need to make this button functional -FF */}
            <h2>Edit List</h2>
            <form className="editList">
                <label htmlFor='nameInp'>Item Name<br/>(required)</label>
                <br/>
                <Input id='nameInp' type='text' placeholder={editName} bordered={false} onChange={(e) => setEditName(e.target.value)} required/>
                <br/>
                <label htmlFor='dateInp'> Date Due</label>
                <br/>
                <Input id="dateInp" type='text' placeholder={editDate} bordered={false} onChange={(e) => setEditDate(e.target.value)} />
                <br/>
                <label htmlFor='timeInp'> Time Due</label>
                <br/>
                <Input id='timeInp' type='text' placeholder={editTimeDue} bordered={false} onChange={(e) => setEditTimeDue(e.target.value)} />
                <br/>
                <label htmlFor='descInp'> Description</label>
                <br/>
                <Input id='descInp' type='text' placeholder={editDescription} bordered={false} onChange={(e) => setEditDescription(e.target.value)} />
                <br/>
                <label htmlFor='durInp'> Duration to Complete<br/>(minutes)</label>
                <br/>
                <Input id="durInp" type="integer" placeholder={editDuration} bordered={false} onChange={(e) => setEditDuration(e.target.value)} />
                <br/>
                <label htmlFor='important'> Important? </label>
                <br/>
                <Input id="important" type="checkbox" value={editImportant} onChange={(e) => setEditImportant(e.target.value)} />
                <br/>
                <label htmlFor='completed'> Completed? </label>
                <br/>
                <Input id="completed" type="checkbox" value={editCompleted} onChange={(e) => setEditCompleted(e.target.value)} />
                <br/>
                <button onClick={listUpdate}> Save </button>
            </form>
        </div>
    )

}






export default EditListItem;
// goes to /list/update endpoint
