import React, { useState } from 'react';
import { Button } from 'antd';
import APIURL from '../../../helpers/environment';

const ListItemCreate = (props) => {
    // console.log(props);

    const [name, setName] = useState('');
    const [date, setDate] = useState(undefined);
    const [due, setDue] = useState(undefined);
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(undefined);
    const [important, setImportant] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        let req ={
            name: name, 
            date: date.value, 
            timedue: due.value, 
            description: description, 
            duration: duration, 
            important: important
        }


        console.log('req', req)
        fetch(`${APIURL}/list/create`, {
            method: 'POST',
            body: JSON.stringify(req),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setName();
                setDate(undefined);
                setDue(undefined);
                setDescription('');
                setDuration(undefined);
                setImportant(false)
                // props.fetchList();
            })
    }

    return (
        <div>
            <h3>Add Item To Your List</h3>
            <form>
                <label htmlFor="name">Item Name<br/>(required)</label>
                <br/>
                <input id='name 'type='text' value={name} placeholder='ToDo Item' onChange={(e) => setName(e.target.value)} required/>
                <br/>
                {/* 
                <label htmlFor="date">Date Due</label>
                <br/>
                <input id="date"type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <br/>
                <label htmlFor="time">Time Due</label>
                <br/>
                <input id="time" type='time' value={due} onChange={(e) => setDue(e.target.value)} /> */}
                <label htmlFor="date">Date Due</label>
                <br/>
                <input id="date" type='text' value={date} placeholder='2021-01-01' onChange={(e) => setDate(e.target.value)} />
                <br/>
                <label htmlFor="time">Time Due</label>
                <br/>
                <input id="time" type='text' placeholder='14:50' value={due} onChange={(e) => setDue(e.target.value)} />
                <br/>
                <label htmlFor="description">Description</label>
                <br/>
                <input id="description "type='text' value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                <br/>
                <label htmlFor="duration">Duration to Complete<br/>(minutes)</label>
                <br/>
                <input id="duration" type='integer' value={duration} placeholder='60' onChange={(e) => setDuration(e.target.value)} />
                <br/>
                <label htmlFor="important">Important?</label>
                <br/>
                <input id="important" type="checkbox" value={important} onChange={(e) => setImportant(e.target.value)}/>
                <br/>
                <button type='submit' onClick={handleSubmit}> Add Item to Your List!</button>
            </form>
        </div>
    )

}

export default ListItemCreate;

// goes to /list/create endpoint