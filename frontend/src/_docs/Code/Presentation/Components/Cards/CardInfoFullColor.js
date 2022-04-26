import CardInfoFullColor from "components/Cards/Presentation/CardInfoFullColor.js";
import passProps from "_texts/presentation/cards/cardinfofullcolor.js";
const props = `CardInfoFullColor.defaultProps = {
  gradient: true,
  color: "blueGray",
};

CardInfoFullColor.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
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
  // if the background should have a gradient
  gradient: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardInfoFullColor from "@notus-pro/react/CardInfoFullColor";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardInfoFullColor {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardInfoFullColor,
  componentName: "CardInfoFullColor",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
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
    defaultColor: "orange",
  },
};
export default docsObjects;
