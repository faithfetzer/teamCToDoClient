import React from "react";


const DisplayList = (props) => {
    console.log(props);
    return(
        <>
            {/* {
                props.pie.map((list,key) => {
                    return(
                        <tr key={key}>
                            <td>{list.name}</td>
                            <td>{list.date}</td>
                            <td>{list.timedue}</td>
                            <td>{list.description}</td>
                            <td>{list.duration}</td>
                            <td>{list.completed}</td>
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
