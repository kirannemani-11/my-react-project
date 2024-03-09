import * as React from "react";
import Blog from "./components//Blog.js";
import Student from "./components/classes/Student.js";
import User from "./components/classes/User.js";
import Blogpl from "./components/Blogpl.js";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Datac from "./components/Datac.js";
import Post from "./components/classes/Post.js";
import { useState } from "react";
import PostinDetail from "./components/Postindetail.jsx";

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
  const [selectedSection, setSelectedSection] = React.useState("");

  return (
    <div className="Main page">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Blog
                data={data}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            }
          />
          <Route path="/logined" element={<Blogpl />} />
          <Route path="/post/:postId" element={<PostinDetail />} />
        </Routes>
      </BrowserRouter>
      {/* <Blog /> */}
    </div>
  );
}

export default App;
