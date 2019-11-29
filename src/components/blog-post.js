import React from "react";
import logo from "../logo.svg";
import "./blog-post.css";
import styled from "styled-components";

const LinkContainer = styled.div`
  margin: 10pt;
  border-radius: 5pt;
  border: 1pt solid green;
`;
const LinkContainerChecked = styled(LinkContainer)`
  background-color: green;
  color: white;
`;

function BlogPost(props) {
  return (
    <div className="blog-post">
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="text">
        <div className="heading">{props.heading}</div>
        <div className="description">{props.description}</div>

        {!props.link && <LinkContainer>Unlinked</LinkContainer>}
        {props.link && <LinkContainerChecked>Linked</LinkContainerChecked>}
      </div>
    </div>
  );
}

export default BlogPost;
