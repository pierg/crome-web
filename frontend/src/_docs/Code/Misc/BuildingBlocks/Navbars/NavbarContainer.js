import NavbarContainer from "components/Navbars/NavbarContainer.js";
const passProps = {
  children: "Creative Tim",
  breakpoint: "md",
};
const props = `NavbarContainer.defaultProps = {
  className: "",
};

NavbarContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};`;
const description =
  "This is the NavbarContainer tag. This adds a nice width for your navbar on large screens. ";

const preview = `import React from "react";

// @notus-pro/react
import NavbarContainer from "@notus-pro/react/NavbarContainer";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarContainer {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarContainer,
  componentName: "NavbarContainer",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
