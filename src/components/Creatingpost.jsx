import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatingPost(props) {
  const navigate = useNavigate();
  const { data } = props;
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
    author: "",
    topic: "",
    comments: []
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Post:', post);
    // setPost({
    //   id: '',
    //   title: '',
    //   body: '',
    //   author: '',
    //   topic: ''
    // });
    data.addPost(post);
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create a New Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id" style={{ display: "block", marginBottom: "5px" }}>
            ID:
          </label>
          <input
            type="number"
            id="id"
            name="id"
            value={post.id}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="body"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Body:
          </label>
          <textarea
            id="body"
            name="body"
            value={post.body}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="author"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="topic"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Topic:
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={post.topic}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "3px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatingPost;
