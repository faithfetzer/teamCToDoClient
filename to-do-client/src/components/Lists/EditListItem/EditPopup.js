import React, { useState } from 'react';
import { Modal, Button } from 'antd';


const Popup = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit
        </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

// //add some sort of pop up here
// //<div>
// Edit List Item
// <button onClick={() => { props.setItemToEdit(undefined) }}>Cancel</button>
// <button>Submit</button>
// {/* <div className='header'>
//     Edit To-Do List
// </div>
// <div className='body'>
//     table with all params w/ input fields 
// </div>
// <div className='footer'>
//     Save edit button

export default Popup;