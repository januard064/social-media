import React from "react";

import { useNavigate } from "react-router-dom";

const UserList = (props) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/userpage/${id}`,)
    }


    const { children, userId, username, userIdActive } = props
    return (
        <div onClick={() => handleClick(userId)} style={{ width: '100%', marginBottom: 20, cursor: 'pointer', padding: 8, backgroundColor: userId == userIdActive ? "#0000FF" : "#F5F5F5" }}>
            {username}
        </div>
    )
}

export default UserList