import React, { useState } from "react";
import "./App.css";
import BlogPost from "./components/blog-post";
import BlogPostNew from "./components/blog-post-new";

function App() {
  const [posts, setPosts] = useState([]);
  console.log("Posts", posts);

  return (
    <div className="App">
      <BlogPostNew
        savePost={post => {
          console.log("Recive Posts", post);
          const newPosts = [...posts, post];
          setPosts(newPosts);
        }}
      />
      {posts &&
        posts.map((post, index) => (
          <BlogPost
            key={index}
            heading={post.heading}
            description={post.description}
            link={post.link}
          />
        ))}
    </div>
  );
}

export default App;
