import Pricing1 from "components/Sections/Presentation/Pricing/Pricing1.js";
import passProps from "_texts/presentation/pricing/pricing1.js";
const props = `Pricing1.defaultProps = {
  defaultOpen: 1,
};
Pricing1.propTypes = {
  title: PropTypes.string,
  firstButtonText: PropTypes.string,
  secondButtonText: PropTypes.string,
  defaultOpen: PropTypes.oneOf([1, 2]),
  description: PropTypes.string,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardinfoiconProps: PropTypes.object,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardblogimageProps: PropTypes.object,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardcontactustitleProps: PropTypes.object,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardinfoimageProps: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Pricing1 from "@notus-pro/react/Pricing1";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Pricing1
        {...props}
      />
    </>
  );
}`;

const docsObjects = {
  component: Pricing1,
  componentName: "Pricing1",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
