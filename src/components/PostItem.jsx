import { useContext } from "react";
import PostContext from '../context/PostContext'

function PostItem({ item }) {
  const {deletePost, editPost} = useContext (PostContext)

  
  return (
    <>
      <p>{item.text}</p>

      <button onClick={() => editPost(item)} className="btns" id="editBtn">
        Edit
      </button>
      <button onClick={() => deletePost(item.id)} className="btns" id="deleteBtn">
        Delete
      </button>
    </>
  );
}

export default PostItem;
