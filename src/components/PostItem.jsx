function PostItem({ item, handleDelete }) {
  

  const handleNewPost = () => {};
  const handleEditPost = () => {};
  

  return (
    <>
      <p>{item.text}</p>

      <button onClick={handleNewPost} className="btns" id="postBtn">
        Post
      </button>
      <button onClick={handleEditPost} className="btns" id="editBtn">
        Edit
      </button>
      <button onClick={() => handleDelete(item.id)} className="btns" id="deleteBtn">
        Delete
      </button>
    </>
  );
}

export default PostItem;
