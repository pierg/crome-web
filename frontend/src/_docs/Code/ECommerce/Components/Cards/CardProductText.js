import CardProductText from "components/Cards/ECommerce/CardProductText.js";
import passProps from "_texts/e-commerce/cards/cardproducttext.js";
const props = `CardProductText.defaultProps = {
  link: {},
  color: "blueGray",
};

CardProductText.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
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
  text: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  // properties to pass to the link object that wraps the title
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardProductText from "@notus-pro/react/CardProductText";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/4">
        <CardProductText {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardProductText,
  componentName: "CardProductText",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/4",
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
    defaultColor: "red",
  },
};
export default docsObjects;
