import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import Datac from "./Datac";

const sections = [
  { title: "Academic Resources" },
  { title: "Career Services" },
  { title: "Campus" },
  { title: "Culture" },
  { title: "Local Community Resources" },
  { title: "Social" },
  { title: "Sports" },
  { title: "Health and Wellness" },
  { title: "Technology" },
  { title: "Travel" },
  { title: "Alumni" },
  { title: "All posts" },
];

const defaultTheme = createTheme();
export default function Blog(props) {
  const { selectedSection, setSelectedSection, data } = props;
  const posts = data.getPosts();

  const filteredposts = data.getPostsbytopic(selectedSection);

  // console.log("1" + selectedSection + "working");
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Blog"
          sections={sections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={4}>
            {filteredposts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
