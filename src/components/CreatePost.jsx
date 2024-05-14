import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <Form method="POST" className="formClass" >
        <div className="mb-3 ">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
            aria-describedby="postTitle"
            placeholder="Your User Id"
          />
        </div>
        <div className="mb-3 postClass">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="postTitle"
            aria-describedby="postTitle"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3 postClass">
          <label htmlFor="postContent" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            name="body"
            id="postContent"
            aria-describedby="postTitle"
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
            name="reactions"
            aria-describedby="postTitle"
            placeholder="How many people reacted to this"
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
            name="tags"
            aria-describedby="postTitle"
            placeholder="How many people reacted to this"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};
export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return redirect("/");
};

export default CreatePost;
