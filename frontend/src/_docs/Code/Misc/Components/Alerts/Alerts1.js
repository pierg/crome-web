import Alert from "components/Elements/Alert.js";
const passProps = {
  children: "Alert text here",
  color: "pink",
};
const props = `Alert.defaultProps = {
  color: "blueGray",
};
Alert.propTypes = {
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
const description = "Colors for the Alert component. ";

const preview = `import React from "react";

// @notus-pro/react
import Alert from "@notus-pro/react/Alert";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Alert {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Alert,
  componentName: "Alert",
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
