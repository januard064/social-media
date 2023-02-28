import React, { useState, useContext } from "react";

import axios from "axios";

import { baseURL } from "../Utils/serverAPI";

import * as Icon from 'react-bootstrap-icons';

// import react bootstrap
import Modal from 'react-bootstrap/Modal';
import { Card } from "react-bootstrap";

// import AppContext
import { AppContext } from "../App";

import CommentComponent from "./CommentComponent";

const PostComponent = (props) => {

    const { comments, posts, setPosts, addNewComment, editPost } = useContext(AppContext)

    const { children, title, body, postsId } = props

    // comment state for open
    const [isCommentOpen, setIsCommentOpen] = useState(false)

    const handleOpenComments = () => {
        setIsCommentOpen(!isCommentOpen)
    }

    // delete post action
    const deletePost = (id) => {
        console.log(id)
        // API for get post by id, but cannot update the current state after update, so i made get in frontend

        // axios.delete(`${baseURL}/posts/${id}`).then((response) => {
        //     // setPosts(response.data);
        //     console.log(response.data)
        //   });

        const newPosts = posts.filter((post) => post.id !== id)
        console.log(newPosts)
        setPosts(newPosts)
    }


    // add comment state and action
    const initComment = { postId: '', id: '', name: '', email: '', body: '' }

    const [newComment, setNewComment] = useState(initComment)

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setNewComment({ ...newComment, [name]: value })

        console.log(newComment)
    }

    const handleSubmitComment = (postId) => {
        addNewComment(newComment, postId)
    }



    // edit post state and action
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    const initPost = { userId: '', id: '', title: '', body: '' }

    const [currentPost, setCurrentPost] = useState(initPost)

    const handleOpenModalEdit = (postsId) => {

        // axios.get(`${baseURL}/posts/${postsId}`).then((response) => {
        //     setCurrentPost(response.data);
        // })
        const newCurrentPost = posts.filter((post) => post.id == postsId)[0]
        setCurrentPost(newCurrentPost)

        setIsOpenEdit(!isOpenEdit)

    }

    const onHandleChange = (e) => {
        const { name, value } = e.target
        setCurrentPost({ ...currentPost, [name]: value })

        console.log(currentPost)
    }

    const submitEditPost = (postsId) => {
        editPost(currentPost)
        setIsOpenEdit(false)

        axios.put(`${baseURL}/posts/${postsId}`, {
            data: currentPost
        }).then((response) => {
            console.log('afger', response.data);
        })
    }



    return (
        <>
            <div style={{ width: '100%', marginBottom: 20, padding: 8, backgroundColor: "#F5F5F5" }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Icon.Pencil onClick={() => handleOpenModalEdit(postsId)} />

                    <Icon.Trash3 onClick={() => deletePost(postsId)} />

                </div>
                <div>{title}</div>

                <div>{body}</div>
                <div onClick={handleOpenComments} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', cursor: 'pointer' }}>
                    See Comment
                </div>

                {/* <input value={postId} name="postId" onChange={handleChangeInput}  ></input> */}


                {isCommentOpen &&
                    <>
                        <input name="body" onChange={handleChangeInput} />

                        <div onClick={() => handleSubmitComment(postsId)}>
                            Submit
                        </div>

                        {comments.filter((comment) => comment.postId == postsId).map((commentPost) => (
                            <div><CommentComponent postId={postsId} commentId={commentPost.id} email={commentPost.email} name={commentPost.name} body={commentPost.body} /></div>
                        ))}
                    </>}
            </div>


            <Modal show={isOpenEdit} onHide={() => setIsOpenEdit(false)}>

                {/* <Modal.Body closeButton> */}
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Text>
                            <input value={currentPost.title} name="title" onChange={onHandleChange} style={{ width: '100%', marginBottom:10 }} />
                            <textarea value={currentPost.body} name="body" onChange={onHandleChange} style={{ width: '100%' }} />
                        </Card.Text>
                        <div onClick={() => submitEditPost(postsId)}>Submit</div>
                    </Card.Body>
                </Card>

                {/* </Modal.Body> */}

            </Modal>
        </>
    )
}

export default PostComponent