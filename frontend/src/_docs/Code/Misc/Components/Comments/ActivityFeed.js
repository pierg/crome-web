import ActivityFeed from "components/Content/ActivityFeed.js";
import passProps from "_texts/misc/content/activityfeed.js";
const props = `ActivityFeed.defaultProps = {
  button: {},
  likes: { children: "0" },
  comments: { children: "0" },
  shares: { children: "0" },
  writeComment: {},
  commentPosts: [],
};
ActivityFeed.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
  // You send a simple string for a one paragraph description
  // or you can send an array of strings, that will generate
  // each string into a new paragraph
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // The image of the post, if not set the img tag will not be rendered
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
  // NOTE: the comment icon is set by default,
  // // // you only need to set the number of comments
  comments: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the share icon is set by default,
  // // // you only need to set the number of comments
  shares: PropTypes.object,
  // it is represented by the props
  // that can be passed to the ImagesOverlap,
  // so please check that one out
  imagesoverlap: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the "load previous" text is set by default,
  // // // you only need to set the href etc.
  // NOTE: If you do not pass this prop, it will not be generated
  loadPrevious: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the "load next" text is set by default,
  // // // you only need to set the href etc.
  // NOTE: If you do not pass this prop, it will not be generated
  loadNext: PropTypes.object,
  // it is represented by the props
  // that can be passed to the WriteComment,
  // so please check that one out
  writeComment: PropTypes.object,
  // it is an array of objects, which
  // are represented by the props
  // that can be passed to the Comment,
  // so please check that one out
  commentPosts: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import ActivityFeed from "@notus-pro/react/ActivityFeed";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <ActivityFeed {...props} />
    </>
  );
}`;

const docsObjects = {
  component: ActivityFeed,
  componentName: "ActivityFeed",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
