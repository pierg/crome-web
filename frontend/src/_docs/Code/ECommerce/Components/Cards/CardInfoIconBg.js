import CardInfoIconBg from "components/Cards/ECommerce/CardInfoIconBg.js";
import passProps from "_texts/e-commerce/cards/cardinfoiconbg.js";
const props = `CardInfoIconBg.defaultProps = {
  button: {},
  color: "blueGray",
};

CardInfoIconBg.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // color for the icon and link
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
  // properties to pass to the link object that appears on hover
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardInfoIconBg from "@notus-pro/react/CardInfoIconBg";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/4">
        <CardInfoIconBg {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardInfoIconBg,
  componentName: "CardInfoIconBg",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/4 mt-8",
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
    defaultColor: "lightBlue",
  },
};
export default docsObjects;
