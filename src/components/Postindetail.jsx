import React from "react";
import { useParams } from "react-router-dom";
import Datac from "./Datac";

function PostinDetail() {
  const { postId } = useParams();
  const data = new Datac();
  const { body, status, title, topic } = data.state.posts.find(
    (e) => e.id == postId
  );

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
      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        {body}
      </p>
    </div>
  );
}

export default PostinDetail;
