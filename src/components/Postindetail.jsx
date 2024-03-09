import React from "react";
import { useLocation } from "react-router-dom";

function PostinDetail() {
    const location = useLocation();
    const { post } = location;
  return (
    <div>  
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.author}</p>
      {/* Add more details here */}
    </div>
  );
}

export default PostinDetail;
