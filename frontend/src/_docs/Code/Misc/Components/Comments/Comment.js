import "_texts/misc/content/comment.js"
import "components/Content/Comment.js"
import Comment
import passProps

const props = `Comment.defaultProps = {
  likes: { children: "0" },
  shares: { children: "0" },
};
Comment.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the like icon is set by default,
  // // // you only need to set the number of like
  likes: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the share icon is set by default,
  // // // you only need to set the number of comments
  shares: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Comment"
import Comment

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Comment {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Comment,
  componentName: "Comment",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
