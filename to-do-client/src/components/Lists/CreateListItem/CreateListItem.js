import React, {useState} from 'react';
import { Button } from 'antd';

const ListItemCreate = (props) => {
    console.log(props);
    const [name, setName] = useState('');
    const [date, setDate] = useState(undefined);
    const [due, setDue] = useState(undefined);
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(undefined);
    const [important, setImportant] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test', name, date, due, description, duration, important);
        let req =
        {
            name: name, date: date, timedue: due, description: description, duration: duration, important: important
        } 
        console.log(req);
        fetch('http://localhost:4000/list/create', {
            method: 'POST',
            body: JSON.stringify(req),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) 
        //.then((props.setCreate(false)));
        //.then((res) => res.json())
        // .then((logData) => {
        //     console.log(logData);
        //     setName('');
        //     setDate('');
        //     setDue('');
        //     setDescription('');
        //     setDuration('');
        //     props.fetchList();
        // })
    }

    return(
        <div>Create List Item
        <form>
            <input type='text' value={name} placeholder='ToDo Item'onChange={(e) => setName(e.target.value)}/>
            <input type='text' value={date} placeholder='Due Date'onChange={(e) => setDate(e.target.value)}/>
            <input type='text' value={due} placeholder='Due Time'onChange={(e) => setDue(e.target.value)}/>
            <input type='text' value={description} placeholder='Description'onChange={(e) => setDescription(e.target.value)}/>
            <input type='text' value={duration} placeholder='Duration'onChange={(e) => setDuration(e.target.value)}/>
            {/* <input type='checkbox' value={important} id='important' onChange={(e) => setImportant(e.target.value)}>Important</input> */}
            <button type='submit' onClick={handleSubmit}> Create Your List!</button>
        </form>
        </div>
    )

}

export default ListItemCreate;

// goes to /list/create endpoint

