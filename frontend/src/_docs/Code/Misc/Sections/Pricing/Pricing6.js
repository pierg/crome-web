import Pricing6 from "components/Sections/Misc/Pricing/Pricing6.js";
import passProps from "_texts/misc/pricing/pricing6.js";
const dependencies = [
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
  {
    name: "CardPricingLogo",
    link:
      "/components/misc/components/cards#misc-id-misc-id-components-cardpricinglogo",
  },
];
const props = `Pricing6.defaultProps = {
  cards: [],
  heading3: null,
};
Pricing6.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  // array of props to pass to the CardPricingLogo component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// sections
import Pricing6 from "@notus-pro/react/Pricing6";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Pricing6
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Pricing6,
  componentName: "Pricing6",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
