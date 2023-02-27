import React from "react";

const ListOfAlbum = (props) => {
    const { children } = props
    return (
        <div style={{ height: "calc(100vh - 90px)", width: '100%', padding: '0px 8px', overflowY: 'scroll' }}>
            <div style={{ marginBottom: 20 }}>Albums</div>
            {children}
        </div>
    )
}

export default ListOfAlbum