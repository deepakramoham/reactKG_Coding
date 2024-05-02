import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdRef = useRef();
  const postTitleRef = useRef();
  const postContentRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const postTitle = postTitleRef.current.value;
    const postContent = postContentRef.current.value;
    const reactions = reactionsRef.current.value;
    const tags = tagsRef.current.value.split(" ");
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postContent,
        tags: tags,
        reactions: reactions,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addPost(data);
        navigate("/");
      });

    userIdRef.current.value = "";
    postTitleRef.current.value = "";
    postContentRef.current.value = "";
    reactionsRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <>
      <form className="formClass" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="postTitle"
            placeholder="Your User Id"
            ref={userIdRef}
          />
        </div>
        <div className="mb-3 postClass">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            aria-describedby="postTitle"
            placeholder="How are you feeling today"
            ref={postTitleRef}
          />
        </div>
        <div className="mb-3 postClass">
          <label htmlFor="postContent" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="postContent"
            aria-describedby="postTitle"
            ref={postContentRef}
          />
        </div>
        <div className="mb-3 postClass">
          <label htmlFor="noOfReactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="noOfReactions"
            aria-describedby="postTitle"
            placeholder="How many people reacted to this"
            ref={reactionsRef}
          />
        </div>
        <div className="mb-3 postClass">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="postTitle"
            placeholder="How many people reacted to this"
            ref={tagsRef}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
