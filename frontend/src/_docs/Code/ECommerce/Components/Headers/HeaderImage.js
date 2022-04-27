import HeaderImage from "components/Headers/ECommerce/HeaderImage.js";
import passProps from "_texts/e-commerce/headers/headerimage.js";
const props = `HeaderImage.defaultProps = {
  skew: {},
};

HeaderImage.propTypes = {
  image: PropTypes.string,
  // object of props that can be passed to the Skew component
  skew: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import HeaderImage from "@notus-pro/react/HeaderImage";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <HeaderImage {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderImage,
  componentName: "HeaderImage",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
