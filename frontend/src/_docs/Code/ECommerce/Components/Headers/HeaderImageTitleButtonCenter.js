import HeaderImageTitleButtonCenter from "components/Headers/ECommerce/HeaderImageTitleButtonCenter.js";
import passProps from "_texts/e-commerce/headers/headerimagetitlebuttoncenter.js";
const dependencies = [
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
];
const props = `HeaderImageTitleButtonCenter.defaultProps = {
  color: "orange",
  skew: {},
};

HeaderImageTitleButtonCenter.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  // props to pass to the Skew component
  skew: PropTypes.object,
  // the background color of the icon
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
import HeaderImageTitleButtonCenter from "@notus-pro/react/HeaderImageTitleButtonCenter";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderImageTitleButtonCenter {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderImageTitleButtonCenter,
  componentName: "HeaderImageTitleButtonCenter",
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
    defaultColor: "red",
  },
};
export default docsObjects;
