import HeaderImageTitleLeft from "components/Headers/ECommerce/HeaderImageTitleLeft.js";
import passProps from "_texts/e-commerce/headers/headerimagetitleleft.js";
const props = `HeaderImageTitleLeft.defaultProps = {
  skewColor: "white",
};

HeaderImageTitleLeft.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  skewColor: PropTypes.oneOf(["white", "blueGray", "dark"]),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import HeaderImageTitleLeft from "@notus-pro/react/HeaderImageTitleLeft";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <HeaderImageTitleLeft {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderImageTitleLeft,
  componentName: "HeaderImageTitleLeft",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
