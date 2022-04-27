import Button from "components/Elements/Button.js";
const passProps = {
  children: "button",
  color: "linkedin",
  fullWidth: true,
  outline: true,
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
  "Social colors, regular size, outline and full width for the Button component. ";

const preview = `import React from "react";

// @notus-pro/react
import Button from "@notus-pro/react/Button";

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
    ],
    defaultColor: "linkedin",
    childrenIsColor: true,
  },
};
export default docsObjects;
