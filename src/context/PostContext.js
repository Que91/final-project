import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

  const [postEdit, setPostEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await fetch(
      "http://localhost:5000/post?_sort=id&_order=desc"
    );
    const data = await response.json();
    setPost(data);
    setIsLoading(false);
  };
// Add Post
  const addPost = async (createdPost) => {
    const response = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdPost),
    });
    const data = await response.json();

    setPost([data, ...post]);
  };


  //Delete Post
  const editPost = (item) => {
    setPostEdit({
      item,
      edit: true,
    });
  };


  //Update Post Item
  const updatePost = async (id, updItem) => {
    const response = await fetch (`http://localhost:5000/post/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem)
    } )
    const data = await response.json()
    setPost(
      post.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };


  //Delete Post
  const deletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        await fetch(`http://localhost:5000/post/${id}`, {
            method: 'DELETE'
        })
      setPost(post.filter((item) => item.id !== id));
    }
  };

  return (
    <PostContext.Provider
      value={{
        post,
        postEdit,
        isLoading,
        addPost,
        editPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
