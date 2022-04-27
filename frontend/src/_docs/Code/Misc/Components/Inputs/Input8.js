import Input from "components/Elements/Input.js";
const passProps = {
  placeholder: "Large left icon bordered input",
  leftIcon: "fas fa-heart",
  size: "lg",
};
const props = `Input.defaultProps = {
  border: "border",
  size: "regular",
};

Input.propTypes = {
  border: PropTypes.oneOf(["border", "borderless"]),
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  leftIcon: PropTypes.string,
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  rightIcon: PropTypes.string,
};`;
const description = "Large left icon bordered input. ";

const preview = `import React from "react";

// @notus-pro/react
import Input from "@notus-pro/react/Input";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Input {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Input,
  componentName: "Input",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
