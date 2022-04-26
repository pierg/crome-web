import NavbarSearchUser from "components/Navbars/NavbarSearchUser.js";
import passProps from "_texts/admin/navbars/navbarsearchusersettings2.js";
const props = `NavbarSearchUser.defaultProps = {
  brand: {},
  input: {},
  dropdown: {},
};

NavbarSearchUser.propTypes = {
  // properties to pass to the link object for the brand
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  brand: PropTypes.object,
  // properties to pass to the Input component
  input: PropTypes.object,
  // properties to pass to the DropdownUser component
  dropdown: PropTypes.object,
};`;
const description =
  "(Note! This component has a transparent background, but since it would not be visible anymore, we've added just here, in it's documentation page, the light blue background.)";

const preview = `import React from "react";

// @notus-pro/react
import NavbarSearchUser from "@notus-pro/react/NavbarSearchUser";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <NavbarSearchUser {...props} />
    </>
  );
}`;

const docsObjects = {
  component: NavbarSearchUser,
  componentName: "NavbarSearchUser",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full h-20 relative",
    previewClasses: "bg-lightBlue-500",
  },
};
export default docsObjects;
