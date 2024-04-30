import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Loading from "./Loading";
const PostList = () => {
  const [fetching, setFetching] = useState(false);
  const { postList, addInitialPosts } = useContext(PostListData);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();

    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFetching(false);
      });

    return () => {
      /* controller.abort(); */ //causing Uncaught Promise Error
    };
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
