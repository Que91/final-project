import PostItem from "./PostItem";
import { useContext } from "react";
import PostContext from '../context/PostContext'


function PostList() {
  const {post} = useContext(PostContext)
  
  if (!post || post.length === 0) {
    return <p>No Post Yet</p>;
  }
  return (
    <>
      {post.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default PostList;
