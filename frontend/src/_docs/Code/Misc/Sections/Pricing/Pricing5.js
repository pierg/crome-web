import Pricing5 from "components/Sections/Misc/Pricing/Pricing5.js";
import passProps from "_texts/misc/pricing/pricing5.js";
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
    name: "CardPricingList",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardpricinglist",
  },
];
const props = `Pricing5.defaultProps = {
  cards: [],
  buttons: [],
  heading2badge: null,
};
Pricing5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the CardPricingList component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Pricing5 from "@notus-pro/react/Pricing5";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Pricing5
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Pricing5,
  componentName: "Pricing5",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
