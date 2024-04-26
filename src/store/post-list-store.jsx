import { createContext } from "react";
import { useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Nagpur",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Going to Kerala",
    body: "Hi Friends, I am going to Kerala",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Going to Nashik",
    body: "Hi Friends, I am going to Nashik",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
];

export default PostListProvider;
