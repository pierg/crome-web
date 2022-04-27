import Heading3 from "components/Headings/Heading3.js";
import passProps from "_texts/misc/headings/heading3.js";
const props = `Heading3.defaultProps = {
  color: "blueGray",
  alignment: "left",
  whiteContent: false,
};

Heading3.propTypes = {
  // use this to make the title and description
  // change colors from blueGray-800 and blueGray-600
  // to white and blueGray-100
  whiteContent: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  // this is the color to be added to the subtitle
  color: PropTypes.oneOf([
    "light",
    "dark",
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
import HeaderLeftTitleRightImage from "@notus-pro/react/Heading3";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <HeaderLeftTitleRightImage {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Heading3,
  componentName: "Heading3",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
