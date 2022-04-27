import NavbarCollapse from "components/Navbars/NavbarCollapse.js";
const passProps = {
  children: "Creative Tim",
  breakpoint: "md",
};
const props = `NavbarCollapse.defaultProps = {
  className: "",
  breakpoint: "lg",
};

NavbarCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // where the collapse should start being visible
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};`;
const description =
  "This is the NavbarCollapse tag. You can used it inside the NavbarContainer. ";

const preview = `import React from "react";

// @notus-pro/react
import NavbarCollapse from "@notus-pro/react/NavbarCollapse";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarCollapse {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarCollapse,
  componentName: "NavbarCollapse",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
