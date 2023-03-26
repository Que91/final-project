import React, { useState } from "react";

function NewPostForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
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
