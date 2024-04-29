import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type) {
    newPostList =[action.payload,... currPostList]
    console.log(newPostList);
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postContent, reactions, tags) => {

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postContent,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        postId,
      },
    });
  };
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
    reactions: 3,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Going to Kerala",
    body: "Hi Friends, I am going to Kerala",
    reactions: 5,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "3",
    title: "Going to Nashik",
    body: "Hi Friends, I am going to Nashik",
    reactions: 5,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
];

export default PostListProvider;
