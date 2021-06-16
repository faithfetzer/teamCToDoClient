import React, {useState, useEffect} from 'react';
import {Button, Table} from 'antd'
// import {Table} from 'reactstrap';
import APIURL from '../../../helpers/environment'
import EditListItem from '../EditListItem/EditListItem';

const ViewCompleted = (props) => {
    console.log(props);
    const [itemCompleted, setItemCompleted] = useState(undefined);
    const [completedList, setCompletedList] = useState([]);
    const [entryToEdit, setEntryToEdit] = useState(undefined)


    const viewCompleted = () => {
        fetch(`${APIURL}/list/completed`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(json => setCompletedList(json))


        // console.log(completedList)
    }

    useEffect(()=>{
        console.log('view completed')
        viewCompleted()
    }, []);



    // const completeListItem = (id) => {
    //     fetch(`${APIURL}/list/completed/${id}`, {
    //         method: 'PUT',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         })
    //     })
    // }
     const listMapper = () => {

         return props.list.map((list, index) => {
              return (
                  <tr key={index}>
                   {/* <th scope="row">{list.id}</th> */}
                     <td>{list.name}</td>
                     <td>{list.date}</td>
                      <td>{list.description}</td>
                    <td>{list.duration}</td>
                      <td>{list.completed}</td>
                     <td>{list.important}</td>
                     {/* <td><button>Edit</button></td> */}
                      <td><Button onClick={() => {
                     setItemToEdit(list.id) }}>Edit</Button></td>
                     <td><Button onClick={() => {
                          completedListItem(list.completed) }}>Complete</Button></td>
                </tr>
             )
          })
      }
    return(
        <div>
            Completed Items
        </div>
    )
}
    // const colums =[
    //     {
    //         title: 'Item Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //         defaultSortOrder: 'descend',
    //         sorter: (a, b) => a.name - b
    //     }
    // ]


    export default ViewCompleted;


