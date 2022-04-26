import NavbarBrand from "components/Navbars/NavbarBrand.js";
const passProps = {
  type: "dark",
  children: "Creative Tim",
  className: "text-white",
  href: "#pablo",
};
const props = `NavbarBrand.defaultProps = {
  type: "light",
  className: "",
};

// you can pass any other props that you might pass to
// the <a> tag or to the <Link> component from react-router-dom
NavbarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // light is for white text
  // dark is for text-blueGray-800
  type: PropTypes.oneOf(["light", "dark"]),
};`;
const description =
  "This is the NavbarBrand tag. You can used it inside the NavbarContainer.. ";

const preview = `import React from "react";

// @notus-pro/react
import NavbarBrand from "@notus-pro/react/NavbarBrand";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <NavbarBrand {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarBrand,
  componentName: "NavbarBrand",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
