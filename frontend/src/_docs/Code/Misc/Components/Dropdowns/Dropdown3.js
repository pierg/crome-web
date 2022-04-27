import DropdownNavbar from "components/Dropdowns/DropdownNavbar.js";
import passProps from "_texts/misc/dropdowns/dropdownnavbar.js";
const props = `DropdownNavbar.defaultProps = {
  items: [],
};

DropdownNavbar.propTypes = {
  // text of the dropdown
  text: PropTypes.string,
  // array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: if you pass disabled as prop inside this object
  // // // the link will be rendered as a span element
  items: PropTypes.arrayOf(PropTypes.object),
  // you specify the nav color, so that the
  // dropdown text will be styled accordingly
  navColor: PropTypes.oneOf([
    "dark",
    "light",
    "transparent",
    "white",
    "black",
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
import DropdownNavbar from "@notus-pro/react/DropdownNavbar";

const props = ${JSON.stringify({ ...passProps, navColor: "light" })}

export default function Example() {
  return (
    <>
      <DropdownNavbar {...props} />
    </>
  );
}`;

const docsObjects = {
  component: DropdownNavbar,
  componentName: "DropdownNavbar",
  description,
  props,
  preview,
  passProps: {
    ...passProps,
    navColor: "light",
  },
};
export default docsObjects;
