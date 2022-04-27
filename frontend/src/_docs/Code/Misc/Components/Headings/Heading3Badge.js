import "_texts/misc/headings/heading3badge.js"
import "components/Headings/Heading3Badge.js"
import Heading3Badge
import passProps

const props = `Heading3Badge.defaultProps = {
  color: "blueGray",
  alignment: "left",
  whiteContent: false,
};

Heading3Badge.propTypes = {
  // use this to make the title and description
  // change colors from blueGray-800 and blueGray-600
  // to white and blueGray-100
  whiteContent: PropTypes.bool,
  // props to pass to the Badge component
  badge: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"])
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Heading3Badge"
import HeaderLeftTitleRightImage

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <HeaderLeftTitleRightImage {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Heading3Badge,
  componentName: "Heading3Badge",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
