import HeaderImageTitleCenter from "components/Headers/Presentation/HeaderImageTitleCenter.js";
import passProps from "_texts/presentation/headers/headerimagetitlecenter.js";

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
import HeaderImageTitleCenter from "@notus-pro/react/HeaderImageTitleCenter";

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
