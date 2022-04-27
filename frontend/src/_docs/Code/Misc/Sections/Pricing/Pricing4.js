import Pricing4 from "components/Sections/Misc/Pricing/Pricing4.js";
import passProps from "_texts/misc/pricing/pricing4.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "CardPricingDetails",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardpricingdetails",
  },
];
const props = `Pricing4.defaultProps = {
  cards: [],
  buttons: [],
  heading2: null,
};
Pricing4.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the CardPricingDetails component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Pricing4 from "@notus-pro/react/Pricing4";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Pricing4
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Pricing4,
  componentName: "Pricing4",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
