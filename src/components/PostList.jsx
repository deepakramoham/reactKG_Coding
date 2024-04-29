import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const handleFetch = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(obj=> {addInitialPosts(obj.posts)});
  };
  return (
    <>
      {postList.length !== 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
      {postList.length === 0 && (
        <center>
          No Posts to display...
          <button className="btn btn-primary" onClick={handleFetch}>
            Click to fetch from api
          </button>
        </center>
      )}
    </>
  );
};

export default PostList;
