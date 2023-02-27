import React from "react";

const ListOfUserComponent = (props) => {
    const { children } = props
    return (
        <div style={{ height: "calc(100vh - 90px)", width: '100%', padding:'0px 8px' }}>
            {children}
        </div>
    )
}

export default ListOfUserComponent