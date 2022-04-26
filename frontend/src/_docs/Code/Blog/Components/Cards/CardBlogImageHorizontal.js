import CardBlogImageHorizontal from "components/Cards/Blog/CardBlogImageHorizontal.js";
import passProps from "_texts/blog/cards/cardblogimagehorizontal.js";
const props = `CardBlogImageHorizontal.defaultProps = {
  link: {},
  userlink: {},
};
CardBlogImageHorizontal.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object after the description
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: this will also apply as a wrapper for the title
  link: PropTypes.object,
  // this is an image for the user
  user: PropTypes.string,
  username: PropTypes.string,
  // properties to pass to the link object that
  // wrapps the user, date and username
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  userlink: PropTypes.object,
  date: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardBlogImageHorizontal from "@notus-pro/react/CardBlogImageHorizontal";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <CardBlogImageHorizontal {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardBlogImageHorizontal,
  componentName: "CardBlogImageHorizontal",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
