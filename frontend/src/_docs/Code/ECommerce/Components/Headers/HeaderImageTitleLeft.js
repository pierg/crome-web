import "_texts/e-commerce/headers/headerimagetitleleft.js"
import "components/Headers/ECommerce/HeaderImageTitleLeft.js"
import HeaderImageTitleLeft
import passProps

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
import "@notus-pro/react/HeaderImageTitleLeft"
import HeaderImageTitleLeft

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
