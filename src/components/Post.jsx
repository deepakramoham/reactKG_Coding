import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
const {deletePost} = useContext(PostList);
  return (
    <>
      <div className="card postCard" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
              <MdDelete />
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          <p className="card-text">
            {post.tags.map((tag) => (
              <span className="badge text-bg-primary customTagStyle" key={tag}>
                {tag}
              </span>
            ))}
          </p>
          <div className="alert alert-success reactions" role="alert">
           <p> This post has been reacted by {post.reactions} people</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
