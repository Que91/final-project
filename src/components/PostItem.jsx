import { useContext } from "react";
import PostContext from '../context/PostContext'

function PostItem({ item }) {
  const { deletePost, editPost } = useContext(PostContext)


  return (
    <>
      <div className="postItem">
        <p>{item.text}</p>
        <div className="buttons">
          <button onClick={() => editPost(item)} className="btns" id="editBtn">
            Edit
          </button>
          <button onClick={() => deletePost(item.id)} className="btns" id="deleteBtn">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default PostItem;
