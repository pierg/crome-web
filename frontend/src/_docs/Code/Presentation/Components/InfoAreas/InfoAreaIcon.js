import "_texts/presentation/infoarea/infoareaicon.js"
import "components/InfoAreas/Presentation/InfoAreaIcon.js"
import InfoAreaIcon
import passProps

const props = `InfoAreaIcon.defaultProps = {
  color: "blueGray",
};
InfoAreaIcon.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
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
import "@notus-pro/react/InfoAreaIcon"
import InfoAreaIcon

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <InfoAreaIcon {...props} />
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaIcon,
  componentName: "InfoAreaIcon",
  description,
  props,
  preview,
  passProps,
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
    defaultColor: "lightBlue",
  },
};
export default docsObjects;
