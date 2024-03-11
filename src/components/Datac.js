import User from "./classes/User";
import Post from "./classes/Post";

const user = new User();
const post = new Post();

class Datac {
  constructor() {
    this.state = {
      users: [],
      admins: [],
      faculty: [],
      moderator: [],
      staff: [],
      posts: [],
      students: [],
    };
    this.state.users = user.getUsers();
    this.state.posts = post.getPosts();
  }
  getUsers() {
    return this.state.users;
  }
  getPosts() {
    return this.state.posts;
  }

  getPostsbytopic = (topic) => {
    const fp = [];
    for (let i = 0; i < this.state.posts.length; i++) {
      if (topic == "" || topic == "All posts") {
        return this.state.posts;
      }
      if (this.state.posts[i].topic === topic) {
        fp.push(
          new Post(
            this.state.posts[i].id,
            this.state.posts[i].title,
            this.state.posts[i].body,
            this.state.posts[i].author,
            this.state.posts[i].topic,
            this.state.posts[i].comments
          )
        );
      }
    }
    return fp;
  };
  addPost = (post) => {
    this.state.posts.push(
      new Post(
        post.id,
        post.title,
        post.body,
        post.author,
        post.topic,
        post.comments
      )
    );
    console.log("post array updated");
  };

  deletePost = (postId) => {
    this.state.posts = this.state.posts.filter((post) => post.id !== postId);
    console.log("post deleted");
  };
  addComment = (comment) => {
    for (let i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i].id == comment.postId) {
        this.state.posts[i].comments.push(comment);
      }
    }
  };
  toggleUserStatus = (userId) => {
    const { users } = this.state;
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          status: user.status === "active" ? "inactive" : "active",
        };
      }
      return user;
    });
    this.state.users = updatedUsers;
    // console.log("User status updated" + updatedUsers);
    return this.state.users;
  };
}

export default Datac;
