import Pricing2 from "components/Sections/ECommerce/Pricing/Pricing2.js";
import passProps from "_texts/e-commerce/pricing/pricing2.js";
const dependencies = [
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
  {
    name: "CardPricingList",
    link:
      "/components/e-commerce/components/cards#e-commerce-id-e-commerce-id-components-cardpricinglist",
  },
  {
    name: "CardTableDetails",
    link:
      "/components/e-commerce/components/cards#e-commerce-id-e-commerce-id-components-cardtabledetails",
  },
];
const props = `Pricing2.defaultProps = {
  leftCard: {},
  rightCard: {},
  heading3: null,
};
Pricing2.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // prop to pass to the CardPricingList component
  leftCard: PropTypes.object,
  // prop to pass to the CardTableDetails component
  rightCard: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Pricing2 from "@notus-pro/react/Pricing2";

// texts as props
const pricing2 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Pricing2 {...pricing2} />
    </>
  );
}`;

const docsObjects = {
  component: Pricing2,
  componentName: "Pricing2",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
