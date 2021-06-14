import React from "react";
import EditListItem from '../EditListItem/EditListItem';


const DisplayList = (props) => {
    console.log(props);

    const deleteListItem = (listItem) => {
        fetch(`http://localhost:3000/list/${props.list.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        .then(() => props.fetchList())
    }

    return(
        <>
            <EditListItem sessionToken={props.sessionToken} list={props.list}/>
            {/* {
                props.list.map((list,key) => { */}
            {/* {
                props.list.map((list,key) => {
                    return(
                        <tr key={key}>
                            <td>{list.name}</td>
                            <td>{list.date}</td>
                            <td>{list.timedue}</td>
                            <td>{list.description}</td>
                            <td>{list.duration}</td>
                            <td>{list.completed}</td>
                            <td><button  onClick={() => {deleteListItem(listItem)}}>Delete</button></td>
                            <td>{list.important}</td>
                        </tr>
                    )
                })
            } */}
            </>
    )
}

export default DisplayList;
// goes to /list/ endpoint