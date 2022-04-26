import HeaderUser from "components/Headers/Admin/HeaderUser.js";
import passProps from "_texts/admin/headers/headeruser.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `HeaderUser.defaultProps = {
  button: {},
  color: "blueGray",
  gradient: false,
};

HeaderUser.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  // whether the color should be a simple one, or a gradient one
  gradient: PropTypes.bool,
  color: PropTypes.oneOf([
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
import HeaderUser from "@notus-pro/react/HeaderUser";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderUser {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderUser,
  componentName: "HeaderUser",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
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
    defaultColor: "blueGray",
  },
};
export default docsObjects;
