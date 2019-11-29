import React from "react";
import logo from "../logo.svg";
import "./blog-post.css";
import styled from "styled-components";

const LinkContainer = styled.div`
  margin: 10pt;
  border-radius: 5pt;
  border: 1pt solid red;
  background-color: ${props => (props.isLinked ? "red" : "white")};
  color: ${props => (props.isLinked ? "white" : "black")};
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

        <LinkContainer isLinked={props.link}>
          {props.link ? "linked" : "unlinked"}
        </LinkContainer>
      </div>
    </div>
  );
}

export default BlogPost;
