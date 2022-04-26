import NavbarListLink from "components/Navbars/NavbarListLink.js";
const passProps = {
  children: "Creative Tim",
  breakpoint: "md",
};
const props = `NavbarListLink.defaultProps = {
  className: "",
  type: "light"
};

NavbarListLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // light is for white text
  // dark is for text-blueGray-800
  type: PropTypes.oneOf(["light", "dark"]),
  // where the padding should start being smaller
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};`;
const description =
  "This is the NavbarListLink tag. This is the link from inside your navbar list. ";

const preview = `import React from "react";

// @notus-pro/react
import NavbarListLink from "@notus-pro/react/NavbarListLink";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarListLink {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarListLink,
  componentName: "NavbarListLink",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
