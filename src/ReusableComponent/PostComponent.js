import React, {useState, useContext} from "react";

// import AppContext
import { AppContext } from "../App";

import CommentComponent from "./CommentComponent";

const PostComponent = (props) => {

    const {comments} = useContext(AppContext)

    const [isCommentOpen, setIsCommentOpen]= useState(false)

    const handleOpenComments = () => {
        setIsCommentOpen(!isCommentOpen)
    }

    const { children, title, body, postsId } = props
    return (
        <div style={{ width:'100%', marginBottom:20,  padding:8, backgroundColor:"#F5F5F5" }}>
            <div>{title}</div>
            <div>{body}</div>
            <div onClick={handleOpenComments} style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', cursor:'pointer' }}>
                See Comment
            </div>
            {isCommentOpen && 
            <>
                {comments.filter((comment) => comment.postId == postsId ).map((commentPost) => (
                    <div><CommentComponent email={commentPost.email} name={commentPost.name} body={commentPost.body} /></div>
                ))}
            </>}
        </div>
    )
}

export default PostComponent