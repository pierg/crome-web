import "_texts/presentation/headers/headervideotitle.js"
import "components/Headers/Presentation/HeaderVideoTitle.js"
import HeaderVideoTitle
import passProps

const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
];
const props = `HeaderVideoTitle.defaultProps = {
  skew: {},
};

HeaderVideoTitle.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonColor: PropTypes.oneOf([
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
  // props to pass to the Skew component
  skew: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/HeaderVideoTitle"
import HeaderVideoTitle

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderVideoTitle
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: HeaderVideoTitle,
  componentName: "HeaderVideoTitle",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "buttonColor",
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
