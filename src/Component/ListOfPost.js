import React from "react";

const LisOfPost = (props) => {
    const { children } = props
    return (
        <div style={{ height: "calc(100vh - 90px)", width: '70%', padding:'0px 8px', overflowY:'scroll' }}>
            <div style={{ marginBottom:20 }}>Post</div>
            {children}
        </div>
    )
}

export default LisOfPost