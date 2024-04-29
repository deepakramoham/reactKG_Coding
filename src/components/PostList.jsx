import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Loading from "./Loading";
const PostList = () => {
  const [fetching, setFetching] = useState(true);
  const { postList, addInitialPosts } = useContext(PostListData);
  console.log("before useEffect");
  useEffect(() => {
    console.log("inside useEffect, before fetchData");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFetching(false);
        console.log("inside useEffect, inside fetch, fetch returned");
      });
    console.log(" inside useEffect, after fetchData");
  }, []);
  console.log("after useEffect");
  return (
    <>
      {fetching === true && <Loading />}
      {fetching === false &&
        postList.length !== 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
      {fetching === false && postList.length === 0 && (
        <center>No Posts to display...</center>
      )}
    </>
  );
};

export default PostList;
