import "_texts/presentation/headers/headerimagetitlecenter.js"
import "components/Headers/Presentation/HeaderImageTitleCenter.js"
import HeaderImageTitleCenter
import passProps

const props = `HeaderImageTitleCenter.defaultProps = {
  skewColor: "blueGray",
};

HeaderImageTitleCenter.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skewColor: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/HeaderImageTitleCenter"
import HeaderImageTitleCenter

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <HeaderImageTitleCenter
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: HeaderImageTitleCenter,
  componentName: "HeaderImageTitleCenter",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
