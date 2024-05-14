import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
 
 const postList = useLoaderData();

  return (
    <>
      {postList.length !== 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
      {postList.length === 0 && <center>No Posts to display...</center>}
    </>
  );
};

export default PostList;
