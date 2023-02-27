import React from "react";

import { useNavigate } from "react-router-dom";

const CommentComponent = (props) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        // navigate(`/userpage/${id}`,)
    }


    const { email, name, body } = props
    return (
        <div  style={{ width:'100%', marginBottom:20, cursor:'pointer', padding:8, backgroundColor:"#F5F5F5" }}>
            <div>{email}</div>
            <div>{name}</div>
            <div>{body}</div>
        </div>
    )
}

export default CommentComponent