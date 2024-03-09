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
            this.state.posts[i].topic
          )
        );
      }
    }
    return fp;
  };
}

export default Datac;
