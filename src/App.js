import { v4 as uuidv4 } from 'uuid'
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";
import { Route, Routes } from "react-router-dom";
import PostData from "./data/PostData";
import React, { useState } from 'react'
import NewPostForm from './components/NewPostForm'


function App() {
  const [post, setPost] = useState(PostData);
  
  const addPost = (createdPost) => {
    createdPost.id = uuidv4()
    setPost([createdPost,...post])
    console.log(createdPost)
  }

  const deletePost = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setPost(post.filter((item) => item.id !== id))
    }};

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <NewPostForm handleAdd={addPost} />
              <PostList post={post}
              handleDelete={deletePost} />
              
              
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
