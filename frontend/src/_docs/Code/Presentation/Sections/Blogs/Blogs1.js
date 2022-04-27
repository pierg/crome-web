import "_texts/presentation/blogs/blogs1.js"
import "components/Sections/Presentation/Blogs/Blogs1.js"
import Blogs1
import passProps

const dependencies = [
  {
    name: "CardBlogFullBg",
    link: "/components/presentation/components/cards#presentation-id-presentation-id-components-cardblogfullbg",
  },
  {
    name: "Heading3",
    link: "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
];
const props = `Blogs1.defaultProps = {
  cards: [],
  heading3: null,
};
Blogs1.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // an array of props that can be passed to the
  // CardBlogFullBg component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Blogs1"
import Blogs1

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Blogs1
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Blogs1,
  componentName: "Blogs1",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
