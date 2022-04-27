import "_texts/auth/cards/cardloginregister.js"
import "components/Cards/Auth/CardLoginRegister.js"
import CardLoginRegister
import passProps

const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
];
const props = `const cardTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  // array of props to pass to the Input components
  inputs: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      // props to pass to the Button component that wrapps the icon
      button: PropTypes.object,
    })
  ),
});

CardLoginRegister.defaultProps = {
  leftCard: { inputs: [], button: {}, socials: [] },
  rightCard: { inputs: [], button: {}, socials: [] },
  detailsPanel: {
    leftButton: {},
    rightButton: {},
  },
  color: "lightBlue",
};

CardLoginRegister.propTypes = {
  leftCard: cardTypes,
  rightCard: cardTypes,
  detailsPanel: PropTypes.shape({
    leftTitle: PropTypes.string,
    leftDescription: PropTypes.string,
    leftButton: PropTypes.object,
    rightTitle: PropTypes.string,
    rightDescription: PropTypes.string,
    rightButton: PropTypes.object,
  }),
  // color for the detailsPanel
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
import "@notus-pro/react/CardLoginRegister"
import CardLoginRegister

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <CardLoginRegister {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardLoginRegister,
  componentName: "CardLoginRegister",
  description,
  props,
  preview,
  passProps,
  dependencies,
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
    defaultColor: "dark",
  },
};
export default docsObjects;
