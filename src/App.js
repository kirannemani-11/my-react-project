import * as React from "react";
import Blog from "./components//Blog.js";
import Student from "./components/classes/Student.js";
import User from "./components/classes/User.js";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Datac from "./components/Datac.js";
import Post from "./components/classes/Post.js";
import { useState } from "react";
import PostinDetail from "./components/Postindetail.jsx";
import CreatePost from "./components/Creatingpost.jsx";
import DeletePost from "./components/DeletePost.js";

function App() {
  const student = new Student();
  student.parseData();
  const studentsData = student.getStudents();
  const data = new Datac();
  const users = data.getUsers();
  const posts = data.getPosts();

  const deletePost = (id) => {
    data.deletePost(id);
  };

  // console.log(posts);
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
            path="/deletpost"
            element={
              <DeletePost data={data} deletePost={(id) => deletePost(id)} />
            }
          />
          <Route path="/post/:postId" element={<PostinDetail data={data} />} />
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
