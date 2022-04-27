import HeaderBlogPost from "components/Headers/ECommerce/HeaderBlogPost.js";
import passProps from "_texts/e-commerce/headers/headerblogpost.js";
const dependencies = [
  {
    name: "Skew",
    link: "/components/misc/components/skews#misc-id-misc-id-components-skew",
  },
];
const props = `HeaderBlogPost.defaultProps = {
  color: "blueGray",
  skew: {}
};

HeaderBlogPost.propTypes = {
  // background image source
  image: PropTypes.string,
  title: PropTypes.string,
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
  // props to pass to the Skew component
  skew: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import HeaderBlogPost from "@notus-pro/react/HeaderBlogPost";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <HeaderBlogPost {...props} />
    </>
  );
}`;

const docsObjects = {
  component: HeaderBlogPost,
  componentName: "HeaderBlogPost",
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
    defaultColor: "emerald",
  },
};
export default docsObjects;
