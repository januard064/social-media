import React from "react";

import { useNavigate } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';

const UserList = (props) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/userpage/${id}`,)
    }


    const { children, userId, username, userIdActive } = props
    return (
        <div onClick={() => handleClick(userId)} style={{ width: '100%', marginBottom: 20, cursor: 'pointer', padding: 8, backgroundColor: userId == userIdActive ? "#008ECC" : "#F5F5F5" }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div>
                <Icon.Person style={{ marginRight:4 }} />
                </div>
                {username}

            </div>
        </div>
    )
}

export default UserList