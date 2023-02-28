import React, { useState, useContext } from "react";

// import react bootstrap
import Modal from 'react-bootstrap/Modal';
import { Card } from "react-bootstrap";

import { AppContext } from "../App";

import { useParams } from "react-router-dom";

const LisOfPost = (props) => {
    const { children, landingPage } = props

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
        if (newPost.body != '' && newPost.title != '') {
            handleOpenModalAddPost()
            addNewPosts(newPost, usrId)
            setNewPost(initPost)
        }

    }

    return (
        <>
            <div >
                {landingPage ? (<></>) :
                    (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', height: 60 }}>
                                <div style={{ marginBottom: 20 }}>Post</div>
                                <div style={{ marginTop: 20, cursor: 'pointer' }} onClick={handleOpenModalAddPost}>Add New</div>
                            </div>
                        </>
                    )}

                <div style={{ height: "calc(100vh - 110px - 60px)", width: '100%', padding: '0px 8px', overflowY: 'scroll', }}>
                    {children}

                </div>
            </div>

            <Modal show={isModalAddPostOpen} onHide={handleOpenModalAddPost} >
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Text>
                            <div>Add Post</div>
                            <input name="title" onChange={handleOnChangeInput} style={{ width: '100%', marginTop: 10 }} placeholder="title" />
                            <textarea name="body" onChange={handleOnChangeInput} style={{ width: '100%', marginTop: 10 }} placeholder="body" />
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', cursor:'pointer' }} onClick={() => handleSubmitAddNewPost(userId)}>
                            Submit
                        </div>
                    </Card.Body>
                </Card>
            </Modal>
        </>
    )
}

export default LisOfPost