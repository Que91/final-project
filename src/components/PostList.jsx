import PostItem from "./PostItem"

function PostList({post, handleDelete}) {
    if(!post || post.length === 0 ){
        return <p>No Post Yet</p>
    }
  return (
       <>
       {post.map((item) => (
        <PostItem key={item.id} item={item}
        handleDelete={handleDelete} />
       ))}
       </>
  )
}

export default PostList