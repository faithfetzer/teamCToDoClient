import React, {useState} from 'react';



const listItemCreate = (props) => {
    const [list, setList] = useState('');
    const [date, setDate] = useState('');
    const [due, setDue] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/list/create', {
            method: 'POST',
            body: JSON.stringify({log: {list: list, date: date, due: due, description: description, duration: duration}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setList('');
            setDate('');
            setDue('');
            setDescription('');
            setDuration('');
            props.fetchList();
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={list} placeholder='ToDo Item'onChange={(e) => setList(e.target.value)}/>
            <input type='text' value={date} placeholder='Due Date'onChange={(e) => setDate(e.target.value)}/>
            <input type='text' value={Due} placeholder='Due Time'onChange={(e) => setdue(e.target.value)}/>
            <input type='text' value={description} placeholder='Description'onChange={(e) => setDescription(e.target.value)}/>
            <input type='text' value={duration} placeholder='Duration'onChange={(e) => setDuration(e.target.value)}/>
            <button type='submit'>Create Your Pie!</button>
        </form>
    )

}

export default listItemCreate;

// goes to /list/create endpoint

