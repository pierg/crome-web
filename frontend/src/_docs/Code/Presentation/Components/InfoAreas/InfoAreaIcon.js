import InfoAreaIcon from "components/InfoAreas/Presentation/InfoAreaIcon.js";
import passProps from "_texts/presentation/infoarea/infoareaicon.js";
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
import InfoAreaIcon from "@notus-pro/react/InfoAreaIcon";

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
