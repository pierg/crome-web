import DropdownButton from "components/Dropdowns/DropdownButton.js";
import passProps from "_texts/misc/dropdowns/dropdownbutton.js";
const props = `DropdownButton.defaultProps = {
  items: []
};
DropdownButton.propTypes = {
  text: PropTypes.string,
  // if you want an icon to the left of the text
  icon: PropTypes.string,
  // Array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  items: PropTypes.arrayOf(PropTypes.object),
  // props that can be passed to the Button component
  button: PropTypes.object
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import DropdownButton from "@notus-pro/react/DropdownButton";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <DropdownButton {...props} />
    </>
  );
}`;

const docsObjects = {
  component: DropdownButton,
  componentName: "DropdownButton",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
