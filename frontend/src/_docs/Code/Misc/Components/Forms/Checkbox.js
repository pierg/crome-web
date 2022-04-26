import Checkbox from "components/Elements/Checkbox.js";
const passProps = {
  label: "My new check",
};
const props = `Checkbox.defaultProps = {};
// you can also pass additional props
// such as defaultValue, value, onChange, onClick etc.
Checkbox.propTypes = {
  label: PropTypes.string,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Checkbox from "@notus-pro/react/Checkbox";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Checkbox {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Checkbox,
  componentName: "Checkbox",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
