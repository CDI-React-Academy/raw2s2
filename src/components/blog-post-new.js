import React, { useState } from "react";
import "./blog-post.css";

function BlogPostNew(props) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState(false);
  return (
    <div className="blog-post">
      <div className="text">
        <div className="heading">
          <input
            type="text"
            value={heading}
            onChange={e => setHeading(e.target.value)}
            placeholder="Heading"
          />
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="checkbox"
            checked={link}
            onChange={e => setLink(e.target.checked)}
            placeholder="Link"
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log("Saving Post", {
                heading: heading,
                description: description,
                link: link
              });

              props.savePost({
                heading: heading,
                description: description,
                link: link
              });
              setHeading("");
              setDescription("");
              setLink(false);
            }}
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPostNew;
