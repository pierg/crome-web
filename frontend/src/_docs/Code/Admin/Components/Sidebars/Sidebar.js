import Sidebar from "components/Sidebar/Sidebar.js";
import passProps from "_texts/admin/sidebar/sidebar.js";
const props = `Sidebar.defaultProps = {
  items: [],
  activeColor: "pink",
};

Sidebar.propTypes = {
  // this only applies for those items that have active set to true
  activeColor: PropTypes.oneOf([
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
  brand: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.string,
    // props to pass to the wrapper link of the text and image
    // if you pass a prop named to, it will be generated as
    // Link from react-router-dom
    link: PropTypes.object,
  }),
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this will generate a divider hr tag
      PropTypes.shape({
        divider: PropTypes.bool,
      }),
      // this will generate a text with the title string
      PropTypes.shape({
        title: PropTypes.string,
      }),
      // this will generate a Link/Anchor with bellow options
      PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
        // if set to true, the link will change color to the active one
        active: PropTypes.bool,
        // props to pass to the wrapper link of the text and icon
        // if you pass a prop named to, it will be generated as
        // Link from react-router-dom
        link: PropTypes.object,
      }),
    ])
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Sidebar from "@notus-pro/react/Sidebar";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Sidebar {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Sidebar,
  componentName: "Sidebar",
  description,
  props,
  preview,
  passProps: { ...passProps, items: passProps.items.splice(0, 10) },
  codeSnippetProps: {
    wrapperClasses:
      "w-full text-left ct-docs-disable-sidebar-fixed overflow-x-hidden",
    colorSwitchePropToChange: "activeColor",
    colorsSwitcher: [
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
