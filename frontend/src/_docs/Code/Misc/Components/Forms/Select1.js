import Select from "components/Elements/Select.js";
import passProps from "_texts/misc/forms/select.js";
const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
];
const props = `Select.defaultProps = {
  border: "border",
  size: "regular",
  items: [],
  closeOnSelect: true,
  defaultValue: "",
};

Select.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  border: PropTypes.oneOf(["border", "borderless"]),
  closeOnSelect: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // pass an object with text of string
      // if you want it to be disabled
      PropTypes.shape({
        text: PropTypes.string,
      }),
      // this will not be disabled and
      // users will be able to select it
      PropTypes.string,
    ])
  ),
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
const description = "This is a regular Select. ";

const preview = `import React from "react";

// @notus-pro/react
import Select from "@notus-pro/react/Select";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Select {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Select,
  componentName: "Select",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
