import React, {useState} from 'react';



function updateList() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    return list.map((list, index) => {
        <div className={list.isComplete ? 'list-row complete' : 'list-row'} 
        key={index}>

            <div key={list.id} onClick={() => completeList(list.id)}>
                {list.text}
            </div>




        </div>
    })
}

