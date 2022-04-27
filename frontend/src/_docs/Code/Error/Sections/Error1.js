import Error1 from "components/Sections/Error/Error1.js";
import passProps from "_texts/error/error1error404.js";
const props = `Error1.defaulProps = {
  color: "dark",
};

Error1.propTypes = {
  error: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // background image to be added to the section
  image: PropTypes.string,
  // this is the colors for the error name
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
import Error1 from "@notus-pro/react/Error1";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Error1 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Error1,
  componentName: "Error1",
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
    defaultColor: "dark",
  },
};
export default docsObjects;
