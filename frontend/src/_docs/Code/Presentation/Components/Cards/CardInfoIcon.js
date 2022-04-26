import CardInfoIcon from "components/Cards/Presentation/CardInfoIcon.js";
import passProps from "_texts/presentation/cards/cardinfoicon.js";
const props = `CardInfoIcon.defaultProps = {
  iconColor: "lightBlue",
  gradient: true,
};

CardInfoIcon.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
  iconColor: PropTypes.oneOf([
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
import CardInfoIcon from "@notus-pro/react/CardInfoIcon";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardInfoIcon {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardInfoIcon,
  componentName: "CardInfoIcon",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
    colorSwitchePropToChange: "iconColor",
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
