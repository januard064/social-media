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

  const getAllUser = () => {
    axios.get(`${baseURL}/users`).then((response) => {
      setUsers(response.data);
    });
  }

  const getAllPosts = () => {
    axios.get(`${baseURL}/posts`).then((response) => {
      setPosts(response.data);
    });
  }

  const getAllAlbums = () => {
    axios.get(`${baseURL}/albums`).then((response) => {
      setAlbums(response.data);
    });
  }

  const getAllComments = () => {
    axios.get(`${baseURL}/comments`).then((response) => {
      setComments(response.data);
    });
  }

  const getAllPhotos = () => {
    axios.get(`${baseURL}/photos`).then((response) => {
      setPhotos(response.data);
    });
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
    albums,
    comments,
    photos
  }

  return (
    <AppContext.Provider value={AppContextValue}>
      <MainComponent />
    </AppContext.Provider>
  )
}

export default App
