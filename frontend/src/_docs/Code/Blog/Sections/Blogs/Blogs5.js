import Blogs5 from "components/Sections/Blog/Blogs/Blogs5.js";
import passProps from "_texts/blog/blogs/blogs5.js";
const dependencies = [
  {
    name: "CardBlogIllustration",
    link:
      "/components/blog/components/cards#blog-id-blogs-id-components-cardblogillustration",
  },
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `Blogs5.defaultProps = {
  cards: [],
  heading2: null,
  heading2badge: null,
  heading3: null,
  heading3badge: null,
};
Blogs5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardBlogIllustration,
  // so please check that one out
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Blogs5 from "@notus-pro/react/Blogs5";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Blogs5 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Blogs5,
  componentName: "Blogs5",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
