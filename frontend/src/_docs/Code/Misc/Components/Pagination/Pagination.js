import Pagination from "components/Pagination/Pagination.js";
import passProps from "_texts/misc/pagination/pagination.js";
const props = `Pagination.defaultProps = {
  size: "regular",
  color: "blueGray",
  links: [],
};

Pagination.propTypes = {
  // props to pass to the link component
  // if you pass a prop named to, the link will
  // be generated as a Link from react-router-dom
  // otherwise it will be generated as a <a> tag
  // you can also send disabled: true or active: true
  // for disabled and active effects
  links: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf(["sm", "regular", "lg"]),
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
import Pagination from "@notus-pro/react/Pagination";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Pagination {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Pagination,
  componentName: "Pagination",
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
    defaultColor: "pink",
  },
};
export default docsObjects;
