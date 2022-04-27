import Projects1 from "components/Sections/ECommerce/Projects/Projects1.js";
import passProps from "_texts/e-commerce/projects/projects1.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "CardInfoIconBg",
    link:
      "/components/e-commerce/components/cards#e-commerce-id-e-commerce-id-components-cardinfoiconbg",
  },
];
const props = `Projects1.defaultProps = {
  cards: [],
  heading2: null,
};
Projects1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to send to the CardInfoIconBg components
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Projects1 from "@notus-pro/react/Projects1";

// texts as props
const projects1 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Projects1 {...projects1} />
    </>
  );
}`;

const docsObjects = {
  component: Projects1,
  componentName: "Projects1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
