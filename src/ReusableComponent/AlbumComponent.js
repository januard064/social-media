import React from "react";

import { useNavigate } from "react-router-dom";

const AlbumComponent = (props) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        // navigate(`/userpage/${id}`,)
    }


    const { albumId,title } = props
    return (
        <div  style={{ width:'100%', marginBottom:20, cursor:'pointer', padding:8, backgroundColor:"#F5F5F5" }}>
            <div> {title}</div> 
            <div style={{ width:'100px', overflowX:'scroll' }}>
                {albumId}
            </div>
        </div>
    )
}

export default AlbumComponent