import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';

// import AppContext
import { AppContext } from "../App";


const CommentComponent = (props) => {

    const { comments, setComments, addNewComment } = useContext(AppContext)

    // add comment
    const initComment = { postId: '', id: '', name: '', email: '', body: '' }

    const [newComment, setNewComment] = useState(initComment)

    const deleteComment = (id) => {
        const newComments = comments.filter((comment) => comment.id !== id)
        setComments(newComments)
    }

    const { postId, commentId, email, name, body } = props
    return (
        <div style={{ width: '100%', marginBottom: 20, cursor: 'pointer', padding: 8, backgroundColor: "#F5F5F5" }}>
            <div onClick={() => deleteComment(commentId)} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}><Icon.Trash3 /></div>

            <div>{email}</div>
            <div>{name}</div>
            <div>{body}</div>


        </div>
    )
}

export default CommentComponent