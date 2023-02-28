import React, { useState, useContext } from "react";

// import react bootstrap
import Modal from 'react-bootstrap/Modal';
import { Card } from "react-bootstrap";

import { AppContext } from "../App";

import { useParams } from "react-router-dom";

const LisOfPost = (props) => {
    const { children } = props

    const { addNewPosts } = useContext(AppContext)

    const [isModalAddPostOpen, setIsModalAddPostOpen] = useState(false)

    const handleOpenModalAddPost = () => {
        setIsModalAddPostOpen(!isModalAddPostOpen)
    }

    const initPost = { userId: '', id: '', title: '', body: '' }

    const [newPost, setNewPost] = useState(initPost)

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target
        setNewPost({ ...newPost, [name]: value })
    }

    let { userId } = useParams();

    const handleSubmitAddNewPost = (usrId) => {
        handleOpenModalAddPost()
        addNewPosts(newPost, usrId)
    }

    return (
        <>
            <div style={{ height: "calc(100vh - 90px)", width: '100%', padding: '0px 8px', overflowY: 'scroll', }}>
                <div style={{ marginBottom: 20 }}>Post</div>
                <div onClick={handleOpenModalAddPost}>Add New</div>
                {children}
            </div>

            <Modal show={isModalAddPostOpen} onHide={handleOpenModalAddPost} >

                {/* <Modal.Body closeButton> */}
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Text>
                            <div>Add Post</div>
                            <input name="title" onChange={handleOnChangeInput} style={{ width: '100%', marginTop:10 }} placeholder="title" />
                            <input name="body" onChange={handleOnChangeInput} style={{ width: '100%', marginTop: 10 }} placeholder="body" />
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={() => handleSubmitAddNewPost(userId)}>
                            Submit
                        </div>
                    </Card.Body>
                </Card>

                {/* </Modal.Body> */}

            </Modal>
        </>
    )
}

export default LisOfPost