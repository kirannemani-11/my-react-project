import React from "react";
import Data from "../../Postsdata.json";

class Post {
  constructor(id, title, body, author, topic, comments) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.status = author;
    this.topic = topic;
    this.comments = comments;
  }

  parseData = async () => {
    for (let i = 0; i < Data.length; i++) {
      this.state.push(Data[i]);
    }
  };

  getPosts = () => {
    const posts = [];
    fetch("http://localhost:4000/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // Convert the response data to JSON
      .then((data) => {
        console.log(data); // Log the response data
        for (let i = 0; i < data.length; i++) {
          posts.push(
            new Post(
              data[i].id,
              data[i].title,
              data[i].body,
              data[i].author,
              data[i].topic,
              data[i].comments
            )
          );
        }
      })
      .catch((error) => console.error("Error:", error)); // Catch and log any errors

    // console.log(posts);
    return posts;
  };

  getPostsbytopic = (topic) => {
    const fp = [];
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].topic === topic) {
        fp.push(
          new Post(
            Data[i].id,
            Data[i].title,
            Data[i].body,
            Data[i].author,
            Data[i].topic,
            Data[i].comments
          )
        );
      }
    }
    return fp;
  };
}

export default Post;
