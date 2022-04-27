import "components/Elements/Badge.js"
import Badge

const passProps = {
  children: "badge",
  color: "pink",
};
const props = `Badge.defaultProps = {
  round: false,
  color: "blueGray",
};
Badge.propTypes = {
  round: PropTypes.bool,
  children: PropTypes.node,
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
const description = "Colors and regular for the Badge component. ";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Badge"
import Badge

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Badge {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Badge,
  componentName: "Badge",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
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
    ],
    defaultColor: "pink",
  },
};
export default docsObjects;
