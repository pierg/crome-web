import Blogs3 from "components/Sections/Blog/Blogs/Blogs3.js";
import passProps from "_texts/blog/blogs/blogs3.js";
const dependencies = [
  {
    name: "CardBlogImageHorizontal",
    link:
      "/components/blog/components/cards#blog-id-blogs-id-components-cardblogimagehorizontal",
  },
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
];
const props = `Blogs3.defaultProps = {
  cards: [],
  heading3badge: null,
};
Blogs3.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // it is an array of objects which
  // are represented by the props
  // that can be passed to the CardBlogImageHorizontal,
  // so please check that one out
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Blogs3 from "@notus-pro/react/Blogs3";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Blogs3 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Blogs3,
  componentName: "Blogs3",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
