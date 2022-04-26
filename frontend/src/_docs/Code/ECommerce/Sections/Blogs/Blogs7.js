import Blogs7 from "components/Sections/ECommerce/Blogs/Blogs7.js";
import passProps from "_texts/e-commerce/blogs/blogs7.js";
const dependencies = [
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "CardBlogFullBg",
    link:
      "/components/presentation/components/cards#presentation-id-presentation-id-components-cardblogfullbg",
  },
];
const props = `Blogs7.defaultProps = {
  cards: [],
  heading2badge: null,
};
Blogs7.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // props that can be passed to the Button component
  button: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.oneOf(["1", "1/3", "2/3", "1/4", "2/4", "3/4"]),
      // props that can be passed to the CardBlogFullBg component
      card: PropTypes.object,
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Blogs7 from "@notus-pro/react/Blogs7";
// texts as props
const pricing2 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Blogs7 {...pricing2} />
    </>
  );
}`;

const docsObjects = {
  component: Blogs7,
  componentName: "Blogs7",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
