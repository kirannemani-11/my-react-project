import React from "react";
import Data from "../../Postsdata.json";

class Post {
  constructor(id, title, body, author, topic) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.status = author;
    this.topic = topic;
  }

  parseData = async () => {
    for (let i = 0; i < Data.length; i++) {
      this.state.push(Data[i]);
    }
  };

  getPosts = () => {
    const posts = [];
    for (let i = 0; i < Data.length; i++) {
      posts.push(
        new Post(
          Data[i].id,
          Data[i].title,
          Data[i].body,
          Data[i].author,
          Data[i].topic
        )
      );
    }
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
            Data[i].topic
          )
        );
      }
    }
    return fp;
  };
}

export default Post;
