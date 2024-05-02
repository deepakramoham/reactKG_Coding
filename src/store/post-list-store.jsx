import { createContext, useCallback, useMemo, useState } from "react";
import { useReducer, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
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
      /* controller.abort(); */
      //causing Uncaught Promise Error
    };
  }, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );
  const arr = [5, 3, 6, 7, 2];
  const sortedArray = useMemo(() => arr.sort(), [arr]);
  //this won't be executed again and again with re-renders until the "arr" array doesn't change.
  //useMemo and useCallback helps in optimization preventing unnecessary recalculations.

  return (
    <PostList.Provider
      value={{
        postList: postList,
        fetching: fetching,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
