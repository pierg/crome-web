import Pricing3 from "components/Sections/ECommerce/Pricing/Pricing3.js";
import passProps from "_texts/e-commerce/pricing/pricing3ecommerce1.js";
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
    name: "CardProductPlain",
    link:
      "/components/e-commerce/components/cards#e-commerce-id-e-commerce-id-components-cardproductplain",
  },
];
const props = `Pricing3.defaultProps = {
  cards: [],
  button: {},
  heading2badge: null,
};
Pricing3.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // prop to pass to the Button component
  button: PropTypes.object,
  // array of props to pass to the CardProductPlain component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Pricing3 from "@notus-pro/react/Pricing3";
// texts as props
const pricing3 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Pricing3 {...pricing3} />
    </>
  );
}`;

const docsObjects = {
  component: Pricing3,
  componentName: "Pricing3",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
