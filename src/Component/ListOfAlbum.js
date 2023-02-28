import React from "react";

const ListOfAlbum = (props) => {
    const { children } = props
    return (
        <div style={{ display:'block', width:'50%', padding:'0px 16px' }}>
            <div style={{ height:40, padding:'0px 8px' }}>
                Albums
            </div>
            <div style={{ height: "calc(100vh - 110px - 60px)", width: '100%', padding: '0px 8px', overflowY: 'scroll' }}>
                {/* <div style={{ marginBottom: 20 }}>Albums</div> */}
                {children}
            </div>
        </div>
    )
}

export default ListOfAlbum