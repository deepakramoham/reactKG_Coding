import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Loading from "./Loading";
const PostList = () => {
  const [fetching, setFetching] = useState(true);
  const { postList, addInitialPosts } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFetching(false);
      });
      return(()=>console.log("cleaning up useEffect"))
  }, []);
  return (
    <>
      {fetching === true && <Loading />}
      {!fetching &&
        postList.length !== 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
      {!fetching && postList.length === 0 && (
        <center>No Posts to display...</center>
      )}
    </>
  );
};

export default PostList;
