import Incrementer from "components/Elements/Incrementer.js";
import passProps from "_texts/misc/forms/incrementer.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `Incrementer.defaultProps = {
  onChange: () => {},
  onMinus: () => {},
  onPlus: () => {},
  color: "orange",
  defaultValue: 0,
  min: -100,
  max: 100,
  changeValue: 1,
  size: "regular",
};

Incrementer.propTypes = {
  defaultValue: PropTypes.number,
  // the number with which the increment should increase
  // and the decrement should decrease
  changeValue: PropTypes.number,
  // what is the last number you can decrement to
  min: PropTypes.number,
  // what is the last number you can increment to
  max: PropTypes.number,
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
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
  // this function will be called for both
  // increment and decrement actions
  // Example of usage: onChange={(value) => console.log(value)}
  // the above example will show you the new value
  onChange: PropTypes.func,
  // this function will be called for
  // the decrement action
  // Example of usage: onMinus={(value) => console.log(value)}
  // the above example will show you the new value
  onMinus: PropTypes.func,
  // this function will be called for
  // the increment action
  // Example of usage: onMinus={(value) => console.log(value)}
  // the above example will show you the new value
  onPlus: PropTypes.func,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Incrementer from "@notus-pro/react/Incrementer";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Incrementer {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Incrementer,
  componentName: "Incrementer",
  description,
  props,
  preview,
  passProps,
  dependencies,
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
    defaultColor: "orange",
  },
};
export default docsObjects;
