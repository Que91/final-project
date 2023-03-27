function PostItem({ item, handleDelete }) {
  

  
  const handleEditPost = () => {};
  

  return (
    <>
      <p>{item.text}</p>

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
