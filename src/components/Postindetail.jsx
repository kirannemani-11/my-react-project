import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Datac from "./Datac";
import { Button, TextField } from "@mui/material";

function PostinDetail(props) {
  const { postId } = useParams();
  const { data } = props;
  const [reload, setReload] = useState(false); // State variable for triggering re-render
  const [comments, setComments] = useState([]); // State variable for comments
  const posts = data.getPosts();
  const { body, status, title, topic } = posts?.find((e) => e.id == postId);

  const [reply, setReply] = useState("");

  const handleClick = () => {
    const comment = {
      postId,
      author: "Alice",
      text: reply,
    };
    data.addComment(comment);
    setReload(!reload); // Toggle the reload state to trigger a re-render
  };

  useEffect(() => {
    // Fetch updated data whenever reload state changes
    const updatedPosts = data.getPosts();
    const updatedPost = updatedPosts.find((e) => e.id == postId);
    if (updatedPost) {
      const updatedComments = updatedPost.comments;
      setComments(updatedComments);
    }
  }, [reload, postId, data]); // Dependency array ensures useEffect runs when reload state changes

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h1>
      <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
        Author: {status}
      </h2>
      <h3 style={{ fontSize: "16px", fontStyle: "italic", marginBottom: "0" }}>
        Topic: {topic}
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        {body}
      </p>
      <TextField
        label="Enter reply"
        variant="outlined"
        fullWidth
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <Button
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
        }}
        onClick={handleClick}
      >
        Add a reply
      </Button>
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Reply Section</h2>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {comments?.map((comment, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p style={{ margin: "0", padding: "5px 0", fontWeight: "bold" }}>
              {comment.text}
            </p>
            <p style={{ margin: "0", padding: "5px 0", color: "#888" }}>
              Author: {comment.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostinDetail;
