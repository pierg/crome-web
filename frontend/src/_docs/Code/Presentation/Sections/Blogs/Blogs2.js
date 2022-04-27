import Blogs2 from "components/Sections/Presentation/Blogs/Blogs2.js";
import passProps from "_texts/presentation/blogs/blogs2.js";
const dependencies = [
  {
    name: "CardBlogFullBgAuthor",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardblogfullbgauthor",
  },
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
];
const props = `Blogs2.defaultProps = {
  card: {},
  heading2badge: null,
};
Blogs2.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardBlogFullBgAuthor,
  // so please check that one out
  card: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Blogs2 from "@notus-pro/react/Blogs2";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Blogs2 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Blogs2,
  componentName: "Blogs2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
