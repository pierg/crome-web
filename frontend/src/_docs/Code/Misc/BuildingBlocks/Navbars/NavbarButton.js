import NavbarButton from "components/Navbars/NavbarButton.js";
const passProps = {
  breakpoint: "xl",
  children: "Open",
  style: {
    display: "block !important",
  },
};
const props = `NavbarButton.defaultProps = {
  className: "",
};

NavbarButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // where the button should stop being visible
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};`;
const description =
  "This is the NavbarButton tag. You can used it inside the NavbarContainer to make the NavbarCollapse open on small devices. We've added a style of display block important so that you may see it. ";

const preview = `import React from "react";

// @notus-pro/react
import NavbarButton from "@notus-pro/react/NavbarButton";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarButton {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarButton,
  componentName: "NavbarButton",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
