import React from "react";
import BlogPost from "../components/blog-post";

export default {
  title: "Blog Post"
};

export const Linked = () => (
  <BlogPost
    heading="heading linked"
    description="description of linked"
    link
  ></BlogPost>
);
export const Unlinked = () => (
  <BlogPost
    heading="heading unlinked"
    description="description of unlinked"
  ></BlogPost>
);
