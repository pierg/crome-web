import Blogs8 from "components/Sections/Misc/Blogs/Blogs8.js";
import passProps from "_texts/misc/blogs/blogs8.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "CardBlogandAuthor",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardblogandauthor",
  },
];
const props = `Blogs8.defaultProps = {
  cards: [],
  heading2: null,
};
Blogs8.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the CardBlogandAuthor component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Blogs8 from "@notus-pro/react/Blogs8";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Blogs8
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Blogs8,
  componentName: "Blogs8",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
