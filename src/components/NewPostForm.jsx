import React, { useState, useContext, useEffect } from "react";
import PostContext from "../context/PostContext";

function NewPostForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { addPost, postEdit, updatePost } = useContext(PostContext);

  useEffect(() => {
    if (postEdit.edit === true) {
      setBtnDisabled(false);
      setText(postEdit.item.text);
    }
  }, [postEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      text,
    };
    if (postEdit.edit === true) {
      updatePost(postEdit.item.id, createdPost);
    } else {
      addPost(createdPost);
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Live Feed</h2>
      <input type="text" value={text} onChange={handleTextChange} />

      <button disabled={btnDisabled} type="submit">
        Post
      </button>
    </form>
  );
}

export default NewPostForm;
