// import React, {useState} from 'react';

// ! STILL WORKING dont uncomment please

// const listEditor = (props) => {
//     const [editList, setEditList] = useState(props.listUpdate.name);
//     const [editDate, setEditDate] = useState(props.listUpdate.date);
//     const [editDue, setEditDue] = useState(props.listUpdate.timedue);
//     const [editDes, setEditDes] = useState(props.listUpdate.description);
//     const [editDur, setEditDur] = useState(props.listUpdate.duration);
//     const [editComp, setEditComp] = useState(props.listUpdate.completed);
//     const listUpdate = (event, list) => {
//         event.preventDefault();
//         fetch(`http://localhost:3000/list/${props.listUpdate.id}`, {
//             method: 'POST',
//             body: JSON.stringify({log: {name :editList,
//                 date : editDate,
//                 timedue: editDue,
//                 description: editDes,
//                 duration: editDur,
//                 completed: editComp,
//                 important: false}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }) .then((res) => {
//             props.fetchList();
//             props.updateOff();
//         })
//     }}
// goes to /list/create endpoint

