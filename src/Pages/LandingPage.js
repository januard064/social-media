import React, { useContext, useEffect, useState } from "react";

// import bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import AppContext
import { AppContext } from "../App";

// import Component
import ListOfUserComponent from "../Component/ListOfUserComponent";
import LisOfPost from "../Component/ListOfPost";
import UserList from "../ReusableComponent/UserList";
import PostComponent from "../ReusableComponent/PostComponent";

const LandingPage = () => {

    const { initState, users, posts } = useContext(AppContext)

    return (
        <Container fluid style={{ width: '100%', marginTop: 90 }}>
            <Row>
                <Col xs={3}>
                    <ListOfUserComponent>
                        {users.map((user) => (
                            <UserList userId={user.id} username={user.username} />
                        ))}
                    </ListOfUserComponent>
                </Col>
                <Col xs={9}>
                    <LisOfPost>
                        {posts.filter((post) => post.userId == 1).map((postUser) => (
                            <PostComponent title={postUser.title} body={postUser.body} />
                        ))}
                    </LisOfPost>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage