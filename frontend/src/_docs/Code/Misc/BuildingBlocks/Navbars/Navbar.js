import Navbar from "components/Navbars/Navbar.js";
const passProps = {
  color: "pink",
  className: "text-white",
};
const props = `Navbar.defaultProps = {
  color: "white",
  className: "",
};

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "light",
    "dark",
    "transparent",
    "white",
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
  "This is the Navbar tag. It only adds some nice styles for wrapper component/tag. ";

const preview = `import React from "react";

// @notus-pro/react
import Navbar from "@notus-pro/react/Navbar";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Navbar {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Navbar,
  componentName: "Navbar",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "light",
      "dark",
      "transparent",
      "white",
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
