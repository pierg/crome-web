import HeaderStatCards from "components/Headers/Admin/HeaderStatCards.js";
import passProps from "_texts/admin/headers/headerstatcards.js";
const dependencies = [
  {
    name: "CardStatsMini",
    link:
      "/components/admin/components/cards#admin-id-admin-id-components-cardstatsmini",
  },
];
const props = `HeaderStatCards.defaultProps = {
  cards: [],
  color: "blueGray"
};

HeaderStatCards.propTypes = {
  // array of props to pass to the CardStatsMini component
  cards: PropTypes.arrayOf(PropTypes.object),
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
import HeaderStatCards from "@notus-pro/react/HeaderStatCards";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderStatCards {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderStatCards,
  componentName: "HeaderStatCards",
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
    defaultColor: "blueGray",
  },
};
export default docsObjects;
