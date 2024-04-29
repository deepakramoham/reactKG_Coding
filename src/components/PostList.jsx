import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
      });
  },[]);

  return (
    <>
      {postList.length !== 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
      {postList.length === 0 && <center>No Posts to display...</center>}
    </>
  );
};

export default PostList;
