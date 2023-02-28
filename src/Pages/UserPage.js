import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

// import bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import AppContext
import { AppContext } from "../App";

// import Component
import ListOfUserComponent from "../Component/ListOfUserComponent";
import LisOfPost from "../Component/ListOfPost";
import UserList from "../ReusableComponent/UserList";
import PostComponent from "../ReusableComponent/PostComponent";
import ListOfAlbum from "../Component/ListOfAlbum";
import AlbumComponent from "../ReusableComponent/AlbumComponent";




const UserPage = () => {

    let { userId } = useParams();

    const { initState, users, posts, albums } = useContext(AppContext)

    return (
        <Container fluid style={{ width: '100%', marginTop: 90, height: "calc(100vh - 90px)" }}>
            <Row>
                <Col xs={3}>
                    <ListOfUserComponent>
                        {users.map((user) => (
                            <UserList userId={user.id} username={user.username} userIdActive={userId} />
                        ))}
                    </ListOfUserComponent>
                </Col>
                <Col xs={9}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <LisOfPost>
                            {posts.filter((post) => post.userId == userId).map((postUser) => (
                                <PostComponent title={postUser.title} body={postUser.body} postsId={postUser.id} />
                            ))}
                        </LisOfPost>
                        <ListOfAlbum>
                            {albums.filter((album) => album.userId == userId).map((albumUser) => (
                                <AlbumComponent albumId={albumUser.id} title={albumUser.title} />
                            ))}
                        </ListOfAlbum>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default UserPage