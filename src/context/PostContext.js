import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([
    {
      text: "This item is from context",
    },
  ]);

  const [postEdit, setPostEdit] = useState({
    item: {},
    edit: false,
  });

  const addPost = (createdPost) => {
    createdPost.id = uuidv4();
    setPost([createdPost, ...post]);
    console.log(createdPost);
  };

  const editPost = (item) => {
    setPostEdit({
      item,
      edit: true,
    });
  };

  const updatePost = (id, updItem) => {
    setPost(
        post.map((item) => (item.id === id ? {...item, ... updItem } : item))
    )
  }

  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setPost(post.filter((item) => item.id !== id));
    }
  };

  return (
    <PostContext.Provider
      value={{
        post,
        postEdit,
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
