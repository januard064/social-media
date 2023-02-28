import React, { useState, createContext, useEffect } from 'react';

// import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import axios
import axios from 'axios';

// import baseURL
import { baseURL } from './Utils/serverAPI';

// import Pages
import LandingPage from './Pages/LandingPage';
import UserPage from './Pages/UserPage';

// import Component
import TextLinkExample from './Component/Navbar';

// Create AppContext
export const AppContext = createContext({});


const MainComponent = () => {
  return (
    <Router>
      <Routes>
        <Route element={<TextLinkExample />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/userpage/:userId" element={<UserPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

const App = () => {

  const userURL = 'https://jsonplaceholder.typicode.com/users'

  const [initState, setInitState] = useState('HAI')


  const [users, setUsers] = useState([])

  const [posts, setPosts] = useState([])

  const [albums, setAlbums] = useState([])

  const [comments, setComments] = useState([])

  const [photos, setPhotos] = useState([])

  // api get user
  const getAllUser = () => {
    axios.get(`${baseURL}/users`).then((response) => {
      setUsers(response.data);
    });
  }

  // api get posts
  const getAllPosts = () => {
    axios.get(`${baseURL}/posts`).then((response) => {
      setPosts(response.data);
    });
  }

  // api get albums
  const getAllAlbums = () => {
    axios.get(`${baseURL}/albums`).then((response) => {
      setAlbums(response.data);
    });
  }

  // api get comments
  const getAllComments = () => {
    axios.get(`${baseURL}/comments`).then((response) => {
      setComments(response.data);
    });
  }

  // api get photos
  const getAllPhotos = () => {
    axios.get(`${baseURL}/photos`).then((response) => {
      setPhotos(response.data);
    });
  }

  // add new comment
  const addNewComment = (comment, postId) => {
    comment.id = comments.length + 1
    comment.email = "admin@mail.com"
    comment.name = "ADMIN"
    comment.postId = postId
    setComments([...comments, comment])

    console.log(comments)
  }

  // add posts
  const addNewPosts = (post, userId) => {
    post.id = posts.length + 1
    post.userId = userId
    setPosts([...posts, post])
  }

  // edit posts
  const editPost = newPost => {
    setPosts(posts.map(post => (post.id == newPost.id ? newPost : post)))

  }

  useEffect(() => {
    getAllUser()
    getAllPosts()
    getAllAlbums()
    getAllComments()
    getAllPhotos()
    console.log('user', users)
  }, [])

  const AppContextValue = {
    initState,
    users,

    posts,
    setPosts,
    editPost,
    addNewPosts,

    albums,

    comments,
    setComments,

    photos,

    addNewComment
  }

  return (
    <AppContext.Provider value={AppContextValue}>
      <MainComponent />
    </AppContext.Provider>
  )
}

export default App
