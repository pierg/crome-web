import "components/Elements/Button.js"
import Button

const passProps = {
  children: "button",
  color: "pink",
  size: "sm",
  fullWidth: true,
};
const props = `Button.defaultProps = {
  outline: false,
  color: "blueGray",
  fullWidth: false,
  size: "regular",
};
Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  outline: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "github",
    "pinterest",
    "youtube",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
    "linkedin",
    "white",
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
const description =
  "Simple colors, small size and full width for the Button component. ";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Button"
import Button

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Button {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Button,
  componentName: "Button",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "white",
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
    childrenIsColor: true,
  },
};
export default docsObjects;
