import Progress from "components/Elements/Progress.js";
import passProps from "_texts/misc/content/progress.js";
const props = `Progress.defaultProps = {
  color: "blueGray",
  value: 0,
};
Progress.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
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
import Progress from "@notus-pro/react/Progress";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Progress {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Progress,
  componentName: "Progress",
  description,
  props,
  preview,
  passProps,
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
    defaultColor: "pink",
  },
};
export default docsObjects;
