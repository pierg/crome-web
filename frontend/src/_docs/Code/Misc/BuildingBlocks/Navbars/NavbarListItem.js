import "components/Navbars/NavbarListItem.js"
import NavbarListItem

const passProps = {
  children: "Creative Tim",
};
const props = `NavbarListItem.defaultProps = {
  className: "",
};

NavbarListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};`;
const description =
  "This is the NavbarListItem tag. This is the wrapper for the list link. ";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/NavbarListItem"
import NavbarListItem

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarListItem {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarListItem,
  componentName: "NavbarListItem",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
