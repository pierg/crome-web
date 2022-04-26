import Hero8 from "components/Sections/ECommerce/Heroes/Hero8.js";
import passProps from "_texts/e-commerce/sections/hero8.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
  {
    name: "CardProductPrice",
    link:
      "/components/e-commerce/components/cards#e-commerce-id-e-commerce-id-components-cardproductprice",
  },
];
const props = `Hero8.defaultProps = {
  cards: [],
  skew: {},
  heading2: null,
};
Hero8.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props to send to Skew component
  skew: PropTypes.object,
  // array of props to pass to CardProductPrice component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Hero8 from "@notus-pro/react/Hero8";

// texts as props
const product1 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Hero8 {...product1} />
    </>
  );
}`;

const docsObjects = {
  component: Hero8,
  componentName: "Hero8",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
