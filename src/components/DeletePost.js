import React from "react";
import { useNavigate } from "react-router-dom";

const DeletePost = ({ data, deletePost }) => {
  const posts = data.getPosts();
  const naviagte = useNavigate();
  const handleDelete = (id) => {
    deletePost(id);
    naviagte("/");
  };
  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DeletePost;
