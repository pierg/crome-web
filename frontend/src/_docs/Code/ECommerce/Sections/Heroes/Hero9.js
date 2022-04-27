import Hero9 from "components/Sections/ECommerce/Heroes/Hero9.js";
import passProps from "_texts/e-commerce/heroes/hero9.js";
const dependencies = [
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
  {
    name: "CardProductText",
    link:
      "/components/e-commerce/components/cards#e-commerce-id-e-commerce-id-components-cardproducttext",
  },
];
const props = `Hero9.defaultProps = {
  cards: [],
  heading3badge: null,
};
Hero9.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // array of props to pass to CardProductText component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Hero9 from "@notus-pro/react/Hero9";

// texts as props
const product1 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Hero9 {...product1} />
    </>
  );
}`;

const docsObjects = {
  component: Hero9,
  componentName: "Hero9",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
