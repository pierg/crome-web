import DropdownUser from "components/Dropdowns/DropdownUser.js";
import passProps from "_texts/misc/dropdowns/dropdownuser.js";
const props = `DropdownUser.defaultProps = {
  items: [],
};

DropdownUser.propTypes = {
  image: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // array of properties to pass to the link object
      // if you pass a prop named to, the link will be
      // generated using Link from react-router-dom
      // also, if you pass a prop named disabled
      // the link will be generated as a simple text
      PropTypes.object,
      PropTypes.shape({
        divider: true,
      }),
    ])
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import DropdownUser from "@notus-pro/react/DropdownUser";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <DropdownUser {...props} />
    </>
  );
}`;

const docsObjects = {
  component: DropdownUser,
  componentName: "DropdownUser",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
