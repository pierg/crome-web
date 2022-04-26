import HeaderBlogPostDark from "components/Headers/Blog/HeaderBlogPostDark.js";
import passProps from "_texts/blog/headers/headerblogpostdark.js";
const props = `HeaderBlogPostDark.defaultProps = {
  color: "blueGray",
};

HeaderBlogPostDark.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  quote: PropTypes.string,
  quoteSource: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
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
import HeaderBlogPostDark from "@notus-pro/react/HeaderBlogPostDark";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderBlogPostDark
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: HeaderBlogPostDark,
  componentName: "HeaderBlogPostDark",
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
    defaultColor: "lightBlue",
  },
};
export default docsObjects;
