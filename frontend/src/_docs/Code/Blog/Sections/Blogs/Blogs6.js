import Blogs6 from "components/Sections/Blog/Blogs/Blogs6.js";
import passProps from "_texts/blog/blogs/blogs6.js";
const dependencies = [
  {
    name: "CardBlogFullBg",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardblogfullbg",
  },
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
];
const props = `Blogs6.defaultProps = {
  cards: [],
  heading3: null,
  heading3badge: null,
  heading3: null,
  heading3badge: null,
};
Blogs6.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // an array of props that can be passed to the
  // CardBlogFullBg component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Blogs6 from "@notus-pro/react/Blogs6";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Blogs6 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Blogs6,
  componentName: "Blogs6",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
