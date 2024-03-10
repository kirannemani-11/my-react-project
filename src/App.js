import * as React from "react";
import Blog from "./components//Blog.js";
import Student from "./components/classes/Student.js";
import User from "./components/classes/User.js";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Datac from "./components/Datac.js";
import Post from "./components/classes/Post.js";
import { useState } from "react";
import PostinDetail from "./components/Postindetail.jsx";
import CreatePost from "./components/Creatingpost.jsx";

function App() {
  const student = new Student();
  student.parseData();
  const studentsData = student.getStudents();
  const data = new Datac();
  const users = data.getUsers();
  const posts = data.getPosts();
  // console.log(data);
  // const post = new Post();
  // const postdata = post.getPosts();
  // console.log("In App.js");
  // console.log(posts);

  // data.addPost(posts[0]);

  const [selectedSection, setSelectedSection] = React.useState("");

  return (
    <div className="Main page">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Blog
                data={data}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            }
          />

          <Route
            path="/post/:postId"
            element={<PostinDetail posts={posts} />}
          />
          <Route
            path="/logined/createpost"
            element={<CreatePost data={data} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Blog /> */}
    </div>
  );
}

export default App;
