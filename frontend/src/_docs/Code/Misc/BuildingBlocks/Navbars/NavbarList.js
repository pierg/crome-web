import NavbarList from "components/Navbars/NavbarList.js";
const passProps = {
  children: "Creative Tim",
  breakpoint: "md",
};
const props = `Navbar.defaultProps = {
  className: "",
};

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // where the list should be inline alligned
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};`;
const description =
  "This is the NavbarList tag. This is the wrapper for the list items. ";

const preview = `import React from "react";

// @notus-pro/react
import NavbarList from "@notus-pro/react/NavbarList";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarList {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarList,
  componentName: "NavbarList",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
